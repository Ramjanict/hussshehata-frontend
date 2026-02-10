import DashboardLayout from "@/layout/DashboardLayout";
import ContentManagement from "@/pages/ContentManagement";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/login";
import PremiumFeatures from "@/pages/PremiumFeatures";
import ProgramManagement from "@/pages/ProgramManagement";
import Settings from "@/pages/Settings";
import UserManagement from "@/pages/UserManagement";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "user-management", element: <UserManagement /> },
          { path: "program-management", element: <ProgramManagement /> },
          { path: "content-management", element: <ContentManagement /> },
          { path: "premium-features", element: <PremiumFeatures /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);
export default routes;
