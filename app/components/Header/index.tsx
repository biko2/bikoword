import { Link } from "remix";
import logo from "~/images/logo-biko.svg";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-item">
        <h1 className="site-title">
          <img src={logo} alt="logo" className="site-logo" />
          Word
        </h1>
      </Link>
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
    </div>
  );
};
