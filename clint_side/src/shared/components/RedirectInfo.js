import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  rediectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={rediectHandler } > {redirectText}</RedirectText>
    </Typography>
  );
};
export default RedirectInfo;
