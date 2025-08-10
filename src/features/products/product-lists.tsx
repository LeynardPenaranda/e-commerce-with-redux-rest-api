import type { Product } from "@/lib/types";
import ProductCard from "./product-card";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 h-[80vh] overflow-y-auto">
      <ProductCard product={products} />
    </div>
  );
};

export default ProductList;
