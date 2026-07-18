import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";


const Navbar = () => {

  return (
    <header className="border-b bg-white">

      <div className="
      max-w-7xl
      mx-auto
      px-6
      h-20
      flex
      items-center
      gap-8
      ">

        <Logo />

        <SearchBar />

        <NavLinks />

      </div>

    </header>
  );
};


export default Navbar;