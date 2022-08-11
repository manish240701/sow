import React from "react";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Products from "./products/Products";
import Profile from "./profile/Profile";
import logo from "./image/logo.png";
import Login from "./LogIn/Login";
import Register from "./register/Register"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar background">
          <ul className="nav-list">
            <div className="logo">
              <img src={logo} />
            </div>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/profile">
              <li>Profile</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
