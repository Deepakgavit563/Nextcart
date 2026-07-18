import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="hidden md:flex flex-1 max-w-xl">

      <div className="relative w-full">

        <FiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="
          w-full
          rounded-full
          border
          py-3
          pl-12
          pr-5
          outline-none
          focus:ring-2
          focus:ring-emerald-500
          "
        />

      </div>

    </div>
  );
};

export default SearchBar;