import { useParams, useNavigate } from "react-router-dom";
import products  from "../data/products";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;
  return (
    <div className="my-5 mx-auto max-w-[800px] text-center justify-center bg-gray-100">
      <img className="mx-auto" src={product.image} alt={product.title} />
      <h1 className="font-bold ">{product.title}</h1>
      <h2 className="color-green">{product.price}/-</h2>
      {Object.entries(product.description).map(([k, v]) => (
        <p key={k}>{v}
        </p>
      ))}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
export default ProductDetails;