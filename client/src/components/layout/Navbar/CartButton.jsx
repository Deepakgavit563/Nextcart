import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <Link
      to="/cart"
      className="relative"
    >
      <FiShoppingCart
        size={24}
        className="text-slate-700"
      />

      <span
        className="
        absolute
        -top-2
        -right-2
        bg-emerald-600
        text-white
        text-xs
        w-5
        h-5
        rounded-full
        flex
        items-center
        justify-center
        "
      >
        0
      </span>

    </Link>
  );
};

export default CartButton;