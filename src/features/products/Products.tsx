import { fetchProducts } from "@/lib/apiProducts";
import { useLoaderData } from "react-router-dom";
import ProductList from "./product-lists";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="grid md:grid-cols-[240px_1fr] xl:grid-cols-[300px_1fr] min-h-[86vh]">
      <div className="border">Filters</div>
      <div className="flex flex-col gap-4">
        <div>Filters</div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

/* eslint-disable react-refresh/only-export-components */
export async function loader() {
  const products = await fetchProducts();
  return products;
}

export default Products;
