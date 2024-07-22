import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./components/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./components/AboutUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<App />} />
          <Route path="/" element={<App />}></Route>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
