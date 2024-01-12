import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import bigLogo from "../../assets/images/big logo.png";
function Started() {
  return (
    <>
      <Box className="started-cont">
        <img src={bigLogo} alt="bigLogo" />
        <Box className="text-cont">
          <Typography sx={{ fontSize: "h3.fontSize", fontWeight: "bold" }}>
            Grow Your Business
          </Typography>
          <Typography sx={{ fontSize: "h4.fontSize", textAlign: "center" }}>
            Start. Grow. Thrive
          </Typography>
          <Box className="get-started">
            <Typography className="started-text">Let's Get Started</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Started;
