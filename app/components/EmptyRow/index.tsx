import { Cell, links as CellLinks } from "../Cell";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }, ...CellLinks()];
}

export const EmptyRow = () => {
  return (
    <div className="guess-word">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
};
