import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
const Navbar = () => {

  return (
    <header className="border-b bg-white">

  <div
    className="
    max-w-7xl
    mx-auto
    px-6
    h-20
    flex
    items-center
    gap-8
    "
  >

    <Logo />

    <SearchBar />

    <NavLinks />

    <CartButton />

    <UserButton />

  </div>

</header>
  );
};


export default Navbar;