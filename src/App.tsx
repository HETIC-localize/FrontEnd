import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import TranslationDashboard from './pages/TranslationDashboard';
import AccountDashboard from "./pages/AccountDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<TranslationDashboard />} />
      <Route path="account"  element={<AccountDashboard />}/>
    </Routes>
  );
}

export default App;
