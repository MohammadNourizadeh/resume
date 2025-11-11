import { Navigate } from "react-router-dom";
import Admin from "./layout/admin/Admin";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import type { RoutesType } from "./types/routesType";

export const routes: RoutesType[] = [
  {
    path: "/",
    element: <Navigate to={'/admin/home'} />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/home",
        element: <HomePage />
      },
      {
        path: "/admin/about",
        element: <AboutPage />
      },
      {
        path: "/admin/contact",
        element: <ContactPage />
      },
    ]
  },
];
