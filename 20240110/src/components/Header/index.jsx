import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Button } from "@mui/material";
import logo from "../../assets/images/small logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function Header() {
  const Navigate = useNavigate();
  const redirectToRespectivePage = (e, path) => {
    Navigate(`/${path}`);
  };
  return (
    <>
      <Box className="header-cont">
        <img src={logo} alt="logo" />
        <Box className="list-cont">
          <Button
            onClick={(e) => redirectToRespectivePage(e, "start")}
            variant="text"
            className="buttons"
          >
            Start
          </Button>

          <Button
            onClick={(e) => redirectToRespectivePage(e, "grow")}
            variant="text"
            className="buttons"
          >
            Grow
          </Button>
          <Button
            onClick={(e) => redirectToRespectivePage(e, "thrive")}
            variant="text"
            className="buttons"
          >
            Thrive
          </Button>
          <Button
            onClick={(e) => redirectToRespectivePage(e, "project")}
            variant="text"
            className="buttons"
          >
            Our Values
          </Button>
          <Button
            onClick={(e) => redirectToRespectivePage(e, "lets-meet")}
            variant="text"
            className="buttons"
          >
            Let's meet
          </Button>

          <SearchIcon className="searchIcon" />
        </Box>
      </Box>
    </>
  );
}
export default Header;
