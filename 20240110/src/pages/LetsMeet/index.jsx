import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

import Changes from "../../components/Changes";
import Footer from "../../components/Footer";

function LetsMeet() {
  return (
    <>
      <Box>
        <Header />
        <Changes />
        <Footer />
      </Box>
    </>
  );
}
export default LetsMeet;
