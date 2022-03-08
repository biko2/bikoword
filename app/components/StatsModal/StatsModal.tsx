import { useState } from "react";
import { LinksFunction } from "remix";
import { GameStats } from "~/core/services/game.service";
import styles from "./styles.css";
import close from "~/images/close.svg";

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
      <div className={`copiedText ${copied ? "show" : ""}`}>
        ¡Copiado al portapapeles!
      </div>
      <div className="modal-container">
        <div className="modal-content stats">
          <img className="modal-close" src={close} onClick={onClose} />

          <h2 className="title">
            {gameWon ? "¡Así se hace!" : "¿En serio? 🦨"}
          </h2>
          <div className="statsModal__graph">
            {finalGraph.map((guessGraph) =>
              guessGraph.map((letterStatus, index) => (
                <div key={`letterStatus-${index}`}>{letterStatus}</div>
              ))
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
            <h3 className="title-2">Distribución</h3>
            {winsTree.map((victories, winsIndex) => {
              const percentage = (victories * 100) / totalGames;
              const blocksToShow = Math.floor(percentage / 10);
              return (
                <div key={winsIndex} className="statsModal__winBar">
                  <strong>{winsIndex + 1} -</strong>
                  {[...new Array(blocksToShow)].map((_, index) => (
                    <div key={index} className="statsModal__winSquare" />
                  ))}{" "}
                  {percentage.toFixed(0)} %
                </div>
              );
            })}
            <div className="statsModal__winBar">
              <strong>X -</strong>
              {[...new Array(failedBlocksToShow)].map((_, index) => (
                <div
                  key={`failed-${index}`}
                  className="statsModal__winSquare"
                />
              ))}{" "}
              {failedPercentage.toFixed(0)} %
            </div>
          </div>
          <div className="center">
            <button className="button primary" onClick={handleCopyClick}>
              Copiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
