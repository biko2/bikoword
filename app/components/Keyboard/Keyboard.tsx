import type { LinksFunction } from "remix";
import { useEffect } from "react";
import styles from "./Keyboard.css";
import { Key, links as keyStyles } from "~/components/Key";
import { KEYS } from "./Keys";

type KeyboardType = {
  onKeyPress: Function;
  onEnterPress: Function;
  onDeletePress: Function;
};

export const links: LinksFunction = () => {
  return [...keyStyles(), { rel: "stylesheet", href: styles }];
};

export function Keyboard({
  onKeyPress,
  onEnterPress,
  onDeletePress,
}: KeyboardType) {
  const handleKeyPressed = (value: KeyValue) => {
    switch (value) {
      case "Enter":
        return onEnterPress();
      case "Backspace":
        return onDeletePress();
      default:
        return "a" <= value && value <= "z" && onKeyPress(value.toUpperCase());
    }
  };

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      handleKeyPressed(event.key);
    };

    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnterPress, onDeletePress, onKeyPress]);

  return (
    <div className="Keyboard">
      {KEYS.map((singleKey: any, index: number) => (
        <Key key={index} keyContent={singleKey} onKeyPress={handleKeyPressed} />
      ))}
    </div>
  );
}
