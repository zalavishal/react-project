import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, Router } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import PricingPage from "./PricingPage.jsx";
import FeaturesPage from "./Features.jsx";
import Login from "./login";
import Register from "./Register.jsx";
import Api from "./Api.jsx";

const AdminRoute = React.lazy(() => import('./components/Admin/AdminRoute'))

// import Example1 from './Components/ClassComponent/Examples/Example1';
// import ClassComponent from "./Components/ClassComponent/ClassRout.jsx";

// const ClassComponent = React.lazy(() => import('./Components/ClassComponent/ClassRout'))
// const Functionalcomponent = React.lazy(() => import('./Components/Functionalcomponent/FunctionalRout'))
// const Example1 = React.lazy(() => import('./Components/ClassComponent/Examples/Example1'))

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
    path: "/login",
    element: <Login />,
  }, {
    path: "/Register",
    element: <Register />,
  }, {
    path: "/api",
    element: <Api />,
  }, {
    path: "admin/*",
    element: <Suspense fallback={<h2>Loading...</h2>}><AdminRoute /></Suspense>
  }

  // {
  //   path: "/Examples",
  //   element: <Examples />,
  //   children: [
  //     {
  //       path: "classcomponent/*",
  //       element: <Suspense fallback={<h2>Loading...</h2>}><ClassComponent /></Suspense>,
  //     }, {
  //       path: "Functionalcomponent/*",
  //       element: <Suspense fallback={<h2>Loading...</h2>}><Functionalcomponent /></Suspense>,
  //     },
  //   ],
  // },
]
);


export default MainRouts;