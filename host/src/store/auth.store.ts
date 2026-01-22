import { create } from "zustand";
type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
};
export const useAuthStore = create<AuthState>((set) => ({
  token: "host-token",
  setToken: (token: string) => set({ token }),
  logout: () => set({ token: null }),
}));
