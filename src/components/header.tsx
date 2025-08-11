import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import ToogleLeftSideBar from "./toogle-left-sidebar";
import SearchInput from "./toogle-search";
import Navbar from "./navbar";
import Username from "@/features/user/username";
import { shallowEqual, useSelector } from "react-redux";
import type { RootState } from "store";
import { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const { cart } = useSelector((state: RootState) => state.cart, shallowEqual);
  const totalQty = cart.reduce((sum, product) => sum + product.quantity, 0);
  const [hover, setHover] = useState(false);

  return (
    <header className="flex items-center justify-around bg-white/20 backdrop-blur-md">
      <div className="flex items-center space-x-5">
        <div>
          <img
            src="/images/staticLogo.png"
            alt="Logo"
            className="w-12 rounded-2xl"
          />
        </div>
        <ToogleLeftSideBar />
        <Navbar className="hidden sm:flex" />
      </div>
      <SearchInput />
      <div className="flex items-center space-x-2">
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="flex items-center relative"
        >
          <Link to="cart" className="relative px-2">
            {totalQty === 0 ? null : totalQty <= 9 ? (
              <span className="absolute top-[-20px] right-[-10px] px-2 text-white rounded-full bg-gray-600">
                {totalQty}
              </span>
            ) : (
              <span className="absolute top-[-20px] right-[-10px] px-2 text-white rounded-full bg-gray-600">
                9+
              </span>
            )}
            <ShoppingCart className="w-4 h-4 drop-shadow-[0_4px_6px_rgba(255,255,255,0.9)]" />
          </Link>

          {hover && (
            <div className="absolute bottom-[-450px] w-[25rem] h-[25rem] bg-black rounded-2xl z-[999]"></div>
          )}
        </motion.div>
        <div className="hidden sm:flex">
          <Username />
        </div>
      </div>
    </header>
  );
};

export default Header;
