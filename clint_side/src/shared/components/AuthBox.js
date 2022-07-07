import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
const BoxWrapper = styled("div")({
  width: '100%',
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",


});
function AuthBox(props) {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#363479",
          borderRadius: "50px",
          boxShadow: "0 20px 20px 20px rgb(2 2 2/20%)",
          display:'flex',
          flexDirection:'column',
          padding:'25px',
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
}

export default AuthBox;
