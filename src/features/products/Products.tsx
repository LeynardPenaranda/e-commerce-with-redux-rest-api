import { fetchProducts } from "@/lib/apiProducts";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ProductList from "./product-lists";
import ProductFilters from "./product-filters";
import type { Product } from "@/lib/types";
import ProductFilterPopUp from "./product-filter-popup";

const Products = () => {
  const allProducts = useLoaderData() as Product[];
  const [searchParams] = useSearchParams();

  // ✅ Categories
  const categories = searchParams
    .getAll("category")
    .map((c) => c.toLowerCase());

  // ✅ Price Range
  const priceValue = searchParams.get("price");
  let minPrice: number | undefined;
  let maxPrice: number | undefined;
  if (priceValue) {
    const [min, max] = priceValue.split("-").map(Number);
    minPrice = min;
    maxPrice = max;
  }

  // ✅ Rating Range
  const ratingValue = searchParams.get("rating");
  let minRating: number | undefined;
  let maxRating: number | undefined;
  if (ratingValue) {
    const [min, max] = ratingValue.split("-").map(Number);
    minRating = min;
    maxRating = max;
  }

  // ✅ Filtering Logic
  const filteredProducts = allProducts.filter((p) => {
    let match = true;

    // Filter by category
    if (categories.length > 0) {
      match = match && categories.includes(p.category.toLowerCase());
    }

    // Filter by price
    if (minPrice !== undefined) {
      match = match && p.price >= minPrice;
    }
    if (maxPrice !== undefined) {
      match = match && p.price <= maxPrice;
    }

    // Filter by rating
    if (minRating !== undefined) {
      match = match && p.rating >= minRating;
    }
    if (maxRating !== undefined) {
      match = match && p.rating <= maxRating;
    }

    return match;
  });

  return (
    <div className="grid lg:grid-cols-[240px_1fr] xl:grid-cols-[300px_1fr] min-h-[86vh]">
      <div className="lg:hidden absolute left-0 top-26 z-50">
        <ProductFilterPopUp />
      </div>
      <div className="border lg:flex flex-col gap-5 items-center hidden">
        <h1 className="text-2xl font-medium">Find Your Match</h1>
        <ProductFilters />
      </div>
      <div>
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p className="text-center mt-20">No products found.</p>
        )}
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
