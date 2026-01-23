import React from "react";

// Dùng cho components và fallback khi remote chết, không dùng được cho function
const ProviderProducts = React.lazy(() =>
  import("product_remotes_app").catch(() => {
    // Remote chết → trả về component fallback
    return {
      default: () => (
        <div style={{ padding: 16 }}>⚠️ Product service is unavailable</div>
      ),
    };
  }),
);
export default ProviderProducts;
