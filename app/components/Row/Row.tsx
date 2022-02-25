import { useState } from "react";
import { WORD_LENGTH } from "~/constants";
import { CharStatus, statusService } from "~/core/services/status.service";
import { Cell, links as CellLinks } from "../Cell";

interface Props {
  guess: string[];
  completed?: boolean;
}

export function links() {
  return [...CellLinks()];
}

export const Row = ({ guess, completed }: Props) => {
  const [guessStatus] = useState<CharStatus[]>(
    () => !!completed && statusService.getWordStatus(guess)
  );
  const guessLength = guess?.length ?? 0;
  const emptyCells = Array.from(Array(WORD_LENGTH - guessLength));

  return (
    <div className="guess-word">
      {guess?.map((guessLetter: string, index: number) => (
        <Cell
          key={index}
          {...(!!completed && {
            status: guessStatus[index],
          })}
        >
          {guessLetter}
        </Cell>
      ))}
      {emptyCells?.map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};
