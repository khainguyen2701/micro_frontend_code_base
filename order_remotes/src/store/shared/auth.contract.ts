export interface AuthAdapter {
  isAuthenticated?: boolean;
  getToken: () => string | null;
  setToken?: (token: string) => void;
  login?: () => void;
  logout?: () => void;
  subscribe?(listener: () => void): () => void;
}
