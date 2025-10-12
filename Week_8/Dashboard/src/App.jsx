import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import './App.css'
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
