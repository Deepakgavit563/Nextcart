import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-600"
        >
          NextCart
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-lg relative">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-lg border border-gray-300 pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-600 font-semibold"
                : "text-gray-700 hover:text-emerald-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-600 font-semibold"
                : "text-gray-700 hover:text-emerald-600"
            }
          >
            Products
          </NavLink>

          {/* Cart */}
          <button className="relative">
            <FiShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            <FiUser />
            Login
          </Link>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;