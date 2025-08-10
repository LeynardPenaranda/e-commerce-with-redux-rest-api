import { ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ToogleLeftSideBar from "./toogle-left-sidebar";
import SearchInput from "./toogle-search";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/creator", label: "Creator" },
  ];

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
        <div className="hidden sm:flex items-center space-x-4 text-gray-500">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  isActive
                    ? "font-bold text-black"
                    : "text-gray-500 hover:text-black"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <SearchInput />
      <div className="flex items-center space-x-2">
        <div className="flex items-center px-5">
          <Link to="cart">
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
