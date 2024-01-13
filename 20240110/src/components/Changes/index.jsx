import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
import pic1 from "../../assets/images/pic2.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import pic2 from "../../assets/images/pic1.png";
function Changes() {
  return (
    <>
      <Box className="chnages-cont">
        <Typography
          sx={{ fontSize: "h4.fontSize", color: "orange", fontWeight: "bold" }}
        >
          How We Do It
        </Typography>
        <Box sx={{ display: "flex", marginTop: "2%" }}>
          <Box className="portion-1">
            <Typography
              sx={{ fontSize: "h4.fontSize", width: "40%", margin: "auto" }}
            >
              Strategy & Performance
            </Typography>
            <Typography
              sx={{
                fontSize: "body1",
                fontSize: "body1",
                lineHeight: "35px",
                margin: "4%auto",
                width: "34% ",
              }}
            >
              Our strategy specialists will help translate your organization's
              asprational ideas into actualities.We bring your busines goals to
              life across your organization through plans that are
              holistic,realistic,and adaptable to change.
            </Typography>
            <Typography
              sx={{
                fontSize: "h3.fontSize",
                lineHeight: "68px",
                margin: " auto",
                width: " 51%",
                letterSpacing: " 14px ",
              }}
            >
              "Imposible is just an opinion."
            </Typography>
            <Typography
              sx={{
                fontSize: "h5.fontSize",
                margin: " 3% 0 0 0",
              }}
            >
              _ Paulo Coelho
            </Typography>
          </Box>
          <Box className="portion-2">
            <Typography sx={{ fontSize: "h4.fontSize" }}>Talent</Typography>
            <Typography
              sx={{
                fontSize: "body1",
                lineHeight: "35px",
                margin: "4%auto",
                width: "34% ",
              }}
            >
              Strong cultures and engaged employees drive success we partner
              with clients to build talent stategies across the employee
              lifecycle,ensuring you have the right people with the right skills
              to advance your objectives-and the right cultural fit to thrive in
              your organization.
            </Typography>
            <Typography
              sx={{
                fontSize: "h3.fontSize",
                lineHeight: "68px",
                margin: " auto",
                width: " 51%",
                letterSpacing: " 14px ",
              }}
            >
              NOTHING CHNAGES IF NOTHING CHNAGES
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <img className="pic2" src={pic1} alt="pic1" />
            <Typography
              sx={{
                fontSize: "h5.fontSize",
                bottom: "21%",
                position: " relative",
              }}
            >
              Michaek White
            </Typography>
            <Typography
              sx={{ fontSize: "body2", bottom: " 21%", position: "relative" }}
            >
              Talent & Human Resources Specialist
            </Typography>
          </Box>
          <Box sx={{ width: "93%" }}>
            <Typography sx={{ margin: " 28%0 0 0", fontSize: "h5.fontSize" }}>
              Creating Positive Change
            </Typography>

            <Typography sx={{ margin: "7% 0 0 0", fontSize: "h6.fontSize" }}>
              Our Change Agents
            </Typography>

            <Typography sx={{ margin: "2% 0 0", fontSize: "body1" }}>
              Change Drive Progress
            </Typography>

            <Typography
              sx={{
                margin: "2% 0 0",
                fontSize: "body1",
                lineHeight: " 26px",
                margin: " 4%auto",
                width: "70% ",
              }}
            >
              Enterprises that invest in strong change management set themselves
              up to thrive. Fresh solution helps clients seize transformation as
              an opportunity to innovate and differentiate instead of reacting
              to change as it happens.
            </Typography>
            <Box className="connect">
              <Typography>
                Let's Meet <ArrowOutwardIcon />
              </Typography>
            </Box>
          </Box>
          <Box>
            <img className="pic1" src={pic2} alt="pic2" />
            <Typography
              sx={{
                fontSize: "h5.fontSize",
                bottom: "8%",
                position: " relative",
              }}
            >
              Preston Brown
            </Typography>
            <Typography
              sx={{ fontSize: "body2", bottom: " 9%", position: "relative" }}
            >
              Business System Analyst & Founder
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "h3.fontSize",
            bottom: " 8%",
            lineHeight: "53px",
            position: "relative",
            margin: "2% auto",
            width: "51%",
          }}
        >
          Unbelievalble Results, Unconventional Consulting
        </Typography>
      </Box>
    </>
  );
}
export default Changes;
