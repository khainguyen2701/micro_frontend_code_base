// order_remotes/src/shared/useAuth.ts
import { useSyncExternalStore } from "react";
import { getAuthAdapter } from "./shared/auth.adapter";

export const useAuth = () => {
  const adapter = getAuthAdapter();

  // Subscribe to token changes
  const token = useSyncExternalStore(
    adapter.subscribe ?? (() => () => {}),
    () => adapter.getToken(),
    () => null,
  );

  return {
    token,
    setToken: adapter.setToken,
    logout: adapter.logout,
  };
};
