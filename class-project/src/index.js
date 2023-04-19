import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Moush hover clas/css.css'
// import AnimatedCursor from './Moush hover clas/AnimatedCursor.jsx'


import { RouterProvider, createBrowserRouter, Router } from "react-router-dom";


import MainRouts from './mainrouts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
            <RouterProvider router={MainRouts} ></RouterProvider>
            {/* <div className="cursor__dot">
                <AnimatedCursor
                    innerSize={15}
                    outerSize={15}
                    color="255, 255 ,255"
                    outerAlpha={0.4}
                    innerScale={0.7}
                    outerScale={5}
                />
            </div> */}
    </>
);


