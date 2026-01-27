### LOAD REMOTE APPLICATION

Thông thường khi chúng ta cần load remote application, chúng ta sẽ sử dụng `Module Federation` để load remote application, và sau đó chúng ta sẽ inject vào remotes trong shell và chúng ta dùng `React.lazy` để load remote application.

Đây là cách phổ biến và đơn giản nhất với điều kiện là các remotes phải được run trước khi shell run, nếu shell run trước thì sẽ bị báo lỗi các remote app không thể đọc remoteEntry.js từ shell.

Bởi vì đó chúng ta mới có khái niệm load remote application, và chúng ta phải đảm bảo rằng remote app không thể crash app khi load không thành công. và shell cũng không được crash khi có 1 hoặc nhiều remote không hoạt động


**Dưới đây mô tả về lỗi khi load remote application không thành công mà không dùng kỹ thuật fallback error hay còn gọi là error boundary.**

`Error: error   [browser] Uncaught (in promise) Error: [ Federation Runtime ]: Failed to get manifest. #RUNTIME-003
args: {"manifestUrl":"http://localhost:3001/mf-manifest.json","moduleName":"order_remotes_app","hostName":"host"}
View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/runtime/RUNTIME-003
Original Error Message:
 TypeError: Failed to fetch
while loading "./router" from webpack/container/reference/order_remotes_app
while loading "./setAuthAdapter" from webpack/container/reference/order_remotes_app `

#### Loading remote application (Components)

Chúng ta sẽ sử dụng `React.lazy` để load remote application, và chúng ta sẽ wrap nó trong `Suspense` component để hiển thị `LoadingComponent` khi remote application đang được load.

```
import React from "react";

const ProviderProducts = React.lazy(() =>
  import("product_remotes_app").catch(() => {
    return {
      default: () => (
        <div style={{ padding: 16 }}>⚠️ Product service is unavailable</div>
      ),
    };
  }),
);
export default ProviderProducts;

```

#### Loading remote application (Functions - Constants)

1. Constant

```
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
```

2. Function

```
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

```
