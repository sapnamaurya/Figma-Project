import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
import park from "../../assets/images/park.png";
import revival from "../../assets/images/tainingLogo.png";
import stateLogo from "../../assets/images/StateLogo.png";

function CaseStudies() {
  return (
    <>
      <Box className="cases-cont">
        <Typography sx={{ marginBottom: "2%", fontSize: "h5.fontSize" }}>
          Case Studies
        </Typography>
        <Box className="container">
          <Box className="case1">
            <Typography sx={{ fontSize: "h5.fontSize", fontWeight: "bold" }}>
              GROUND-UP DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                fontSize: "body1.fontSize",
                width: " 77%",
                margin: "5%auto",
              }}
            >
              Organizational Design & Strategy for Rapid Growth
            </Typography>
            <img src={park} alt="park" />
            <Typography sx={{ fontSize: "body1.fontSize", marginTop: "4%" }}>
              55% Growth in One Year
            </Typography>
          </Box>
          <Box className="case2">
            <Typography sx={{ fontSize: "h5.fontSize", fontWeight: "bold" }}>
              SUSTAINED GROWTH
            </Typography>
            <Typography
              sx={{
                fontSize: "body1.fontSize",
                width: " 77%",
                margin: "5%auto",
              }}
            >
              Desiging an Organizational Strategy to Accomodate for Rapid Growth
            </Typography>
            <img src={revival} alt="park" />
            <Typography sx={{ fontSize: "body1.fontSize", marginTop: "4%" }}>
              700% Growth Over 9 Quaters
            </Typography>
          </Box>
          <Box className="case3">
            <Typography sx={{ fontSize: "h5.fontSize", fontWeight: "bold" }}>
              TRAINING & DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                fontSize: "body1.fontSize",
                width: " 77%",
                margin: "5%auto",
              }}
            >
              Enavling Future Decision Making & Planning Through Capacity &
              Workload Planning
            </Typography>
            <img src={stateLogo} alt="park" />
            <Typography sx={{ fontSize: "body1.fontSize", marginTop: "4%" }}>
              Logistics Traning & Ops for 30,000 US Marines
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default CaseStudies;
