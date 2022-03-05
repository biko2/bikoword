import { Podium, links as PodiumLinks } from "~/components/Podium";
import {
  Ranking as RankingList,
  links as RankingLinks,
} from "~/components/Ranking";

export function links() {
  return [...PodiumLinks(), ...RankingLinks()];
}

const Ranking = () => {
  const podiumData = [
    {
      userName: "Josu A",
      avatar:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      score: 2100,
    },
    {
      userName: "Josu A",
      avatar:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      score: 2100,
    },
    {
      userName: "Josu A",
      avatar:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      score: 2100,
    },
  ];
  return (
    <section className="rankingWrapper">
      <Podium podiumData={podiumData} />

      <article className="ranking">
        <RankingList rankData={podiumData} />
      </article>
    </section>
  );
};

export default Ranking;
