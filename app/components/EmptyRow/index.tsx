import { Cell, links as CellLinks } from "../Cell";

export function links() {
  return [...CellLinks()];
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
