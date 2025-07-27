import { Link, NavLink } from "react-router";
import IconMenu from "../../assets/icons/burger-icon-menu.svg";
import IconClose from "../../assets/icons/icon-close.svg";
import { useState } from "react";
import { navItems } from "./data";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isNavOpen, toggleNav] = useState(false);
  return (
    <nav className="relative w-full flex items-center justify-between lg:justify-start border-b border-color">
      <Link to='/' className="text-nowrap lg:border-r max-w-[311px] w-full border-color px-6 py-4">
        Uchechukwu-Prince-Nwulu
      </Link>
      <ul className="items-center w-full hidden lg:flex">
        {navItems.map(({ name, path }, index) => (
          <li key={name} className="last:ml-auto">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white border-b-2 border-b-orange-300"
                    : ""
                } ${
                  index === 3 ? "border-l" : ""
                } px-4 py-4 border-r border-slate-700`
              }
            >
              _{name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        onClick={() => toggleNav(!isNavOpen)}
        type="button"
        className="lg:hidden"
      >
        <img
          src={isNavOpen ? IconClose : IconMenu}
          alt="menu icon"
          className="pr-[19px]"
        />
      </button>

      {/* mobile nav */}
      {isNavOpen && <MobileNav />}
    </nav>
  );
};

export default Navbar;
