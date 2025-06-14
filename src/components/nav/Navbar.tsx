import { NavLink } from "react-router";
import IconMenu from "../../assets/icons/burger-icon-menu.svg";
import IconClose from "../../assets/icons/icon-close.svg";
import { useState } from "react";
import { navItems } from "./data";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isNavOpen, toggleNav] = useState(false);
  return (
    <nav className="relative w-full flex items-center justify-between lg:justify-start border-b border-slate-700">
      <span className="text-nowrap lg:border-r border-slate-700 pl-6 pr-[152px] py-4">
        uchechukwu-nwulu
      </span>
      <ul className="items-center w-full hidden lg:flex">
        {navItems.map(({ name, path }, index) => (
          <li key={name} className="last:ml-auto">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white border-b-2 border-orange-300 border-r-slate-700"
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
