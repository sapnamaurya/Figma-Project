import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Apporach from "../../components/Approach";
import Steps from "../../components/Steps";
import Footer from "../../components/Footer";

function Start() {
  return (
    <>
      <Box>
        <Header />
        <Apporach />
        <Steps />
        <Footer />
      </Box>
    </>
  );
}
export default Start;
