import { useEffect, useState } from "react";
import { Grid, links as GridLinks } from "~/components/Grid";
import { Keyboard, links as KeyboardLinks } from "~/components/Keyboard";
import { wordsService } from "~/core/services/words.service";
import { useUser } from "~/hooks/useUser";

export function links() {
  return [...GridLinks(), ...KeyboardLinks()];
}

const Play = () => {
  const [dayWord, setDayWord] = useState<string>();
  const [wordCharacters, setWordCharacters] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const word = await wordsService.getWordOfDay();
      setDayWord(word);
    })();
  }, []);

  const handleKeyPress = (pressedKey: string) => {
    if (wordCharacters.length >= 5) return;

    return setWordCharacters((previous: string[]) => [...previous, pressedKey]);
  };

  const handleEnterPress = () => {
    if (wordCharacters.length === 5) {
      console.log("check word: ", wordCharacters);
      return;
    }
  };

  const handleDeletePress = () => {
    if (wordCharacters.length > 0) {
      return setWordCharacters((previous: string[]) => previous.slice(0, -1));
    }
  };

  if (!dayWord) return null;

  console.log("La palabra del día es... ", dayWord);

  return (
    <>
      <Grid />
      <Keyboard
        onKeyPress={handleKeyPress}
        onEnterPress={handleEnterPress}
        onDeletePress={handleDeletePress}
      />
    </>
  );
};

export default Play;
