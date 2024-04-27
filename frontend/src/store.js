import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

import { 
  productDetailsReducer, 
  productReducer,
  newReviewReducer
} from "./reducers/productReducers";

import {
 // allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
 // userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";

import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

// Create reducer
const rootReducer = combineReducers({
  products : productReducer,
  productDetails : productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Set up the initial state with the cart items
const initialState = {
  cart: {
    cartItems,
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

// Create middleware
const middleware = [thunk];

// Create store

const store = configureStore({
    reducer : rootReducer,
    preloadedState: initialState,
    middleware,
    devTools: process.env.NODE_ENV === "development",
});

// Export store
export default store;
