import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let height = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  const handleScrollTo = () => {
    window.scrollTo({ top: 0, left: 100, behavior: "smooth" });
  };
  return (
    <>
      <Box>
        <Box className="footer-cont">
          <Box className="sec-1">
            <Typography
              sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Learn More
            </Typography>

            <List>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Start" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Grow" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Thrive" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Our Values" />
              </ListItem>
            </List>
          </Box>
          <Box className="sec-2">
            <Typography
              sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Who We Serve
            </Typography>

            <List>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Health & Fitnes" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Restaurants" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Collaborative Ventures" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Architecture" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Law/Legal Based Businesses" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="CoWorking Spaces" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="TEch Start-Up's" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Educational System" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Faith Baesd Organizations" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Non-Profit Organizatons" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Logistics" />
              </ListItem>
            </List>
          </Box>
          <Box className="sec-3">
            <Typography
              sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Where We Serve
            </Typography>

            <List>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Georgia" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Floridas" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="North & SOuth Carolina" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Texas" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Alabama" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Maryland" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="District of Columbia" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="New York" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Illinois" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="California" />
              </ListItem>
            </List>
          </Box>
          <Box className="sec-4">
            <Typography
              sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Join The Team
            </Typography>

            <List>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Who we're Looking " />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary=" For Apply Here" />
              </ListItem>
              <Typography
                sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
                variant="h6"
                component="div"
              >
                For Non-Profits
              </Typography>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Fee Waiver" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Discount Application" />
              </ListItem>
              <Typography
                sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
                variant="h6"
                component="div"
              >
                About Fresh
              </Typography>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Fresh Leadership" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Investor" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Box>
          <Box className="sec-5">
            <Typography
              sx={{ mt: 4, mb: 0, fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              Principles
            </Typography>

            <List>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Accessibility" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Education" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Environment" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Inclusive and Diversity" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Privacy" />
              </ListItem>
              <ListItem
                sx={{ fontWeight: "bold", color: "#4e4e51", padding: "0px" }}
              >
                <ListItemText primary="Racial Equity and justice" />
              </ListItem>
            </List>
          </Box>{" "}
        </Box>
        <hr />
        <Box className="basic-footer">
          <List className="basic-footer">
            <ListItemText
              className="copyright"
              primary="Copyright 2023 Fresh Solution LLC.All right reserved."
            />

            <ListItemText className="title1" primary="Privacy Policy" />
            <ListItemText className="title" primary="Terms of Use" />

            <ListItemText className="title" primary="Sales and Refunds" />

            <ListItemText className="title" primary="Legal" />
            <ListItemText className="title" primary="Site Map" />
            <ListItemText className="title" primary="United Stae" />
          </List>
        </Box>
        {isVisible && (
          <Box onClick={handleScrollTo} className="back-top">
            <NorthIcon />
          </Box>
        )}
      </Box>
    </>
  );
}
export default Footer;
