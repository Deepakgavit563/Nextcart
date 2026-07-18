import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
    >
      <div className="bg-emerald-600 text-white p-2 rounded-lg">
        <FiShoppingBag size={22}/>
      </div>

      <div>
        <h1 className="font-bold text-xl">
          NextCart
        </h1>

        <p className="text-xs text-gray-500">
          Shop Smart
        </p>
      </div>
    </Link>
  );
};

export default Logo;