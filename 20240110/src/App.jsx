import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Changes from "./components/Changes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/project" element={<Project />} />
          <Route path="/" element={<Project />} />
          {/* <Route path="/meet" element={<Changes />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
