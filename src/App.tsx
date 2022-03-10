import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TranslationDashboard from "./pages/TranslationDashboard";
import AccountDashboard from "./pages/AccountDashboard";
import Register from "./pages/Register";
import "./App.css";
import ProtectedRoute from "components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TranslationDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="dashboard" element={<TranslationDashboard />} /> */}
      <Route path="/account" element={<AccountDashboard />} />
    </Routes>
  );
};

export default App;
