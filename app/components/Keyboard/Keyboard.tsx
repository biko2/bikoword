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

export const Keyboard = ({
  onKeyPress,
  onEnterPress,
  onDeletePress,
}: KeyboardType) => {
  const handleKeyPressed = (pressedKey: string) => {
    if (pressedKey === "Enter") return onEnterPress();

    if (pressedKey === "Backspace") return onDeletePress();

    if (KEYS.find((key) => key.key === pressedKey))
      return onKeyPress(pressedKey);
  };

  useEffect(() => {
    const handleKeyPress = (event: Event) => {
      handleKeyPressed(event.key);
    };

    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, []);

  return (
    <div className="Keyboard">
      {KEYS.map((singleKey: any, index: number) => (
        <Key key={index} keyContent={singleKey} onKeyPress={handleKeyPressed} />
      ))}
    </div>
  );
};
