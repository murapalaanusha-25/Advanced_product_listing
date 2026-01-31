import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div className="navbar">
      <h2 onClick={() => navigate("/products")}>Product Listing</h2>
      <button onClick={() => navigate("/cart")}>
        Cart ({cartItems.length})
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;