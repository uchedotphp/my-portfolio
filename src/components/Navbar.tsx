import { NavLink } from "react-router";
import IconMenu from '../assets/icons/burger-icon-menu.svg'

const Navbar = () => {
  const navItems = [
    { name: "hello", path: "/" },
    { name: "about-me", path: "/about-me" },
    { name: "project", path: "/project" },
    { name: "contact-me", path: "/contact" },
  ];
  return (
    <nav className="w-full flex items-center justify-between lg:justify-start border-b border-slate-700">
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
                    ? "text-white border-b-2 border-orange border-r-slate-700"
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
      <button type="button" className="lg:hidden">
        <img src={IconMenu} alt="menu icon" className="pr-[19px]" />
      </button>
    </nav>
  );
};

export default Navbar;
