import { app } from "../infrastructure/firebase";
import { child, get, getDatabase, ref } from "firebase/database";
import { localStorageService } from "./localStorage.service";
import { WORDS } from "../words.constants";

const getWords = async (): string[] => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, "words"));

  return snapshot.val();
};

const setWordOfDay = async (): string => {
  const words = await getWords();
  // March 15, 2022 Game Epoch
  const startDate = new Date("March 15, 2022 00:00:00").valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - startDate) / msInDay);

  localStorageService.saveSolution(words[index % words.length].toUpperCase());
};

const isInWordlist = async (word): boolean => {
  const repoList = await getWords();

  return repoList.includes(word) || WORDS.includes(word.toLowerCase());
};

export const wordsService = {
  setWordOfDay,
  isInWordlist,
};
