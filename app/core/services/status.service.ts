import { localStorageService } from "./localStorage.service";

export type CharStatus = "absent" | "present" | "correct";

export const getWordStatus = (guess: string[]): CharStatus[] => {
  const splitSolution = localStorageService.getSolution().split("");
  const splitGuess = [...guess];

  const solutionCharsTaken = splitSolution.map((_) => false);

  const statuses: CharStatus[] = [...Array(guess.length)];

  splitGuess.forEach((letter, index) => {
    if (letter === splitSolution[index]) {
      statuses[index] = "correct";
      solutionCharsTaken[index] = true;
    }
  });

  splitGuess.forEach((letter, index) => {
    if (statuses[index]) return;

    if (!splitSolution.includes(letter)) {
      return (statuses[index] = "absent");
    }

    const indexOfPresentChar = splitSolution.findIndex(
      (letterToFind, index) =>
        letterToFind === letter && !solutionCharsTaken[index]
    );

    if (indexOfPresentChar > -1) {
      statuses[index] = "present";
      return (solutionCharsTaken[indexOfPresentChar] = true);
    }

    return (statuses[index] = "absent");
  });

  return statuses;
};

const buildFinalGraph = (guesses: string[][]): string[][] => {
  const guessesWithStatus = guesses.map((guess) => getWordStatus(guess));

  return guessesWithStatus.map((guessWithStatus) => {
    return guessWithStatus.map((letterStatus) => {
      switch (letterStatus) {
        case "absent":
          return "⬜";
        case "correct":
          return "🟩";
        case "present":
          return "🟨";
      }
    });
  });
};

export const statusService = {
  getWordStatus,
  buildFinalGraph,
};
