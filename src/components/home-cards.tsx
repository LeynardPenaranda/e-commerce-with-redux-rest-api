import { useState } from "react";
import type { Product } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardTitle } from "./ui/card";
import ProductImages from "@/features/products/Product-images";
import ProductRating from "@/features/products/product-rating";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import AddToCardButton from "@/features/products/product-button-add-cart";
import { formatMoney } from "@/lib/utils";

const HomeCards = ({ products }: { products: Product[] }) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  return (
    <div className="relative w-full h-[450px]  ">
      {" "}
      {/* parent must be relative */}
      <Carousel
        className="absolute inset-0 w-full"
        opts={{
          loop: false,
          align: "start",
        }}
        setApi={(api) => {
          if (!api) return;

          const updateButtons = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
          };

          api.on("select", updateButtons);
          updateButtons();
        }}
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4 place-items-center"
            >
              <Card className="h-[28rem] w-[90%] xs:w-[19rem] sm:w-[20rem] 2xl:w-[18rem] rounded-none p-0">
                <div className="w-full h-[10rem] object-center z-10">
                  <ProductImages src={product.image} alt={product.name} />
                </div>
                <div className="px-2">
                  <ProductRating
                    value={product.rating}
                    caption={`(${product.rating}) Reviews`}
                  />
                </div>
                <CardTitle className="text-center">{product.name}</CardTitle>
                <CardContent className=" h-[6rem] grid grid-cols-[1fr_6rem] p-0">
                  <div className="flex flex-col gap-1 ">
                    <div className=" w-[90%]">
                      <p className="text-sm font-medium px-2 text-start">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-lg font-bold">
                      {formatMoney(product.price)}
                    </p>
                  </div>
                </CardContent>
                <div className="flex w-full">
                  <div>
                    <Button
                      variant="secondary"
                      className="rounded-none w-full"
                      asChild
                    >
                      <Link to={`/products/${product.id}`}>View Product</Link>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <AddToCardButton
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        totalPrice: product.price * 1,
                        image: product.image,
                      }}
                    />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {canScrollPrev && (
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        )}
        {canScrollNext && (
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        )}
      </Carousel>
      <Button
        asChild
        className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 rounded-none"
      >
        <Link to="/products">View Products</Link>
      </Button>
    </div>
  );
};

export default HomeCards;
