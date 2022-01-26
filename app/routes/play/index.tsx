import { Grid, links as GridLinks } from "~/components/Grid";
import { Header } from "~/components/Header";
import { Keyboard, links as KeyboardLinks } from "~/components/Keyboard";

export function links() {
  return [...GridLinks(), ...KeyboardLinks()];
}

const Play = () => {
  return (
    <>
      <Header />
      <Grid />
      <Keyboard />
    </>
  );
};

export default Play;
