import { MAX_TRIES } from "~/constants";
import { localStorageService } from "../services/localStorage.service";

const checkGameIsWon = () => {
  const winningWord = localStorageService.getSolution();
  const guesses = localStorageService.getGuesses();

  if (!guesses) return false;

  return (
    guesses.find((guessLetters) => winningWord === guessLetters.join("")) !==
    undefined
  );
};

const checkGameIsLost = () => {
  const guesses = localStorageService.getGuesses();

  if (!guesses) return false;

  return guesses.length === MAX_TRIES && !checkGameIsWon();
};

export const gameUtils = {
  checkGameIsWon,
  checkGameIsLost,
};
