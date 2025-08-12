import type { Product } from "@/lib/types";
import HomeCards from "./home-cards";

const HomeListCards = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full h-[30rem] flex flex-col ">
      <div>
        <h1 className="text-2xl font-medium text-shadow-lg">
          Shop with our Products
        </h1>
      </div>
      <div className="w-full h-full ">
        <HomeCards products={products} />
      </div>
    </div>
  );
};

export default HomeListCards;
