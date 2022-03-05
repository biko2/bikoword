import type { LinksFunction } from "remix";
import { useEffect, useState } from "react";
import styles from "./Keyboard.css";
import { Key, links as keyStyles } from "~/components/Key";
import { KEYS } from "./Keys";
import { statusService } from "~/core/services/status.service";

export type Key = {
  text: string;
  key: string;
};

type KeyboardType = {
  guesses: string[][];
  onKeyPress: Function;
  onEnterPress: Function;
  onDeletePress: Function;
};

export const links: LinksFunction = () => {
  return [...keyStyles(), { rel: "stylesheet", href: styles }];
};

export function Keyboard({
  guesses,
  onKeyPress,
  onEnterPress,
  onDeletePress,
}: KeyboardType) {
  const [usedChars, setUsedChars] = useState<string[]>([]);

  const onKeyPressAction: Record<string, Function> = {
    enter: onEnterPress,
    backspace: onDeletePress,
  };

  const handleKeyPressed = (value: string) => {
    const regex = /^[a-z\u00f1\u00d1]$/gi;
    if (regex.test(value)) {
      return onKeyPress(value.toUpperCase());
    }
    if (onKeyPressAction[value.toLowerCase()]) {
      return onKeyPressAction[value.toLowerCase()]();
    }
  };

  useEffect(() => {
    // console.log(statusService.getGuessCharsStatus());
    setUsedChars(statusService.getGuessCharsStatus());
  }, [guesses]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      handleKeyPressed(event.key);
    };

    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnterPress, onDeletePress, onKeyPress]);

  const getKeyStatus = (key: Key) => {
    // console.log(usedChars);
    const usedChar = usedChars.find((char) => {
      return char.key == key.text.toUpperCase();
    });

    if (!usedChar) return "";
    return usedChar.status;

    // console.log(usedChars[charIndex].status);

    // return usedChars[charIndex].status;
  };

  return (
    <div className="Keyboard">
      {KEYS.map((singleKey: any, index: number) => (
        <Key
          key={index}
          keyContent={singleKey}
          status={getKeyStatus(singleKey)}
          onKeyPress={handleKeyPressed}
        />
      ))}
    </div>
  );
}
