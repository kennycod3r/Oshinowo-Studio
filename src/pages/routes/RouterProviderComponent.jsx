import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../Error";
import HomePage from "../HomePage";
import AboutUs from "../AboutTeam/AboutUs";
import Projects from "../Projects";
import ContactPage from "../ContactPage";
import Press from "../Press";
import TeamMember from "../TeamMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "AboutUs/:id", element: <TeamMember /> },
      { path: "Projects", element: <Projects /> },
      { path: "Press", element: <Press /> },
      { path: "ContactPage", element: <ContactPage /> },
    ],
  },
]);

function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}

export default RouterProviderComponent;
