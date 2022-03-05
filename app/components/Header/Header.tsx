import { NavLink } from "remix";
import { loginService } from "~/core/services/login.service";
import { useUser } from "~/hooks/useUser";
import logo from "~/images/Logo.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isInverted, setInverted] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const path = window?.location?.pathname;

    if (path === "/ranking") {
      setInverted(true);
    }
  }, []);
  return (
    <header className={isInverted ? "header inverted" : "header"}>
      <NavLink to="/" className="header-item">
        <img src={logo} alt="logo" className="site-logo" />
      </NavLink>
      {!user ? (
        <button onClick={loginService.signInApp}>Iniciar sesión</button>
      ) : (
        <ul className="navigation">
          <li>
            <NavLink to="/" className="header-item">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/play" className="header-item">
              Palabra del día
            </NavLink>
          </li>
          <li>
            <NavLink to="/ranking" className="header-item">
              Ranking
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};
