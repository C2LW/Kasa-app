import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss'
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import AccomodationSheet from "./pages/Accomodations/index.jsx";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Accomodations/:uid" element={<AccomodationSheet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
