import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserButton = () => {
  return (
    <Link
      to="/login"
      className="
      flex
      items-center
      gap-2
      bg-emerald-600
      text-white
      px-4
      py-2
      rounded-lg
      hover:bg-emerald-700
      transition
      "
    >
      <FiUser />

      <span>
        Login
      </span>

    </Link>
  );
};

export default UserButton;