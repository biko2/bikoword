import styles from "./styles.css";
import { EmptyRow, links as EmptyRowLinks } from "../EmptyRow";
import { Row, links as RowLinks } from "../Row";
import { MAX_TRIES } from "~/constants";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    ...EmptyRowLinks(),
    ...RowLinks(),
  ];
}

interface Props {
  guesses?: string[][];
  currentGuess?: string[];
}

export const Grid = ({ guesses = [], currentGuess }: Props) => {
  const emptyRows =
    guesses.length < MAX_TRIES - 1
      ? Array.from(Array(MAX_TRIES - 1 - guesses.length))
      : [];

  return (
    <div className="word-grid">
      {guesses.map((word, index) => (
        <Row key={index} guess={word} completed />
      ))}
      {guesses.length < MAX_TRIES && <Row guess={currentGuess} />}
      {emptyRows.map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </div>
  );
};
