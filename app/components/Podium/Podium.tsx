import Avatar from "react-avatar";
import { LinksFunction } from "remix";
import styles from "./Podium.css";

type Podium = {
  name: string;
  photo: string;
  score: number;
  email: string;
  id: string;
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
          <Avatar
            src={data.photo}
            email={data.email}
            googleId={data.id}
            name={data.name}
            round
            className="avatar"
            size="90"
          />
          <div className="userData">
            <span className={`position`}>#{index + 1}</span> {data.name}
            <p className="score">{data.score} pts</p>
          </div>
        </div>
      ))}
    </article>
  );
};
