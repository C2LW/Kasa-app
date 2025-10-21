import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App.jsx"
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
      <Route path="/Accomodation" element={<AccomodationSheet />} />
      <Route path="/Notfound" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
