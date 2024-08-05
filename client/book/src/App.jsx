import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Book from "./Pages/Book";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/books" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
