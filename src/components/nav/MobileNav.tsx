import { NavLink } from "react-router";
import { navItems } from "./data";

const MobileNav = () => {
  return (
    <ul className="absolute top-full w-full z-10 bg-slate-900">
      <li className="border-y border-slate-700 pt-6 pb-3 px-6">
        <p>Navigate to:</p>
      </li>
      {navItems.map(({ name, path }) => (
        <li key={name} className="border-b border-slate-700">
          <NavLink
            to={path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white"
                  : ""
              } block px-6 py-3 hover:bg-slate-800`
            }
          >
            _{name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
