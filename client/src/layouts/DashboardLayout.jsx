import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function DashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>Dashboard</h1>
          <p className="subtitle">
            Connecte en tant que {user?.fullName} ({user?.role})
          </p>
        </div>
        <nav className="topbar-actions">
          <Link to="/">Accueil</Link>
          <Link to="/dashboard/candidat">Candidat</Link>
          <Link to="/dashboard/recruteur">Recruteur</Link>
          <Link to="/dashboard/admin">Admin</Link>
          <button type="button" onClick={logout}>
            Deconnexion
          </button>
        </nav>
      </header>
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}

