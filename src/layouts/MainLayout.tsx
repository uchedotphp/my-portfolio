import { Outlet } from "react-router";
import GithubIcon from "../assets/icons/icon-git.svg";
import LinkedinIcon from "../assets/icons/icon-linkedin.svg";
import XIcon from "../assets/icons/icon-x.svg";

const MainLayout = () => {
  const icons = [
    {
      name: "x",
      icon: XIcon,
      url: "#",
    },
    {
      name: "linkedin",
      icon: LinkedinIcon,
      url: "#",
    },
    {
      name: "github",
      icon: GithubIcon,
      url: "#",
    },
  ];
  return (
    <div className="p-4 lg:p-[70px]">
      <div className="bg-slate-900 rounded-[10px] overflow-hidden border border-slate-700">
        <header>header placeholder</header>
        <main>
          <Outlet />
        </main>

        <footer>
          <ul className="flex items-center border-t border-slate-700">
            <li className="self-stretch border-r last:border-r-0 border-slate-700 px-6 py-4 grow lg:grow-0">
              <p className="text-xl">find me in:</p>
            </li>
            {icons.map(({ icon, name, url }, index) => (
              <li
                key={name}
                className="border-r self-stretch flex items-center last:border-r-0 border-slate-700 px-6 py-4 last:ml-auto lg:last:border-l"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {index === 2 && (
                    <span className="hidden lg:inline-block pr-2">
                      @uchedotphp
                    </span>
                  )}
                  <img src={icon} alt={`${name} icon`} />
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
