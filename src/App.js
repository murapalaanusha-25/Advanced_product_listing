import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
function App() {
  const [isLoggedIn,  setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/products"
          element={
            isLoggedIn ? (
              <Products setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/products/:id"
          element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;