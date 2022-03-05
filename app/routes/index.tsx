import { Link } from "remix";
import { useUser } from "~/hooks/useUser";

export default function Index() {
  const { user, logout } = useUser();

  const logOut = () => {
    logout();
  };

  return (
    <nav className="router">
      <p>
        Bienvenido a <strong>BikoWordle</strong>,<br />
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
      {user && <button onClick={logOut}>Cerrar sesión</button>}
    </nav>
  );
}
