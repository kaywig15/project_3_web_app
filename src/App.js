import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Contact from "./components/Contact/Contact";
import NavBarPage from "./components/NavBarPage/NavBarPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <NavBarPage />
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
