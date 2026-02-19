import { useCart } from "../context/CartContext";
function Cart() {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
  <div className="max-w-[800px] my-5 mx-auto bg-[whitesmoke] p-[20px] rounded-xl shadow-[0px_3px_8px_rgba(0,0,0,0.15)]">
    <h1 className="font-bold items-center mb-[20px]">Cart</h1>
    {cartItems.map((item) => (
      <div key={item.id} className="flex items-center justify-between p-[12px] border-b border-grey-200">
        <div className="flex items-center gap-[15px]">
          <img src={item.image} alt={item.title} width="70" />
          <div className="m-0 text-base">
            <h3>{item.title}</h3>
            <p>{item.price}/-</p>
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <button className="w-auto h-7 py-[4px] px-[10px]" onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button className="w-auto h-7 py-[4px] px-[10px]" onClick={() => addToCart(item)}>+</button>
          <button className="w-auto h-7 py-[4px] px-[10px]" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    ))}
  <h2 className="text-right mt-[20px] font-bold">Total: {total}/-</h2>
  </div>
);
}
export default Cart;