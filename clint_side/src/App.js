import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./authPages/LoginPage/loginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import DashBoard from "./Dashboard/DashBoard";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/register" element={<RegisterPage />} />

          <Route exact path="/dashboard" element={<DashBoard />} />

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
