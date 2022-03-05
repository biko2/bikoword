import type { LinksFunction } from "remix";
import styles from "./Podium.css";

type Podium = {
  userName: string;
  avatar: string;
  score: number;
};

type Props = {
  podiumData: Podium[];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const Podium = ({ podiumData }: Props) => {
  return (
    <article className="podium">
      {podiumData.map((data, index) => (
        <div key={index} className={`top-${index + 1}`}>
          <img src={data.avatar} className="avatar" />
          <div className="userData">
            <span className={`position`}>#{index + 1}</span> {data.userName}
            <p className="score">{data.score} pts</p>
          </div>
        </div>
      ))}
    </article>
  );
};
