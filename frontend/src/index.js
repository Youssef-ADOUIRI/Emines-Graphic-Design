import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Nopage from "./pages/Nopage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project/:prjId" element={<Project />} />
        <Route path="*" element={<Nopage/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
