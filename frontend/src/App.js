import './App.css';
// import Header from "./component/layout/Header/Header.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp.js';
import store from './store.js';
import { loadUser } from './actions/userAction.js';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile.js';
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
// import Payment from "./component/Cart/Payment.js";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   try {
  //     const { data } = await axios.get("/api/v1/stripeapikey");
  //     // setStripeApiKey(data.stripeApiKey);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka", "Dosis"],
      },
    });
    store.dispatch(loadUser());

    // getStripeApiKey();

  }, []);

  return (
    

      <Router>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
          {isAuthenticated ? <Route exact path="/account" element={<Profile />} /> : <Route exact path="/account" element={<LoginSignUp />} />}
          {isAuthenticated ? <Route exact path="/me/update" element={<UpdateProfile />} /> : <Route exact path="/me/update" element={<LoginSignUp />} />}
          {isAuthenticated ? <Route exact path="/password/update" element={<UpdatePassword />} /> : <Route exact path="/password/update" element={<LoginSignUp />} />}

          <Route exact path="/password/forgot" element={<ForgotPassword />} />

          <Route exact path="/password/reset/:token" element={<ResetPassword />} />
          {/* <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        /> */}
          <Route exact path="/login" element={<LoginSignUp />} />

          <Route exact path="/cart" element={<Cart />} />

          {isAuthenticated ? <Route exact path="/shipping" element={<Shipping />} /> : <Route exact path="/shipping" element={<LoginSignUp />} />}
          {isAuthenticated ? <Route exact path="/order/confirm" element={<ConfirmOrder />} /> : <Route exact path="/order/confirm" element={<LoginSignUp />} />}

          {/* {stripeApiKey &&
            (isAuthenticated ? <Route exact path="/process/payment" element={<Payment />} /> : <Route exact path="/process/payment" element={<LoginSignUp />} />)
          } */}
        </Routes>
        <Footer />
      </Router>
   
  );
}

export default App;
