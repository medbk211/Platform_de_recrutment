import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import CandidateDashboardPage from "../pages/candidat/CandidateDashboardPage";
import RecruiterDashboardPage from "../pages/recruteur/RecruiterDashboardPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

export default function AppRouter() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <LoginPage /> }
      ]
    },
    {
      element: <ProtectedRoute allowedRoles={["candidat", "recruteur", "admin"]} />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              path: "/dashboard/candidat",
              element: <CandidateDashboardPage />
            },
            {
              path: "/dashboard/recruteur",
              element: <RecruiterDashboardPage />
            },
            {
              path: "/dashboard/admin",
              element: <AdminDashboardPage />
            }
          ]
        }
      ]
    }
  ]);
}

