import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
import start from "../../assets/images/start.png";
import grow from "../../assets/images/grow.png";
import thrive from "../../assets/images/thrive.png";

function Steps() {
  return (
    <>
      <Box>
        <Box className="steps-cont">
          <Box className="start-cont">
            <img className="start-img" src={start} alt="start" />
            <Box className="start">
              <Typography
                sx={{ fontSize: "h4.fontSize", mb: 6, fontWeight: "bold" }}
              >
                Start.
              </Typography>
              <Typography sx={{ mb: 4, fontSize: "h6.fontSize" }}>
                Getting Started? Start The Right Way With Fresh
              </Typography>
              <Typography sx={{ mb: 2, fontSize: "h6.fontSize" }}>
                Whats Offered?
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>Research</Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Do the Due Diligence-Market & Industry Deep Dive
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Formation
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                How You Start Is Often An Indicator of How You'll Finish. Set-up
                Your Business Structure The Right Way.
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Marketing
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                The Best Idea In The World Is Worth Nothing If No One Knowa
                About It.Put Your Brand In Front Of The Right People At The
                Right Time
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>Sales</Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Your Sales Are Only As Strong As Your Strategies And Tactics
                Behind THem.Create THe Momentum YOur Need To Be Great.
              </Typography>
            </Box>
          </Box>
          <Box className="grow-cont">
            <img className="grow-img" src={grow} alt="grow" />

            <Box className="grow">
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  mt: 1,
                  mb: 6,
                  fontWeight: "bold",
                }}
              >
                Grow.
              </Typography>
              <Typography sx={{ mb: 4, fontSize: "h6.fontSize" }}>
                Are You Overwhelmed? Take Your Power Back.
              </Typography>
              <Typography sx={{ mb: 2, fontSize: "h6.fontSize" }}>
                Whats Offered?
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Growth Pipeline Development
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Ther's A Universe Of Possibilities And Opportunities.We'll
                Figure Out Which One Is BEst For You And Your BUsiness.
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Go-To-Market Strategies
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                We'll Work With Your To Translate Those Strategic Pathways TO A
                Clear,Cogent Strategy So YOu Can Hit The Ground Running.
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Planning& Implementation
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Plans Are Empty Without Actions.Here We'll Focus On Implementing
                Our Specific Plans With Milestones,Targets,Owners,&Deadlines.
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Monitoring& Optimization
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Say Goodbye To Plateu'd Sales.Every Plan We Act On Will Be
                Continuosly Improved By Our Fresh Audit Team.
              </Typography>
            </Box>
          </Box>
          <Box className="thrive-cont">
            <img className="thrive-img" src={thrive} alt="thrive" />
            <Box className="thrive">
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  mt: 1,
                  mb: 6,
                  fontWeight: "bold",
                }}
              >
                Thrive.
              </Typography>
              <Typography sx={{ mb: 4, fontSize: "h6.fontSize" }}>
                Imagine.Innovate.Impact It's Your Time.
              </Typography>
              <Typography sx={{ mb: 2, fontSize: "h6.fontSize" }}>
                Whats Offered?
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Customer Experience
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                If YOu Sold THe BEst Sandwich In The World,And Paired It With
                The Worst Customer Service,You Wouldn't Be Selling many
                Sandwich.We'll Work With Your Whole Team To Transform Every
                sector OF YOur Customer's Experiencence
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Digital Transformation
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Leverage Technology,Data,And System Automation To Drive
                Sales.Make Your Business Modern So You Can Gain A True
                Competitive Edge.
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Business Strategy
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Future-Proof Your Business.Achieve Your Organizational Goals And
                Return On Investment Faster
              </Typography>
              <Typography sx={{ fontSize: "h6.fontSize" }}>
                Chaneg Management
              </Typography>
              <Typography
                sx={{ mb: 2, color: "#4e4e51", fontSize: "body2.fontSize" }}
              >
                Manage COntinous Change At Scale And Speed.Our Collaborative
                Appproach Helps Change Take HOld,Sidestepping Frustraion And
                Ushering YOur Organization TO Powerful Results.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "h2.fontSize",
            margin: " 3% auto",
            textAlign: "center",
            width: "38% ",
          }}
        >
          Three Approaches One Outcomes: OverWheling Success
        </Typography>
      </Box>
    </>
  );
}
export default Steps;
