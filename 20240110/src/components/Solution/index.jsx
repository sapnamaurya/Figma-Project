import React from "react";
import solution from "../../assets/images/solution.png";
import { Box, Typography } from "@mui/material";
import "./style.css";

function Solution() {
  return (
    <>
      <Box className="solution-cont">
        <img src={solution} alt="solution" className="figma-img" />
        <Box sx={{ textAlign: "center", marginTop: "4%" }}>
          <Typography
            sx={{ fontSize: "h3.fontSize", fontWeight: "bold" }}
            className="problem"
          >
            Fresh Solution To Your Company's Hardest Problems
          </Typography>
          <Typography className="consulting" sx={{ fontSize: "h4.fontSize" }}>
            Unconventional Consulting.
          </Typography>
          <Typography className="about">
            We dont't believe in one -size-fits-all.We meet you where you
            are,customizing or innovatve offerings to your unique needs and
            culture-which is just one way that we do thing differently.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default Solution;
