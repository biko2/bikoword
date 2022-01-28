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

export default function Play() {
  const wordOfDay = useLoaderData();
  console.log(wordOfDay);

  return (
    <>
      <Header />
      <Grid />
      <Keyboard />
    </>
  );
}
