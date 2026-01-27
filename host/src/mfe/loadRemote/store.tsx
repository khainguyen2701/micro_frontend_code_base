export const authFunction = import("order_remotes_app/setAuthAdapter")
  .then((mod) => {
    const setFn = mod.setAuthAdapter;

    if (typeof setFn !== "function") {
      throw new Error("Remote setAuthAdapter is not a function");
    }
    const getFn = mod.getAuthAdapter;

    if (typeof getFn !== "function") {
      throw new Error("Remote getAuthAdapter is not a function");
    }

    return { setAuthAdapter: setFn, getAuthAdapter: getFn };
  })
  .catch((error) => {
    console.warn("[MF] setAuthAdapter load failed", error);

    return () => {};
  });
