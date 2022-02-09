import { app } from "../infrastructure/firebase";
import { child, get, getDatabase, ref } from "firebase/database";
import { localStorageService } from "./localStorage.service";

const getWords = async (): string[] => {
  const databaseRef = ref(getDatabase(app));

  const snapshot = await get(child(databaseRef, "words"));

  return snapshot.val();
};

const setWordOfDay = async (): string => {
  const words = await getWords();
  // January 1, 2022 Game Epoch
  const startDate = new Date("January 1, 2022 00:00:00").valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - startDate) / msInDay);

  localStorageService.saveSolution(words[index % words.length].toUpperCase());
};

export const wordsService = {
  setWordOfDay,
};
