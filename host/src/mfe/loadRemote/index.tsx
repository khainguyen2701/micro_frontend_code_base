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

export { productRouter, orderRouter };
