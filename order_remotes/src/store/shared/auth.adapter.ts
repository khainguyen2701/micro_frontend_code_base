import { AuthAdapter } from "./auth.contract";

let authAdapter: AuthAdapter | null = null;

export const setAuthAdapter = (adapter: AuthAdapter) => {
  authAdapter = adapter;
};

export const getAuthAdapter = (): AuthAdapter => {
  if (!authAdapter) {
    throw new Error("Auth adapter not set");
  }
  return authAdapter;
};
