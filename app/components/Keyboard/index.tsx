import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  onLetterClick: (letter: string) => void;
}

export const Keyboard = ({ onLetterClick }: Props) => {
  const letterCollection = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "del"],
  ];

  return (
    <div className="keyboard">
      {letterCollection.map((letterRow) => (
        <div className="keyboard-row">
          {letterRow.map((letter, index) => (
            <div
              className="letter"
              key={index}
              onClick={() => onLetterClick(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
