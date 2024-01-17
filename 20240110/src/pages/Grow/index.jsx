import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
import Apporach from "../../components/Approach";
import Steps from "../../components/Steps";

function Grow() {
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
export default Grow;
