import "./styles/App.css"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { PrivacyPolicy } from "./components/privacy-policy.js";
import { Home } from "./components/home.js";
import { MainProvider } from "./contexts/main-context";

function App() {
  return (
    <MainProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes >
      </Router >
    </MainProvider>
  );
}

export default App;
