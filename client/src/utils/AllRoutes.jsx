import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Forecast from "../pages/Forecast";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/forecast" element={<Forecast />}></Route>
    </Routes>
  );
}
