import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./style.css";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Box className="about-cont">
        <Box sx={{ marginTop: "4%" }}>
          <Typography sx={{ fontSize: "h2.fontSize", fontWeight: "bold" }}>
            What We're About
          </Typography>
          <Typography sx={{ fontSize: "h3.fontSize" }}>
            A Proven Methodlogy, Framework, and Process
          </Typography>
          <Typography
            sx={{
              fontSize: "h5.fontSize",
              fontWeight: "normal",
              margin: "2% auto",

              width: "53%",
            }}
          >
            Profitability is hard work.It never happens by accident. Grow your
            business profitably,dont just grow your business. The variable and
            exprenses seem endless,but they don't have to be.
          </Typography>
          <Box className="meet">
            <Typography className="started-text">
              Let's Meet <ArrowOutwardIcon />
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "h4.fontSize" }}>
            Execution Is Everything.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default About;
