import React, { useState } from "react";
import "./App.css";
import "./web/comp/css/style.css";
import Layout from "./Layout";
import Aboutus from "./web/comp/Aboutus";
import BuildSection from "./web/comp/BuildSection";
import Home from "./web/comp/Home";
import Testimonial from "./web/comp/Testimonial";
import Workflow from "./web/comp/Workflow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./signup/Login";
import Card from "./signup/Card";
import PrivateRoutes from "./PrivateRoutes";
import User from "./signup/User";

export default function PublicRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/card" element={<Card />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/user-info" element={<User />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<Aboutus />}></Route>
              <Route path="/buildsection" element={<BuildSection />}></Route>
              <Route path="/workflow" element={<Workflow />}></Route>
              <Route path="/testimonial" element={<Testimonial />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
