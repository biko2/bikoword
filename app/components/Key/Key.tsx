import type { LinksFunction } from "remix";
import type { Key as KeyContentType } from "~/components/Keyboard";
import styles from "./Key.css";

type KeyType = {
  status: string | undefined;
  keyContent: KeyContentType;
  onKeyPress: Function;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const Key = ({ status, keyContent, onKeyPress }: KeyType) => {
  return (
    <button
      className={`Key ${!!status ? status : ""}`}
      onClick={() => onKeyPress(keyContent.key)}
    >
      <p>{capitalize(keyContent.text)}</p>
    </button>
  );
};
