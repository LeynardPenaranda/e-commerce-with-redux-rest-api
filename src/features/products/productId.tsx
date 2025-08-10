import { fetchProductById } from "@/lib/apiProducts";
import type { Product } from "@/lib/types";
import {
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router-dom"; //
import ProductRating from "./product-rating";
import { formatMoney } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";
import ProductDialogImage from "./product-dialog-image";
const ProductId = () => {
  const product: Product = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className=" max-w-6xl mx-auto h-[90vh] grid md:grid-cols-2 mt-5 gap-5">
      <div>
        <div>
          <ProductDialogImage src={product.image} alt={product.name} />
        </div>
        <div className="mt-4 mx-2 flex items-center justify-center gap-2">
          <ProductRating value={product.rating} /> {product.rating} Reviews
        </div>
        <div className="flex items-center justify-start mt-5">
          <Button className="w-50 mx-2">
            <PackagePlus /> Add to Cart
          </Button>
        </div>
      </div>
      <div>
        <div className="sm:mt-20 px-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-gray-500">{product.category}</p>
            </div>
            <div>
              <h1 className="font-bold text-3xl">
                {formatMoney(product.price)}
              </h1>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <h1 className="text-2xl font-bold">Description</h1>
            <p>{product.description}</p>
            <Button onClick={() => navigate(-1)}>Go back</Button>
          </div>
        </div>
      </div>
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
