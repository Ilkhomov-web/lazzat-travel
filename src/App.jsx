import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectedTour from "./pages/SelectedTour";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected-tour/:id" element={<SelectedTour />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
