import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const roleToPath = {
  candidat: "/dashboard/candidat",
  recruteur: "/dashboard/recruteur",
  admin: "/dashboard/admin"
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginAsDemo } = useAuth();

  const handleDemoLogin = (role) => {
    loginAsDemo(role);
    navigate(roleToPath[role]);
  };

  return (
    <section className="panel">
      <span className="eyebrow">Connexion de demo</span>
      <h2>Choisir un role pour tester le routage protege</h2>
      <p>
        Cette page peut ensuite etre remplacee par un vrai formulaire branche
        sur `POST /api/auth/login`.
      </p>
      <div className="card-grid">
        <article className="card">
          <h3>Candidat</h3>
          <p>Parcours recherche, postulation et suivi.</p>
          <button type="button" onClick={() => handleDemoLogin("candidat")}>
            Continuer comme candidat
          </button>
        </article>
        <article className="card">
          <h3>Recruteur</h3>
          <p>Publication des offres et suivi des candidatures.</p>
          <button type="button" onClick={() => handleDemoLogin("recruteur")}>
            Continuer comme recruteur
          </button>
        </article>
        <article className="card">
          <h3>Administrateur</h3>
          <p>Supervision, moderation et pilotage.</p>
          <button type="button" onClick={() => handleDemoLogin("admin")}>
            Continuer comme admin
          </button>
        </article>
      </div>
    </section>
  );
}

