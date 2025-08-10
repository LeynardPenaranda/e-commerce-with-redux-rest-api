import { fetchProductById } from "@/lib/apiProducts";
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom"; //
const ProductId = () => {
  const product = useLoaderData();
  console.log("the product", product);
  return (
    <div className="border max-w-6xl mx-auto h-[90vh] grid grid-cols-2">
      <h1>Product Details</h1>
    </div>
  );
};

/* eslint-disable react-refresh/only-export-components */
export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.productId) {
    throw new Error("Product ID is required");
  }
  const product = await fetchProductById(Number(params.productId));
  return product;
}
export default ProductId;
