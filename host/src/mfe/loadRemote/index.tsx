import axios from "axios";
import React from "react";

const productRouter = import("product_remotes_app/router")
  .then((mod) => {
    if (!Array.isArray(mod.productRouter)) {
      throw new Error("Remote router default export is not RouteObject[]");
    }
    return mod.productRouter;
  })
  .catch(() => {
    return [];
  });

const orderRouter = import("order_remotes_app/router")
  .then((mod) => {
    if (!Array.isArray(mod.orderRouter)) {
      throw new Error("Remote router default export is not RouteObject[]");
    }
    return mod.orderRouter;
  })
  .catch(() => {
    return [];
  });

import type { AxiosInstance } from "axios";

let cachedAxios: AxiosInstance | null = null;

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  if (cachedAxios) return cachedAxios;

  try {
    const mod = await import("libs");
    cachedAxios = mod.axiosInstance;
  } catch (e) {
    console.error("Load libs failed, fallback axios", e);
    cachedAxios = axios;
  }

  return cachedAxios;
};

export const OrderApp = React.lazy(() =>
  import("order_remotes_app")
    .then((mod) => {
      if (!mod.default) {
        throw new Error("Remote app default export is missing");
      }
      return { default: mod.default };
    })
    .catch(() => {
      return {
        default: () => (
          <div style={{ padding: 16 }}>⚠️ Order service is unavailable</div>
        ),
      };
    }),
);

export { productRouter, orderRouter };
