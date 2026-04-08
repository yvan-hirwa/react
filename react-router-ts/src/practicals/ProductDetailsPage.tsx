import { useContext } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AuthContext } from "./authContext";
import { PRODUCTS } from "./products";

export default function ProductDetailsPage() {
  const location = useLocation();
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  if (ctx && !ctx.isLoggedin) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  if (!id) return <Navigate to="/" replace />;

  // if (!location.state) return <Navigate to="/" replace />; tried to ensure all details were comming from products for checking id

  const product = PRODUCTS.find((item) => item.id === +id);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>

      <div className="border p-4 rounded space-y-2">
        <p>
          <strong>ID:</strong> {product?.id}
        </p>
        <p>
          <strong>Name:</strong> {product?.name}
        </p>
        <p>
          <strong>Category:</strong> {product?.category}
        </p>
        <p>
          <strong>Price:</strong> {product?.price}
        </p>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-gray-200 rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}
