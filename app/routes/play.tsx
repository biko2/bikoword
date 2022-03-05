import { useEffect, useState } from "react";
import { Grid, links as GridLinks } from "~/components/Grid";
import { Keyboard, links as KeyboardLinks } from "~/components/Keyboard";
import { StatsModal, links as StatsModalLinks } from "~/components/StatsModal";
import { MAX_TRIES, WORD_LENGTH } from "~/constants";
import { gameService, GameStats } from "~/core/services/game.service";
import { localStorageService } from "~/core/services/localStorage.service";
import { statusService } from "~/core/services/status.service";
import { gameUtils } from "~/core/utils/gameStatus.utils";

export function links() {
  return [...GridLinks(), ...KeyboardLinks(), ...StatsModalLinks()];
}

const Play = () => {
  const [isGameWon, setIsGameWon] = useState<boolean>();
  const [isGameLost, setIsGameLost] = useState<boolean>(false);
  const [wordCharacters, setWordCharacters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[][]>([]);
  const [stats, setStats] = useState<GameStats>();
  const [statsModalOpened, setStatsModalOpened] = useState<boolean>(false);
  const [finalGraph, setFinalGraph] = useState<string[][]>([]);

  const isGameEnded = isGameLost || isGameWon;

  useEffect(() => {
    const loadedGuesses = localStorageService.getGuesses();
    setGuesses(loadedGuesses);
    const gameStats = gameService.loadStats();

    setStats(gameStats);

    setIsGameWon(gameUtils.checkGameIsWon());
    setIsGameLost(gameUtils.checkGameIsLost());
  }, []);

  useEffect(() => {
    if (isGameEnded) {
      setStatsModalOpened(true);
      const buildedFinalGraph = statusService.buildFinalGraph(guesses);
      setFinalGraph(buildedFinalGraph);
    }
  }, [isGameEnded]);

  const handleKeyPress = (pressedKey: string) => {
    if (isGameEnded || wordCharacters.length >= WORD_LENGTH) return;

    return setWordCharacters((previous: string[]) => [...previous, pressedKey]);
  };

  const handleEnterPress = () => {
    if (isGameEnded || wordCharacters.length !== WORD_LENGTH) {
      return;
    }

    setGuesses([...guesses, wordCharacters]);
    localStorageService.setItem(
      "guesses",
      JSON.stringify([...guesses, wordCharacters])
    );
    setWordCharacters([]);

    const winningWord = localStorageService.getSolution();

    if (wordCharacters.join("") === winningWord) {
      console.log("omg you won!!");
      setStats(gameService.saveStats(stats, guesses.length));
      setIsGameWon(true);
    }

    if (guesses.length === MAX_TRIES - 1) {
      console.log("youre a fucking mofet");
      setStats(gameService.saveStats(stats, guesses.length + 1));
      setIsGameLost(true);
    }
  };

  const handleDeletePress = () => {
    if (isGameEnded) {
      return;
    }

    if (wordCharacters.length > 0) {
      return setWordCharacters((previous: string[]) => previous.slice(0, -1));
    }
  };

  return (
    <>
      <Grid guesses={guesses} currentGuess={wordCharacters} />
      <Keyboard
        onKeyPress={handleKeyPress}
        onEnterPress={handleEnterPress}
        onDeletePress={handleDeletePress}
      />
      <StatsModal
        isOpen={statsModalOpened}
        finalGraph={finalGraph}
        gameWon={isGameWon}
        stats={stats}
        onClose={() => setStatsModalOpened(false)}
      />
    </>
  );
};

export default Play;
