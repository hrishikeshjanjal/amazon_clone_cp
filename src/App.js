import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";

//payment gateway
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

//public key
{
  /** 
const promise = loadStripe(
  "pk_test_51HgPL3CSwW2nmTBoZfYjoy0hMTm8Ly9OHCtzEH00dv0vuAF1pKhSIvnZsin0CjdbQ2WgXS9vP5T0l4AX58lS4kHR00wOQ2YQ9i"
);
*/
}
const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ==> ", authUser);
      if (authUser) {
        //if the user is logged in or was logged on
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
            {/*<Elements stripe={promise}>
              <Payment />
                </Elements>*/}
          </Route>
          {/* below route path is home page or any undefined url visited by user redirects user to home page with header and home components */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

//npm i materialui core/icons
//npm i -g firebase tools
//npm i firebase
//npm i react-router-dom for routing to diff pages
//npm i react-currency-format

//https://www.primevideo.com/ add this route link to homepage

//for stripe
//npm i @stripe/stripe-js
//npm i @stripe/react-stripe-js

// developers=>api keys

//npm i axios => fetching library for api

//cloud functions=> firebase init=> functions=>
