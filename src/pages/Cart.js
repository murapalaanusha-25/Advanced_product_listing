import { useCart } from "../context/CartContext";
function Cart() {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
  <div className="cart-container">
    <h1 className="cart-title">Cart</h1>
    {cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <div className="cart-left">
          <img src={item.image} alt={item.title} width="70" />
          <div className="cart-details">
            <h3>{item.title}</h3>
            <p>{item.price}/-</p>
          </div>
        </div>
        <div className="cart-actions">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    ))}
  <h2 className="cart-total">Total: {total}/-</h2>
  </div>
);
}
export default Cart;