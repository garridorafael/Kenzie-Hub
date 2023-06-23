import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../Pages/Home/HomePage";
import { Register } from "../Pages/Register/RegisterPage";
import { Dashboard } from "../Pages/Dashboard/DashboardPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
