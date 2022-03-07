import { useState } from "react";
import { useUser } from "~/hooks/useUser";
import { RulesModal, links as RulesModalLinks } from "~/components/RulesModal";
import { loginService } from "~/core/services/login.service";
import { NavLink } from "remix";

export function links() {
  return [...RulesModalLinks()];
}

export default function Index() {
  const { user, logout } = useUser();
  const [isRulesModalOpen, setRulesModalOpen] = useState<boolean>(false);

  const logOut = () => {
    logout();
  };

  return (
    <nav className="router">
      <div className="welcome">
        <p>
          Bienvenido a <strong>BikoWordle</strong>,<br />
          ¡La nueva app de Biko customizada para jugar al Wordle!
        </p>
        <p>
          Si no tienes mucha idea de cómo funciona el juego, haz{" "}
          <strong
            className="inner-link custom-link"
            onClick={() => setRulesModalOpen(true)}
          >
            click aquí
          </strong>
        </p>
        <p>Pero si lo tienes claro...</p>

        <div className="ctas-wrapper">
          {user && (
            <>
              <NavLink to="/play" className="header-item">
                <button className="button primary">¡A JUGAR!</button>
              </NavLink>
              <button className="button secondary" onClick={logOut}>
                Cerrar sesión
              </button>
            </>
          )}
          {!user && (
            <button className="button primary" onClick={loginService.signInApp}>
              Inicia sesión
            </button>
          )}
        </div>

        <RulesModal
          isOpen={isRulesModalOpen}
          onClose={() => setRulesModalOpen(false)}
        />
      </div>
    </nav>
  );
}
