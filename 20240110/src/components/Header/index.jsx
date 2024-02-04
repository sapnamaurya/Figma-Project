import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/images/small logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-scroll";
function Header() {
  return (
    <>
      <Box className="header-cont">
        <img src={logo} alt="logo" />
        <Box className="list-cont">
          <Button variant="text" className="buttons">
            <Link
              className="topic cursor-pointer heading"
              activeClass="active"
              to="start"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography className="topic cursor-pointer">Start</Typography>
            </Link>
          </Button>

          <Button variant="text" className="buttons">
            <Link
              className="topic cursor-pointer heading"
              activeClass="active"
              to="grow"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography className="topic cursor-pointer">Grow</Typography>
            </Link>
          </Button>
          <Button variant="text" className="buttons">
            <Link
              className="topic cursor-pointer heading"
              activeClass="active"
              to="thrive"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography className="topic cursor-pointer">Thrive</Typography>
            </Link>
          </Button>
          <Button variant="text" className="buttons">
            <Link
              className="topic cursor-pointer heading"
              activeClass="active"
              to="our-value"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography className="topic cursor-pointer">
                Our value
              </Typography>
            </Link>
          </Button>
          <Button variant="text" className="buttons">
            <Link
              className="topic cursor-pointer heading"
              activeClass="active"
              to="letsmeet"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography className="topic cursor-pointer">
                Lets's Meet
              </Typography>
            </Link>
          </Button>

          <SearchIcon className="searchIcon" />
        </Box>
      </Box>
    </>
  );
}
export default Header;
