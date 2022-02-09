import { Link } from "remix";
import { loginService } from "~/core/services/login.service";
import { useUser } from "~/hooks/useUser";
import logo from "~/images/Logo.svg";

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="header">
      <Link to="/" className="header-item">
        <h1 className="site-title">
          <img src={logo} alt="logo" className="site-logo" />
        </h1>
      </Link>
      {!user ? (
        <button onClick={loginService.signInApp}>Iniciar sesión</button>
      ) : (
        <ul className="navigation">
          <li>
            <Link to="/play" className="header-item custom-link">
              Palabra del día
            </Link>
          </li>
          <li>
            <Link to="/ranking" className="header-item custom-link">
              Ranking
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
