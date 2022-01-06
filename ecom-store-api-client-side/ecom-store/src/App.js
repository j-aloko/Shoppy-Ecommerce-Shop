import React from "react";
import "./App.css";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import Login from "./Pages/Login";
import CartPage from "./Pages/CartPage";
import Success from "./Pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const user = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
