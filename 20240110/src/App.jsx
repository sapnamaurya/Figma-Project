import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Started from "./components/Started";
import Solution from "./components/Solution";
function App() {
  return (
    <div>
      <Header />
      <Started />
      <Solution />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
