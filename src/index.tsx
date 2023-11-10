import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindJobs from "./Pages/FindJobs/FindJobs";
import BrowserCompanies from "./Pages/BrowserCompanies/BrowserCompanies";
import LandingPage from "./Pages/LandingPage/LandingPage";
import BrowserCompaniesAllJobs from "./Pages/BrowserCompanies/BrowserCompaniesAllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/findjobs",
        element: <FindJobs />,
      },
      {
        path: "/browserCompanies",
        element: <BrowserCompanies />,
      },
      {
        path: "/browser-Companies-alljobs",
        element: <BrowserCompaniesAllJobs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
