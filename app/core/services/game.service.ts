import { MAX_TRIES } from "~/constants";
import { localStorageService } from "./localStorage.service";
import { rankingService } from "./ranking.service";
import { scoringService } from "./scoring.service";
import { userCookieService } from "./userCookie.service";

export type GameStats = {
  winsTree: number[];
  gamesFailed: number;
  totalGames: number;
  successRate: number;
};

const defaultStats: GameStats = {
  winsTree: Array.from(new Array(MAX_TRIES), () => 0),
  gamesFailed: 0,
  totalGames: 0,
  successRate: 0,
};

const loadStats = () => {
  return localStorageService.loadGameState() ?? defaultStats;
};

const getSuccessRate = (gameStats: GameStats) => {
  const { totalGames, gamesFailed } = gameStats;

  return Math.round(
    (100 * (totalGames - gamesFailed)) / Math.max(totalGames, 1)
  );
};

const saveStats = (gameStats: GameStats, incorrectGuessesBeforeEnd: number) => {
  const stats = { ...gameStats };

  stats.totalGames += 1;

  if (incorrectGuessesBeforeEnd >= MAX_TRIES) {
    stats.gamesFailed += 1;
  } else {
    stats.winsTree[incorrectGuessesBeforeEnd] += 1;
  }

  stats.successRate = getSuccessRate(stats);

  localStorageService.saveGameState(stats);

  const user = userCookieService.getUserFromCookie();
  const playScore = scoringService.getTotalPoints(
    incorrectGuessesBeforeEnd + 1
  );

  !!user && rankingService.setPersonalScore(user, playScore);

  return stats;
};

export const gameService = {
  loadStats,
  saveStats,
};
