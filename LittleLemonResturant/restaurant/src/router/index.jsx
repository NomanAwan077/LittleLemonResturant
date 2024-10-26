import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home";
import Main from "../components/MainSection";
const CustomRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default CustomRoutes;
