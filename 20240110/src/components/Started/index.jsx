import { Box, Typography } from "@mui/material";
import React from "react";
import bigLogo from "../../assets/images/big logo.png";
function Started() {
  return (
    <>
      <Box>
        <img src={bigLogo} alt="bigLogo" />
        <Typography sx={{ fontSize: "h6.fontSize" }}>Grow</Typography>
      </Box>
    </>
  );
}
export default Started;
