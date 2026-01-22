import { Button, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../store/auth.store";

const Provider: React.FC = () => {
  const { token, setToken, logout } = useAuth();

  const handleSetToken = () => {
    setToken?.("đã set token mới");
  };

  const handleClearToken = () => {
    logout?.();
  };

  console.log("token", token);

  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        Hello Module Federation 2.0 and Token is {token}
      </Typography>
      <Button variant="contained" onClick={handleSetToken}>
        Set Token
      </Button>
      <Button variant="contained" onClick={handleClearToken}>
        Clear Token
      </Button>
    </>
  );
};

export default Provider;
