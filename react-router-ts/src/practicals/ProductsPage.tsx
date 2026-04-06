import { useSearchParams } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  category: "shoes" | "hats";
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Nike Air", category: "shoes" },
  { id: 2, name: "Adidas Run", category: "shoes" },
  { id: 3, name: "Baseball Cap", category: "hats" },
  { id: 4, name: "Beanie", category: "hats" },
];

export default function ProductsPage() {
  const [params, setParams] = useSearchParams({});
  const category = params.get("category");
  const filteredProducts =
    (category && PRODUCTS.filter((product) => product.category === category)) ||
    PRODUCTS;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setParams({ category: "shoes" })}>Shoes</button>
        <button onClick={() => setParams({ category: "hats" })}>Hats</button>
        <button onClick={() => setParams({})}>All</button>
      </div>

      {/* CURRENT FILTER */}
      <p>Current category: {category || "all"}</p>

      {/* PRODUCT LIST */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
