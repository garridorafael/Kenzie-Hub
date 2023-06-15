import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/HomePage";
import { Register } from "../Pages/Register/RegisterPage";
import { Dashboard } from "../Pages/Dashboard/DashboardPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
