import { scoringService } from "../scoring.service";

const testCases = [
  // minutos
  [60, 1, 0, 500], // 1 minute
  [120, 1, 0, 500], // 2 minutes
  [200, 1, 0, 400], // > 2 minutes
  [240, 1, 0, 400], // 4 minutes
  [242, 1, 0, 350], // > 4 minutes
  [360, 1, 0, 350], // 6 minutes
  [362, 1, 0, 325], // > 6 minutes
  [480, 1, 0, 325], // 8 minutes
  [482, 1, 0, 300], // > 8 minutes
  // tries
  [60, 2, 0, 450], // 2 tries
  [60, 3, 0, 300], // 3 tries
  [60, 4, 0, 250], // 4 tries
  [60, 5, 0, 225], // 5 tries
  [60, 6, 0, 201], // 6 tries
  // repeated letters
  [60, 1, 1, 495], // 1 repeated letter
  [60, 2, 2, 440], // 2 repeated letter
];

test.each(testCases)(
  "returns points for %p seconds play, with %p tries and letters repeated %p times",
  (seconds, tries, repeatedLetters, expectedResult) => {
    const result = scoringService.getTotalPoints(
      seconds,
      tries,
      repeatedLetters
    );

    expect(result).toBe(expectedResult);
  }
);
