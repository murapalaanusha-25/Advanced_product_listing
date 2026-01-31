import { useParams, useNavigate } from "react-router-dom";
import products  from "../data/products";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;
  return (
    <div className="description">
      <img src={product.image} alt={product.title} />
      <h1 className="product-title">{product.title}</h1>
      <h2 className="product-price">{product.price}/-</h2>
      {Object.entries(product.description).map(([k, v]) => (
        <p key={k}>{v}
        </p>
      ))}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
export default ProductDetails;