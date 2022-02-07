import { WORD_LENGTH } from "~/constants";
import { Cell, links as CellLinks } from "../Cell";

interface Props {
  guess?: string[];
}

export function links() {
  return [...CellLinks()];
}

export const Row = ({ guess }: Props) => {
  const guessLength = guess?.length ?? 0;
  const emptyCells = Array.from(Array(WORD_LENGTH - guessLength));
  return (
    <div className="guess-word">
      {guess?.map((guessLetter: string, index: number) => (
        <Cell key={index}>{guessLetter}</Cell>
      ))}
      {emptyCells?.map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};
