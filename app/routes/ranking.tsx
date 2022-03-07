import { useEffect, useState } from "react";
import { Podium, links as PodiumLinks } from "~/components/Podium";
import {
  Ranking as RankingList,
  links as RankingLinks,
} from "~/components/Ranking";
import { rankingService } from "~/core/services/ranking.service";

export function links() {
  return [...PodiumLinks(), ...RankingLinks()];
}

const Ranking = () => {
  const [rankingData, setRankingData] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const data = await rankingService.getRanking();
      setRankingData(data ?? []);
    })();
  }, []);

  if (!rankingData) return null;

  const podiumData = rankingData.slice(0, 3);
  const restData = rankingData.slice(3);

  if (rankingData.length === 0) {
    return (
      <section className="router">
        <p className="disabled-text center">
          Parece que <strong>Nadie</strong> ha conseguido descifrar la palabra
          todavía!
        </p>
      </section>
    );
  }

  return (
    <section className="rankingWrapper">
      {!!podiumData && <Podium podiumData={podiumData.slice(0, 3)} />}

      {!!restData && (
        <article className="ranking">
          <RankingList rankData={restData} />
        </article>
      )}
    </section>
  );
};

export default Ranking;
