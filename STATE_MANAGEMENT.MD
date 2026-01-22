### State Management

Làm việc với state trong hệ thống micro frontend rất quan trọng, bạn phải đảm bảo là state của bạn được chia sẻ giữa các micro frontend, và bạn phải đảm bảo rằng state của bạn không bị xung đột khi có nhiều micro frontend chạy cùng một lúc, và đảm bảo rằng các remote có thể chạy đọc lập không bị crash app.

### Remote app

- Cần phải có `contract` và `adapter` để inject vào shell và lấy state từ shell,
- Cần có fallback nếu như remote app không thể đọc state từ shell, thì remote app phải có thể chạy độc lập
- Cần có `store` để lưu state của remote app, và phải chia sẻ store này ở module federation.
- Phải dùng hook mới từ React 18 trở lên là `useSyncExternalStore` để đọc state từ shell, lúc này khi cập nhật sẽ tự động cập nhật state của remote app.
- Expose cái adapter để inject vào shell, và shell sẽ inject adapter này vào remote app.

### Host shell

- Cần có `store` để lưu state của host shell, và phải chia sẻ store này ở module federation.
- Lấy adapter từ remote và phải có subcribe để subscribe state từ remote app, và khi có state mới thì cập nhật vào store của host shell.

```
setAuthAdapter({
    getToken: () => useAuthStore.getState().token,
    setToken: (token: string) => useAuthStore.getState().setToken(token),
    logout: () => useAuthStore.getState().logout(),
    subscribe: (listener: () => void) => useAuthStore.subscribe(listener),
  });
```
