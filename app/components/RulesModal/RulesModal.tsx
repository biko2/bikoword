import type { LinksFunction } from "remix";
import close from "~/images/close.svg";
import { SampleRow } from "../SampleRow";
import styles from "./RulesModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const RulesModal = ({ isOpen = true, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <img className="modal-close" src={close} onClick={onClose} />

        <h2 className="title">¿Cómo jugar?</h2>
        <p>
          Adivina la <strong>palabra oculta</strong> en seis intentos.
        </p>
        <p>
          Cada intento debe ser una <strong>palabra válida</strong> de 5 letras.
        </p>
        <p>
          Después de cada intento <strong>el color de las letras cambia</strong>{" "}
          para mostrar qué tan cerca estás de acertar la palabra.
        </p>
        <h3 className="title-2">Ejemplos</h3>
        <SampleRow
          guess={[
            { key: "G", status: "correct" },
            { key: "A", status: "" },
            { key: "T", status: "" },
            { key: "O", status: "" },
            { key: "S", status: "" },
          ]}
        />
        <p>
          La letra <strong>G</strong> está en la palabra y en la{" "}
          <strong>posición correcta.</strong>
        </p>
        <SampleRow
          guess={[
            { key: "V", status: "" },
            { key: "O", status: "" },
            { key: "C", status: "present" },
            { key: "A", status: "" },
            { key: "L", status: "" },
          ]}
        />
        <p>
          La letra <strong>C</strong> está en la palabra pero en la{" "}
          <strong>posición incorrecta.</strong>
        </p>
        <SampleRow
          guess={[
            { key: "C", status: "" },
            { key: "A", status: "" },
            { key: "N", status: "" },
            { key: "T", status: "" },
            { key: "O", status: "absent" },
          ]}
        />
        <p>
          La letra <strong>O no está</strong> en la palabra.
        </p>
        <p>
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>
      </div>
    </div>
  );
};
