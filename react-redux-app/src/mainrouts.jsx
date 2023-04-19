import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, Router } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import PricingPage from "./PricingPage.jsx";
import FeaturesPage from "./Features.jsx";
import GetStoreData from "./GetStoredata.jsx";
import LoginCompo from "./Register.jsx";


const MainRouts = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  }, {
    path: "/about",
    element: <  AboutUsPage />,
  }, {
    path: "/pricing",
    element: <PricingPage />,
  }, {
    path: "/features",
    element: <FeaturesPage />,
  }, {
    path: "/accessstore",
    element: <GetStoreData />,
  }, {
    path: "/login",
    element: <LoginCompo />,
  }
]
);


export default MainRouts;