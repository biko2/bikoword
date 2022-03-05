import { localStorageService } from "./localStorage.service";

export type CharStatus = "absent" | "present" | "correct" | string;

const CHAR_STATUS = {
  absent: "absent",
  present: "present",
  correct: "correct",
};

const getWordStatus = (guess: string[]): CharStatus[] => {
  const splitSolution = localStorageService.getSolution().split("");
  const splitGuess = [...guess];

  const solutionCharsTaken = splitSolution.map((_) => false);

  const statuses: CharStatus[] = [...Array(guess.length)];

  splitGuess.forEach((letter, index) => {
    if (letter === splitSolution[index]) {
      statuses[index] = CHAR_STATUS.correct;
      solutionCharsTaken[index] = true;
    }
  });

  splitGuess.forEach((letter, index) => {
    if (statuses[index]) return;

    if (!splitSolution.includes(letter)) {
      return (statuses[index] = CHAR_STATUS.absent);
    }

    const indexOfPresentChar = splitSolution.findIndex(
      (letterToFind, index) =>
        letterToFind === letter && !solutionCharsTaken[index]
    );

    if (indexOfPresentChar > -1) {
      statuses[index] = CHAR_STATUS.present;
      return (solutionCharsTaken[indexOfPresentChar] = true);
    }

    return (statuses[index] = CHAR_STATUS.absent);
  });

  return statuses;
};

const getGuessCharsStatus = () => {
  const guesses = localStorageService.getGuesses();
  const guessesStatus = guesses.map((guessWord) => getWordStatus(guessWord));

  const flattenGuessCharsStatus = guesses
    .map((guess, guessIndex) => {
      return guess.map((guessChar, guessCharIndex) => {
        return {
          key: guessChar,
          status: guessesStatus[guessIndex][guessCharIndex],
        };
      });
    })
    .flat();

  const unificatedGuessCharStatus = flattenGuessCharsStatus.map(
    (guessCharStatus) => {
      const charUses = flattenGuessCharsStatus.filter(
        (char) => char.key === guessCharStatus.key
      );

      const returnKey = { key: charUses[0].key, status: CHAR_STATUS.absent };

      if (charUses.find((char) => char.status === CHAR_STATUS.correct))
        return { ...returnKey, status: CHAR_STATUS.correct };
      if (charUses.find((char) => char.status === CHAR_STATUS.present))
        return { ...returnKey, status: CHAR_STATUS.present };
      return returnKey;
    }
  );

  return unificatedGuessCharStatus;
};

export const statusService = {
  getWordStatus,
  getGuessCharsStatus,
};
