
import React from "react";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
 import Products from "../components/requestProducts/Product"
import PostReqProduct from "../components/postReqProduct/PostReqProduct";


 export default function Navigation() {
    return (
      <Router>
       
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Products />
            </Route>
            <Route path="/PostReqProduct">
              <PostReqProduct />
            </Route>
          
          </Switch>
        
      </Router>
    );
  }