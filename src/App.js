import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <h1>Task Management App</h1>
        <nav>
          <ul>
            <li>
              <a href="/todos">Todos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
