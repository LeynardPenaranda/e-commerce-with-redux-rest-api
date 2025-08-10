import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/types";
import ProductRating from "./product-rating";
import { formatMoney } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PackagePlus } from "lucide-react";
import ProductImages from "./Product-images";

const MotionCard = motion(Card);

const ProductCard = ({ product }: { product: Product[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      {product.map((item) => {
        const isSelected = selectedId === item.id;

        return (
          <MotionCard
            key={item.id}
            className="p-0 sm:h-[30rem] 3xl:w-[20rem] cursor-pointer rounded-none"
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
            }}
            animate={
              isSelected
                ? {
                    y: -3,
                    scale: 1.02,
                    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                  }
                : { y: 0, scale: 1, boxShadow: "none" }
            }
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            onClick={() => setSelectedId(item.id)}
          >
            <div className="w-full h-[15rem] object-center">
              <ProductImages src={item.image} alt={item.name} />
            </div>
            <div className="px-2">
              <ProductRating
                value={item.rating}
                caption={`(${item.rating}) Reviews`}
              />
            </div>
            <CardTitle className="text-center">{item.name}</CardTitle>
            <CardContent className=" h-[6rem] grid grid-cols-[1fr_6rem] p-0">
              <div className="flex flex-col gap-1 ">
                <div className=" w-[90%]">
                  <p className="text-sm font-medium px-2 text-start">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-lg font-bold">{formatMoney(item.price)}</p>
              </div>
            </CardContent>
            <div className="grid grid-cols-[120px_1fr]">
              <div>
                <Button
                  variant="secondary"
                  className="rounded-none w-full"
                  asChild
                >
                  <Link to={`/products/${item.id}`}>View Product</Link>
                </Button>
              </div>
              <div>
                <Button className="w-full rounded-none">
                  <PackagePlus />
                  Add to Cart
                </Button>
              </div>
            </div>
          </MotionCard>
        );
      })}
    </>
  );
};

export default ProductCard;
