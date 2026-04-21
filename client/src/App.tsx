import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import AccountPage from "./pages/AccountPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
};

export default App;
