import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import ToogleLeftSideBar from "./toogle-left-sidebar";
import SearchInput from "./toogle-search";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className=" flex items-center justify-around bg-white/20 backdrop-blur-md">
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
        <div className="flex items-center px-5">
          <Link to="cart">
            <ShoppingCart className="w-4 h-4 drop-shadow-[0_4px_6px_rgba(255,255,255,0.9)]" />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <User className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.9)]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
