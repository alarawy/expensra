import { Navigate, Route, Routes } from "react-router-dom";
import {
  Analytics,
  Budget,
  Dashboard,
  ForgetPassword,
  Categories,
  Login,
  Notifications,
  PageNotFound,
  Profile,
  Signup,
  Transactions,
  Expense,
  Income,
} from "../pages";
import { AppLayout } from "../components/layout";
import ProtectApp from "./ProtectApp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route
        element={
          <ProtectApp>
            <AppLayout />
          </ProtectApp>
        }
      >
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/income" element={<Income />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
