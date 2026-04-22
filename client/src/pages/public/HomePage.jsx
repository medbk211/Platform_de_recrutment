import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../services/api";

export default function HomePage() {
  return (
    <section className="panel">
      <span className="eyebrow">Initialisation terminee</span>
      <h2>Le frontend React est pret a etre etendu.</h2>
      <p>
        Cette base contient le routage, un contexte d'authentification de demo,
        des dashboards par role et la connexion a l'API backend.
      </p>
      <div className="card-grid">
        <article className="card">
          <h3>API backend</h3>
          <p>{API_BASE_URL}</p>
        </article>
        <article className="card">
          <h3>Pages pretes</h3>
          <p>Accueil, connexion, dashboard candidat, recruteur et admin.</p>
        </article>
        <article className="card">
          <h3>Etape suivante</h3>
          <p>Brancher les formulaires React sur les endpoints Express.</p>
        </article>
      </div>
      <div className="action-row">
        <Link className="button-link" to="/login">
          Tester les roles de demo
        </Link>
      </div>
    </section>
  );
}

