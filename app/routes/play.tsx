import { useState } from "react";
import { useLoaderData } from "remix";
import { Grid, links as GridLinks } from "~/components/Grid";
import { Header } from "~/components/Header";
import { Keyboard, links as KeyboardLinks } from "~/components/Keyboard";
import { wordsService } from "~/core/services/words.service";

export function links() {
  return [...GridLinks(), ...KeyboardLinks()];
}

export async function loader() {
  return await wordsService.getWordOfDay();
}

const Play = () => {
  const dayWord = useLoaderData();
  console.log("La palabra del día es... " + dayWord);
  const [wordCharacters, setWordCharacters] = useState([]);

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

  return (
    <>
      <Header />
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
