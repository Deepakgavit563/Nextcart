import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="flex items-center gap-6">

      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/products">
        Products
      </NavLink>

      <NavLink to="/login">
        Login
      </NavLink>

    </nav>
  );
};

export default NavLinks;