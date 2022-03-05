import { CharStatus } from "~/core/services/status.service";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

interface Props {
  children?: any;
  status?: CharStatus;
}

export const Cell = ({ children, status }: Props) => {
  return <div className={`word-cell ${!!status && status}`}>{children}</div>;
};
