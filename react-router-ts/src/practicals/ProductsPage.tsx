import { Link, Navigate, useLocation, useSearchParams } from "react-router-dom";
import { PRODUCTS } from "./products";
import { useContext } from "react";
import { AuthContext } from "./authContext";

export default function ProductsPage() {
  const location = useLocation();
  const ctx = useContext(AuthContext);
  const [params, setParams] = useSearchParams({});

  const queryCopy = Object.fromEntries(params.entries());

  const filteredProducts = PRODUCTS.filter((item) => {
    const category = params.get("category");
    const price = params.get("price");
    if (category && price)
      return item.category === category && item.price === price;
    if (category) return item.category === category;
    if (price) return item.price === price;
    return true;
  });
  if (ctx && !ctx.isLoggedin) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* FILTERS */}
      <div className="flex gap-2 mb-6">
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setParams({})}
        >
          All
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setParams({ ...queryCopy, category: "shoes" })}
        >
          Shoes
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setParams({ ...queryCopy, category: "hats" })}
        >
          Hats
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setParams({ ...queryCopy, price: "low" })}
        >
          Low Price
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setParams({ ...queryCopy, price: "high" })}
        >
          High Price
        </button>
      </div>

      {/* PRODUCTS */}
      <ul className="space-y-2">
        {filteredProducts.map((p) => (
          <li key={p.id} className="p-3 border rounded flex justify-between">
            <span>
              {p.name} ({p.category}) - {p.price}
            </span>
            <Link
              to={`details/${p.id}`}
              state={{ from: location.pathname }}
              className="text-blue-500 underline"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { useSearchParams } from "react-router-dom";

// type Product = {
//   id: number;
//   name: string;
//   category: "shoes" | "hats";
// };

// const PRODUCTS: Product[] = [
//   { id: 1, name: "Nike Air", category: "shoes" },
//   { id: 2, name: "Adidas Run", category: "shoes" },
//   { id: 3, name: "Baseball Cap", category: "hats" },
//   { id: 4, name: "Beanie", category: "hats" },
// ];

// export default function ProductsPage() {
//   const [params, setParams] = useSearchParams({});
//   const category = params.get("category");
//   const filteredProducts =
//     (category && PRODUCTS.filter((product) => product.category === category)) ||
//     PRODUCTS;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Products</h1>

//       {/* FILTER BUTTONS */}
//       <div style={{ marginBottom: "20px" }}>
//         <button onClick={() => setParams({ category: "shoes" })}>Shoes</button>
//         <button onClick={() => setParams({ category: "hats" })}>Hats</button>
//         <button onClick={() => setParams({})}>All</button>
//       </div>

//       {/* CURRENT FILTER */}
//       <p>Current category: {category || "all"}</p>

//       {/* PRODUCT LIST */}
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             {product.name} ({product.category})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
