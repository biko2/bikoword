import { useState } from "react";
import { LinksFunction } from "remix";
import { GameStats } from "~/core/services/game.service";
import styles from "./styles.css";

interface Props {
  isOpen: boolean;
  finalGraph: string[][];
  gameWon: boolean;
  stats: GameStats;
  onClose: () => void;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const StatsModal = ({
  isOpen,
  finalGraph,
  gameWon,
  stats,
  onClose,
}: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  if (!isOpen) return null;

  const { totalGames, successRate, winsTree, gamesFailed } = stats;

  const failedPercentage = (gamesFailed * 100) / totalGames;
  const failedBlocksToShow = Math.floor(failedPercentage / 10);

  const handleCopyClick = () => {
    const tries =
      finalGraph.length != 6 ? finalGraph.length : gameWon ? 6 : "X";
    const stringifiedGraph = finalGraph
      .map((lineGraph) => lineGraph.join(""))
      .join("\n");

    const message = `BikoWordle ${tries}/6\n\n${stringifiedGraph}\n\n${window.location.origin}`;

    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div className={`copiedText ${copied ? 'show' : ''}`}>¡Copiado al portapapeles!</div>
      <div className="statsModal">
        <div className="statsModal__content">
          <div className="statsModal__close" onClick={onClose}>
            ✖️
          </div>
          <div className="statsModal__title">
            {gameWon ? "¡Así se hace!" : "¿En serio? 🦨"}
          </div>
          <div className="statsModal__graph">
            {finalGraph.map((guessGraph) =>
              guessGraph.map((letterStatus) => <div>{letterStatus}</div>)
            )}
          </div>
          <div className="statsModal__statistic">
            <div>
              <p className="statsModal__stat">{totalGames}</p>
              <p className="statsModal__statTitle">partidas</p>
            </div>
            <div>
              <p className="statsModal__stat">{successRate} %</p>
              <p className="statsModal__statTitle">victorias</p>
            </div>
          </div>
          <div className="statsModal__winDistribution">
            <div className="statsModal__distributionTitle">Distribución</div>
            {winsTree.map((victories, index) => {
              const percentage = (victories * 100) / totalGames;
              const blocksToShow = Math.floor(percentage / 10);
              return (
                <div key={index} className="statsModal__winBar">
                  {index + 1} -
                  {[...new Array(blocksToShow)].map((_, index) => (
                    <div key={index} className="statsModal__winSquare" />
                  ))}{" "}
                  {percentage.toFixed(0)} %
                </div>
              );
            })}
            <div className="statsModal__winBar">
              X -
              {[...new Array(failedBlocksToShow)].map((_, index) => (
                <div key={index} className="statsModal__winSquare" />
              ))}{" "}
              {failedPercentage.toFixed(0)} %
            </div>
          </div>
          <button className="statsModal__share" onClick={handleCopyClick}>
            Copiar
          </button>
        </div>
      </div>
    </>
  );
};
