import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

interface Props {
  children?: any;
}

export const Cell = ({ children }: Props) => {
  return <div className="word-cell">{children}</div>;
};
