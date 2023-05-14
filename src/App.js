import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import Portfolios from "./components/Portfolios";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Educations />} />
          <Route path="/portfolio" element={<Portfolios />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
