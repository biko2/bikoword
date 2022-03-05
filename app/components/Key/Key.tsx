import type { LinksFunction } from "remix";
import styles from "./Key.css";

type KeyType = {
  keyContent: {
    text: string;
    key: string;
  };
  onKeyPress: Function;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const Key = ({ keyContent, onKeyPress }: KeyType) => {
  return (
    <button className="Key" onClick={() => onKeyPress(keyContent.key)}>
      <p>{capitalize(keyContent.text)}</p>
    </button>
  );
};
