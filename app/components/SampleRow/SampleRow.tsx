import { Cell, links as CellLinks } from "../Cell";

type GuessLetter = {
  key: string;
  status: "absent" | "present" | "correct" | string;
};
interface Props {
  guess: GuessLetter[];
}

export function links() {
  return [...CellLinks()];
}

export const SampleRow = ({ guess }: Props) => {
  return (
    <div className="guess-word">
      {guess?.map((guessLetter: GuessLetter, index: number) => (
        <Cell key={index} status={guessLetter.status}>
          {guessLetter.key}
        </Cell>
      ))}
    </div>
  );
};
