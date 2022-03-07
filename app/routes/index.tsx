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
          ¡La nueva app de Biko <strong>customizada</strong> para jugar al
          Wordle!
        </p>
        <p>
          ¿Un Wordle para Biko? ¡No! El Wordle <strong>de</strong> Biko.
        </p>
        <p>
          Si no <span className="crossed">conoces</span> sabes cómo funciona el
          juego, aquí tienes
          <strong
            className="inner-link custom-link"
            onClick={() => setRulesModalOpen(true)}
          >
            aiuda
          </strong>
          .
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
