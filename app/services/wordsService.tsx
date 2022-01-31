import { WORDS } from "~/constants/words";

const getWordOfDay = () => {
  const startingDate: Date = new Date("02/01/2022");
  const today: Date = new Date();

  const diffTime: number = Math.round(today - startingDate);
  const diffDays: number = Math.round(diffTime / (1000 * 60 * 60 * 24));

  return WORDS[diffDays]?.toUpperCase() || WORDS[0].toUpperCase();
};

export const wordsService = {
  getWordOfDay,
};
