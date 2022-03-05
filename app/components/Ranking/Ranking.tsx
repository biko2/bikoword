import type { LinksFunction } from "remix";
import styles from "./Ranking.css";

type Ranker = {
  userName: string;
  avatar: string;
  score: number;
};

type Props = {
  rankData: Ranker[];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Ranking = ({ rankData }: Props) => {
  return (
    <ul>
      {rankData.map((data, index) => (
        <li key={index} className="rankingRow">
          <div>
            <span className="position">#{index + 4}</span>
            <span className="name">{data.userName}</span>
          </div>
          <p className="score">{data.score} pts</p>
        </li>
      ))}
    </ul>
  );
};
