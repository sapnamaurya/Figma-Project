import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Started from "./components/Started";
import Solution from "./components/Solution";
import About from "./components/About";
import Changes from "./components/Changes";
function App() {
  return (
    <div>
      <Header />
      <Started />
      <Solution />
      <About />
      <Changes />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
