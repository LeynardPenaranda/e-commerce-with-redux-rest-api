import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/creator", label: "Creator" },
];

const Navbar = ({
  className,
  classNameLink,
}: {
  className?: string;
  classNameLink?: string;
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={cn(className, "items-center space-x-4 text-gray-500")}>
      {navLinks.map((link) => {
        const isActive = pathname === link.to;

        return (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              isActive
                ? "font-bold text-black"
                : "text-gray-500 hover:text-black",
              classNameLink
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
