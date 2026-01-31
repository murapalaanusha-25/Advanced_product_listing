import { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
function Products({ setIsLoggedIn }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  if (category) filtered = filtered.filter((p) => p.category === category);
  if (sort === "az") filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  const getQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };
  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className="topbar" style={{ margin: "10px 0" }}>
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="television">TV</option>
          <option value="laptop">Laptop</option>
          <option value="smartphone">Mobile</option>
          <option value="accessories">Headphones</option>
        </select>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="az">A-Z</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
      <div className="card">
        {filtered.map((p) => {
          const qty = getQty(p.id);
  return (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} className="product-image" />
              <p className="product-title">{p.title}</p>
              <div className="price-action-row">
                <p className="product-price">{p.price}/-</p>
                {qty === 0 ? (
                  <button onClick={() => addToCart(p)}>Add to Cart</button>
                ) : (
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(p.id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => addToCart(p)}>+</button>
                    <button onClick={() => removeFromCart(p.id)}>Remove</button>
                  </div>
                )}
                <button onClick={() => navigate(`/products/${p.id}`)}>
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;
