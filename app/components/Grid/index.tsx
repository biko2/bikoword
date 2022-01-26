import styles from "./styles.css";
import { EmptyRow, links as EmptyRowLinks } from "../EmptyRow";

export function links() {
  return [{ rel: "stylesheet", href: styles }, ...EmptyRowLinks()];
}

interface Props {
  guesses?: string[][];
  currentGuess?: string[];
}

export const Grid = ({ guesses = [], currentGuess }: Props) => {
  const emptyRows =
    guesses?.length < 5 ? Array.from(Array(5 - guesses?.length)) : [];

  return (
    <div className="word-grid">
      {emptyRows.map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </div>
  );
};
