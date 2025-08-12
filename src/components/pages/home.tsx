import type { RootState } from "store";
import AnimationWrapper from "../animation/animation-wrapper-page";
import HomeCarousel from "../home-carousel";
import { useSelector } from "react-redux";
import Username from "@/features/user/username";
import HomeListCards from "../home-list-cards";
import { fetchProducts } from "@/lib/apiProducts";
import { useLoaderData } from "react-router-dom";
import type { Product } from "@/lib/types";

const Home = () => {
  const products = useLoaderData() as Product[];
  const username = useSelector((state: RootState) => state.user.username);
  return (
    <AnimationWrapper>
      <div className="max-w-7xl mx-auto mb-50">
        <div className="mb-10 h-35 flex items-center">
          {!username ? (
            <h1 className="font-medium text-2xl">
              Welcome, but Please Enter your name
            </h1>
          ) : (
            <div>
              <Username
                message="Hello, "
                classNameParagraph="font-medium text-2xl"
                classNameAvatar="h-15 w-15"
              />
            </div>
          )}
        </div>
        <HomeCarousel />
        <div className="w-full h-[15rem]">
          <h1 className="text-center font-medium text-3xl text-shadow-lg">
            Shop with Passion, Click with Purpose
          </h1>
          <p className="text-center text-lg mt-4 text-shadow-lg">
            We blend passion, design, and web enthusiasm to create a smooth and
            exciting online marketplace.
          </p>
        </div>

        <HomeListCards products={products} />
      </div>
    </AnimationWrapper>
  );
};

/* eslint-disable react-refresh/only-export-components */
export async function loader() {
  const products = await fetchProducts();
  return products;
}

export default Home;
