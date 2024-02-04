import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import Started from "../../components/Started";
import Solution from "../../components/Solution";
import About from "../../components/About";
import Changes from "../../components/Changes";
import CaseStudies from "../../components/CaseStudies";
import Growth from "../../components/Approach";
import Apporach from "../../components/Approach";
import Steps from "../../components/Steps";
import Footer from "../../components/Footer";

function Project() {
  return (
    <>
      <Box>
        <Header />
        <Started />
        <Solution />
        <About />
        <Changes />
        <CaseStudies />
        <Apporach />
        <Steps />
        <Footer />
      </Box>
    </>
  );
}
export default Project;
