import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  password?: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  users: User[];
  signup: (user: Omit<User, "id">) => { success: boolean; error?: string };
  login: (email: string, password?: string, isGoogle?: boolean) => { success: boolean; error?: string };
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      user: null,
      users: [],
      
      signup: (newUser) => {
        const { users } = get();
        if (users.find(u => u.email === newUser.email)) {
          return { success: false, error: "An account with this email already exists." };
        }
        
        const userWithId = { ...newUser, id: Math.random().toString(36).substring(7) };
        set({
          users: [...users, userWithId],
          isLoggedIn: true,
          user: userWithId
        });
        
        return { success: true };
      },
      
      login: (email, password, isGoogle = false) => {
        const { users } = get();
        
        if (isGoogle) {
          // Mock google login
          let googleUser = users.find(u => u.email === email);
          if (!googleUser) {
            googleUser = { id: Math.random().toString(36).substring(7), name: "Google User", email };
            set({ users: [...users, googleUser] });
          }
          set({ isLoggedIn: true, user: googleUser });
          return { success: true };
        }

        const user = users.find(u => u.email === email);
        if (!user) {
          return { success: false, error: "No account found with this email." };
        }
        
        if (user.password !== password) {
          return { success: false, error: "Incorrect password." };
        }
        
        set({ isLoggedIn: true, user });
        return { success: true };
      },

      logout: () => set({ isLoggedIn: false, user: null }),
    }),
    { name: "pitch-auth-v2" },
  ),
);
