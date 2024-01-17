import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Button } from "@mui/material";
import logo from "../../assets/images/small logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function Header(props) {
  // const [isVisibleStart, setIsVisiblestart] = useState(false);
  // const listenToScrollBottom = () => {
  //   let height = 200;
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   if (winScroll > height) {
  //     setIsVisiblestart(true);
  //   } else {
  //     setIsVisiblestart(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScrollBottom);
  // }, []);
  // const handleStart = () => {
  //   window.scrollTo({ top: 20, left: 100, behavior: "smooth" });
  // };
  // const { Meet } = props || {};
  // const navigate = useNavigate();
  // // const letMeet = useRef(null);
  // const handleMeetButton = () => {
  //   // console.log(eleRef);
  //   // Meet(eleRef);
  //   // window.scrollTo({
  //   //   top: reference.current.offsetTop,
  //   //   behaviour: "smooth",
  //   // });
  //   // navigate("/meet");
  // };
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
            Let's meet
          </Button>
          {/* <Button
            variant="text"
            className="buttons"
            onClick={() => handleMeetButton(letMeet)}
            ref={letMeet}
          >
            Let's meet
          </Button> */}
          <SearchIcon className="searchIcon" />
        </Box>
      </Box>
    </>
  );
}
export default Header;
