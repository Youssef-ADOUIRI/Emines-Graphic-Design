import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Nopage from "./pages/Nopage";
import Login  from "./pages/Login";

import Admin from "./pages/Admin";
import { AuthProvider } from "./components/auth/auth.js";
import RequireAuth from "./components/auth/RequireAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:prjId" element={<Project />} />
          <Route path="admin" element={<RequireAuth><Admin /></RequireAuth>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
