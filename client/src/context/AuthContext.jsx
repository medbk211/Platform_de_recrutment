import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const demoUsers = {
  candidat: {
    id: 1,
    fullName: "Candidat Demo",
    email: "candidate@example.com",
    role: "candidat"
  },
  recruteur: {
    id: 2,
    fullName: "Recruteur Demo",
    email: "recruiter@example.com",
    role: "recruteur"
  },
  admin: {
    id: 3,
    fullName: "Admin Demo",
    email: "admin@example.com",
    role: "admin"
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      user,
      loginAsDemo: (role) => setUser(demoUsers[role] ?? null),
      logout: () => setUser(null)
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider.");
  }

  return context;
}

