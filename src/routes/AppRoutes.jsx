import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppLayout } from "../components/layout";
import { Loading } from "../components/common";
import ProtectApp from "./ProtectApp";

// Lazy Pages
const Analytics = lazy(() => import("../pages/Analytics"));
const Budget = lazy(() => import("../pages/Budget"));
const Goals = lazy(() => import("../pages/Goals"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Profile = lazy(() => import("../pages/Profile"));
const Signup = lazy(() => import("../pages/Signup"));
const Transactions = lazy(() => import("../pages/Transactions"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const OTP = lazy(() => import("../pages/OTP"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));

// Reusable Suspense Wrapper
const LazyLoad = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route
        path="/login"
        element={
          <LazyLoad>
            <Login />
          </LazyLoad>
        }
      />

      <Route
        path="/signup"
        element={
          <LazyLoad>
            <Signup />
          </LazyLoad>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <LazyLoad>
            <ForgotPassword />
          </LazyLoad>
        }
      />

      <Route
        path="/otp"
        element={
          <LazyLoad>
            <OTP />
          </LazyLoad>
        }
      />

      <Route
        path="/reset-password"
        element={
          <LazyLoad>
            <ResetPassword />
          </LazyLoad>
        }
      />

      <Route
        path="/change-password"
        element={
          <LazyLoad>
            <ChangePassword />
          </LazyLoad>
        }
      />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectApp>
            <AppLayout />
          </ProtectApp>
        }
      >
        <Route index element={<Navigate replace to="/dashboard" />} />

        <Route
          path="/dashboard"
          element={
            <LazyLoad>
              <Dashboard />
            </LazyLoad>
          }
        />

        <Route
          path="/transactions"
          element={
            <LazyLoad>
              <Transactions />
            </LazyLoad>
          }
        />

        <Route
          path="/budget"
          element={
            <LazyLoad>
              <Budget />
            </LazyLoad>
          }
        />
        <Route
          path="/goals"
          element={
            <LazyLoad>
              <Goals />
            </LazyLoad>
          }
        />

        <Route
          path="/analytics"
          element={
            <LazyLoad>
              <Analytics />
            </LazyLoad>
          }
        />

        <Route
          path="/profile"
          element={
            <LazyLoad>
              <Profile />
            </LazyLoad>
          }
        />

        <Route
          path="*"
          element={
            <LazyLoad>
              <PageNotFound />
            </LazyLoad>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
