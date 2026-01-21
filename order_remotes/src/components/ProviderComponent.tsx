import { Button, Typography } from "@mui/material";
import React from "react";

const Provider: React.FC = () => {
  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        Hello Module Federation 2.0
      </Typography>
      <Button variant="contained">Hello world</Button>
    </>
  );
};

export default Provider;
