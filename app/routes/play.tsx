import { useState } from "react";
import { Grid, links as GridLinks } from "~/components/Grid";
import { Header } from "~/components/Header";
import { Keyboard, links as KeyboardLinks } from "~/components/Keyboard";
import { wordsService } from "~/services/wordsService";

export function links() {
  return [...GridLinks(), ...KeyboardLinks()];
}

const dayWord = wordsService.getWordOfDay();
console.log(`Today's word is... ${dayWord}!`);

const Play = () => {
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
