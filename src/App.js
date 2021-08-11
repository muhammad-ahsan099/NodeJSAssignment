
import './App.css';
import Product from './components/requestProducts/Product';
import PostReqProduct from './components/postReqProduct/PostReqProduct';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{listStyle: 'none' }}>
            <li>
              <Link  to="/">Get Request</Link>
            </li>
            <li>
              <Link to="/signup">Go to Post Request</Link>
            </li>
           
          </ul>
        </nav>

        <Switch>

          <Route exact path="/">
            <Product />
          </Route>
          <Route path="/signup">
            <PostReqProduct />
          </Route>
  
        </Switch>
      </div>
    </Router>
  );
}