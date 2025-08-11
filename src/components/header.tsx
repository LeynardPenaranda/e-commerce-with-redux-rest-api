import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import ToogleLeftSideBar from "./toogle-left-sidebar";
import SearchInput from "./toogle-search";
import Navbar from "./navbar";
import Username from "@/features/user/username";
import { shallowEqual, useSelector } from "react-redux";
import type { RootState } from "store";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import HeaderTable from "./header-table";

const Header = () => {
  const { cart } = useSelector((state: RootState) => state.cart, shallowEqual);
  const username = useSelector((state: RootState) => state.user.username);
  const totalQty = cart.reduce((sum, product) => sum + product.quantity, 0);
  const [hover, setHover] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const icon = iconRef.current;
      const popup = popupRef.current;
      if (!icon || !popup) return;

      const isInsideIcon = icon.contains(e.target as Node);
      const isInsidePopup = popup.contains(e.target as Node);

      setHover(isInsideIcon || isInsidePopup);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
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
      <div className="flex items-center space-x-5">
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="flex items-center relative"
        >
          <div ref={iconRef}>
            <Link to="cart" className="relative px-2">
              {totalQty === 0 ? null : totalQty <= 9 ? (
                <span className="absolute top-[2px] right-[-20px] px-2 text-white rounded-full bg-gray-600">
                  {totalQty}
                </span>
              ) : (
                <span className="absolute top-[-20px] right-[-10px] px-2 text-white rounded-full bg-gray-600">
                  9+
                </span>
              )}
              <ShoppingCart className="w-4 h-4 drop-shadow-[0_4px_6px_rgba(255,255,255,0.9)]" />
            </Link>
          </div>
          {hover &&
            createPortal(
              <motion.div
                ref={popupRef}
                onHoverStart={() => setHover(true)}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hidden md:flex md:flex-col items-center justify-center gap-15 fixed top-15 right-10 w-[25rem] h-[25rem] bg-white rounded-2xl z-[999] border-3"
              >
                <div className="flex items-center justify-center gap-2">
                  Your Cart{" "}
                  {!username ? <p>(Enter your name)</p> : <Username />}
                </div>
                <div className="w-full h-[15rem] border overflow-auto">
                  <HeaderTable cart={cart} />
                </div>
              </motion.div>,
              document.body
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
