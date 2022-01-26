import { Link } from "remix";

export default function Index() {
  return (
    <nav className="router">
      <p>
        Bienvenido a <strong>BikoWord</strong>,<br />
        ¡La nueva app de Biko customizada para jugar al Wordle!
      </p>
      <p>
        Si quieres jugar, descubre
        <Link to="/play" className="inner-link custom-link">
          la palabra del día
        </Link>
      </p>
      <p>
        Si quieres checkear tu posición, visita
        <Link to="/ranking" className="inner-link custom-link">
          el ranking
        </Link>
      </p>
    </nav>
  );
}
