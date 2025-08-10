import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import ToogleLeftSideBar from "./toogle-left-sidebar";
import SearchInput from "./toogle-search";

const Header = () => {
  return (
    <header className="border-b flex items-center justify-around">
      <div className="flex items-center space-x-5">
        <div>
          <img
            src="/images/staticLogo.png"
            alt="Logo"
            className="w-12 rounded-2xl"
          />
        </div>
        <ToogleLeftSideBar />
        <div className="hidden sm:flex items-center space-x-2">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/creator">Creator</Link>
        </div>
      </div>
      <SearchInput />
      <div className="flex items-center space-x-2">
        <div className="flex items-center px-5">
          <Link to="cart">
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </div>
        <div className="hidden sm:flex ">
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
