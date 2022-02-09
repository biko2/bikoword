import { useEffect, useState } from "react";
import { Grid, links as GridLinks } from "~/components/Grid";
import { Keyboard, links as KeyboardLinks } from "~/components/Keyboard";
import { WORD_LENGTH } from "~/constants";
import { localStorageService } from "~/core/services/localStorage.service";
import { wordsService } from "~/core/services/words.service";

export function links() {
  return [...GridLinks(), ...KeyboardLinks()];
}

const Play = () => {
  const [dayWord, setDayWord] = useState<string>();
  const [wordCharacters, setWordCharacters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[][]>();

  useEffect(() => {
    const solution = localStorageService.getSolution();
    setDayWord(solution);
    const loadedGuesses = localStorageService.getItem("guesses");
    setGuesses(loadedGuesses ?? []);
  }, []);

  const handleKeyPress = (pressedKey: string) => {
    if (wordCharacters.length >= WORD_LENGTH) return;

    return setWordCharacters((previous: string[]) => [...previous, pressedKey]);
  };

  const handleEnterPress = () => {
    if (wordCharacters.length === WORD_LENGTH) {
      setGuesses([...guesses, wordCharacters]);
      localStorageService.setItem("guesses", [...guesses, wordCharacters]);
      return setWordCharacters([]);
    }
  };

  const handleDeletePress = () => {
    if (wordCharacters.length > 0) {
      return setWordCharacters((previous: string[]) => previous.slice(0, -1));
    }
  };

  if (!dayWord) return null;

  return (
    <>
      <Grid guesses={guesses} currentGuess={wordCharacters} />
      <Keyboard
        onKeyPress={handleKeyPress}
        onEnterPress={handleEnterPress}
        onDeletePress={handleDeletePress}
      />
    </>
  );
};

export default Play;
