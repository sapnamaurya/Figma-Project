import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/images/small logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
function Header() {
  // const Navigate = useNavigate();
  // const redirectToRespectivePage = (e, path) => {
  //   Navigate(`/${path}`);
  // };
  return (
    <>
      <Box className="header-cont">
        <img src={logo} alt="logo" />
        <Box className="list-cont">
          <Button
            // onClick={(e) => redirectToRespectivePage(e, "start")}
            variant="text"
            className="buttons"
          >
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

          <Button
            // onClick={(e) => redirectToRespectivePage(e, "grow")}
            variant="text"
            className="buttons"
          >
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
          <Button
            // onClick={(e) => redirectToRespectivePage(e, "thrive")}
            variant="text"
            className="buttons"
          >
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
          <Button
            // onClick={(e) => redirectToRespectivePage(e, "project")}
            variant="text"
            className="buttons"
          >
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
          <Button
            // onClick={(e) => redirectToRespectivePage(e, "lets-meet")}
            variant="text"
            className="buttons"
          >
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
