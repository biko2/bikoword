import { scoring } from "../domain/scoring.config";

const getTimingPoints = (timeInSeconds?: number): number => {
  if (!timeInSeconds) return 0;

  const minutesGuessing = timeInSeconds / 60;
  const hasRemainingSeconds = minutesGuessing % 2 !== 0;
  const timePoints = scoring.timing;

  if (minutesGuessing < 2 || (minutesGuessing === 2 && !hasRemainingSeconds)) {
    return timePoints[0];
  }

  if (minutesGuessing < 4 || (minutesGuessing === 4 && !hasRemainingSeconds)) {
    return timePoints[1];
  }

  if (minutesGuessing < 6 || (minutesGuessing === 6 && !hasRemainingSeconds)) {
    return timePoints[2];
  }

  if (minutesGuessing < 8 || (minutesGuessing === 8 && !hasRemainingSeconds)) {
    return timePoints[3];
  }

  return 0;
};

const getTriesPoints = (tries: number): number => {
  const tryPoints = scoring.tries;
  return tryPoints[tries - 1];
};

const getTotalPoints = (
  tries: number,
  timeInSeconds?: number,
  timesLettersRepeated: number = 0
): number => {
  const triesPoints = getTriesPoints(tries);
  const timingPoints = getTimingPoints(timeInSeconds);
  const repeatedLettersPoints = timesLettersRepeated * 5;

  return timingPoints + triesPoints - repeatedLettersPoints;
};

export const scoringService = {
  getTotalPoints,
};
