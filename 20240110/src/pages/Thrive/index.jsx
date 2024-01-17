import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Apporach from "../../components/Approach";
import Steps from "../../components/Steps";
import Footer from "../../components/Footer";

function Thrive() {
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
export default Thrive;
