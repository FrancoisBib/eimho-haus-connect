import { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = "auth.user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as User;
        setUser(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const login: AuthContextType["login"] = async (email, password) => {
    // Simulation d'authentification
    // Remarque: pour simuler via SQLite dans le navigateur, on peut utiliser sql.js (WASM).
    // Ici on utilise localStorage pour la démo. On peut brancher sql.js plus tard.
    await new Promise((r) => setTimeout(r, 300));
    if (!email || !password) {
      return { ok: false, message: "Email et mot de passe requis" };
    }
    // règle simple: mot de passe "demo" accepté
    if (password !== "demo") {
      return { ok: false, message: "Identifiants invalides" };
    }
    const mock: User = {
      id: "u-1",
      name: email.split("@")[0] || "Utilisateur",
      email,
    };
    setUser(mock);
    try {
      localStorage.setItem(AUTH_KEY, JSON.stringify(mock));
    } catch {
      // ignore
    }
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch {
      // ignore
    }
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};