import React from "react";
import "./style.css";
import { Box, Button } from "@mui/material";
import logo from "../../assets/images/small logo.png";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <>
      <Box className="header-cont">
        <img src={logo} alt="logo" />
        <Box className="list-cont">
          <Button variant="text" className="buttons">
            Start
          </Button>
          <Button variant="text" className="buttons">
            Grow
          </Button>
          <Button variant="text" className="buttons">
            Thrive
          </Button>
          <Button variant="text" className="buttons">
            Our Values
          </Button>
          <Button variant="text" className="buttons">
            let's meet
          </Button>
          <SearchIcon className="searchIcon" />
        </Box>
      </Box>
    </>
  );
}
export default Header;
