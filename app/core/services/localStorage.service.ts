import { GameStats } from "./game.service";

const saveSolution = (solution: string) => {
  const encodedSolution = window.btoa(solution);
  setItem("solution", encodedSolution);
};

const getSolution = () => {
  const rawEncodedSolution = localStorage.getItem("solution");

  if (rawEncodedSolution) {
    // it returns with double quotes idk why
    const encodedSolution = rawEncodedSolution.substring(
      1,
      rawEncodedSolution.length - 1
    );

    return window.atob(encodedSolution);
  }

  return null;
};

const setItem = (name: string, value: any) => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(name, stringifiedValue);
};

const getGuesses = (): string[][] => {
  const element = localStorage.getItem("guesses");
  return element ? JSON.parse(element) : null;
};

const removeItem = (name: string) => {
  localStorage.removeItem(name);
};

const loadGameState = () => {
  const state = localStorage.getItem("gameState");
  return state ? JSON.parse(state) : null;
};

const saveGameState = (stats: GameStats) => {
  setItem("gameState", JSON.stringify(stats));
};

export const localStorageService = {
  saveSolution,
  getSolution,
  setItem,
  getGuesses,
  removeItem,
  loadGameState,
  saveGameState,
};
