// import {applyMiddleware, createStore} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
import { configureStore } from '@reduxjs/toolkit'
// import thunk from "redux-thunk";
import rootReducer from "./reducer/index.jsx";

// let initialState = {}
// const middleware = [thunk];

// let Store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

let Store = configureStore(
    {reducer: rootReducer}
 )

export default Store;