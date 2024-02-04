import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Thrive from "./pages/Thrive";
import Start from "./pages/Start";
import Grow from "./pages/Grow";
import LetsMeet from "./pages/LetsMeet";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/project" element={<Project />} />
          {/* <Route path="/start" element={<Start />} />
          <Route path="/grow" element={<Grow />} />
          <Route path="/thrive" element={<Thrive />} />
          <Route path="/lets-meet" element={<LetsMeet />} /> */}
          <Route path="/" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
