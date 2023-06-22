import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/HomePage";
import { Register } from "../Pages/Register/RegisterPage";
import { Dashboard } from "../Pages/Dashboard/DashboardPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
