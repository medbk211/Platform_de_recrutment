import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function MainLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>Plateforme de recrutement</h1>
          <p className="subtitle">Base React + Node.js + MySQL</p>
        </div>
        <nav className="topbar-actions">
          <Link to="/">Accueil</Link>
          <Link to="/login">Connexion</Link>
          {user ? (
            <button type="button" onClick={logout}>
              Deconnexion
            </button>
          ) : null}
        </nav>
      </header>
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}

