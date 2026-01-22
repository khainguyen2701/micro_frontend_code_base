### Routing trong hệ thống micro frontend

Chia routing thành 2 phần:

- Routing trong host shell
- Routing trong micro frontend

### Routing trong host shell

- Cài thư viện React Router vào project
- import React Router vào file cần sử dụng
- chia sẻ các library này ở module federation
  Host - Shell sẽ là nơi tạo lên hệ thống routing thông qua hook `createBrowserRouter` của react-router-dom
  và lúc này host shell sẽ có thể routing đến các micro frontend thông qua path `/remote-app` và các children router của micro frontend

Nếu bạn dùng children router của micro frontend, thì bạn phải set path của children router thành `/remote-app/children-router`, và bạn
phải dùng `Outlet` của react-router-dom để render children router của micro frontend

### Routing trong Remote app

- Cài thư viện React Router vào project
- import React Router vào file cần sử dụng
- chia sẻ các library này ở module federation

Remote App là nơi khai báo hệ thống routing của micro frontend, và lúc này host shell sẽ có thể routing đến các children router của micro frontend thông qua path config của bạn, nhưng config của bạn chia sẻ cho Host - Shell thì bạn không được dùng hook `createBrowserRouter` của react-router-dom tại vì nó sẽ làm xung đột với router của Host - Shell

Bạn chỉ dùng nó khi bạn lấy config đó và tạo router từ config đó cho riêng Remote App của bạn, như ví dụ

`remote_router.ts`

```
import App from "./App";

export const orderRouter = [
  {
    element: <App />, //Layout order remote
    errorElement: <div>Order Remotes Error</div>,
    children: [
      {
        index: true,
        element: <div>Order List</div>,
      },
      {
        path: ":id",
        element: <div>Order Detail</div>,
        errorElement: <div>Order Detail Error</div>,
      },
    ],
  },
];
```

`remote_index.tsx`

```
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { orderRouter } from "./router";

const router = createBrowserRouter([...orderRouter]);

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
```

### Cách thử triển khai router trong Remote app

#### Chạy project Host - Shell

Mở browser và truy cập vào đường dẫn `http://localhost:3000/remote-app_nth`

- Bạn sẽ thấy được `Order List`
- Truy cập vào đường dẫn `http://localhost:3000/remote-nth/123`
- Bạn sẽ thấy được `Order Detail`

#### Chạy project Remote - Micro Frontend

- Mở browser và truy cập vào đường dẫn `http://localhost:3001/`
- Bạn sẽ thấy được `Order List`
- Truy cập vào đường dẫn `http://localhost:3001/123`
- Bạn sẽ thấy được `Order Detail`
