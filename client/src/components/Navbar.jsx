import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          NextCart
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hover:text-blue-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;