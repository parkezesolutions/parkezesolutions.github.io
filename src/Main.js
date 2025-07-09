import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import Integration from "./pages/Integration";
import CaseStudies from "./pages/CaseStudies";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default Main;
