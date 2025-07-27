import { Outlet } from "react-router";
import {
  ParentNavigations,
  ChildNavigations,
} from "@components/about-me/Navigations";
import Button from "@components/Button";
import closeIcon from "@assets/icons/close-icon.svg";

const AboutMe = () => {
  const navItems = {
    bio: [
      {
        label: "bio.tsx",
        path: "/about-me/bio",
      },
    ],
    skills: [
      {
        label: "frontend.tsx",
        path: "/about-me/frontend",
      },
      {
        label: "backend.tsx",
        path: "/about-me/backend",
      },
    ],
    interests: [
      {
        label: "music",
        path: "/about-me/music",
      },
      {
        label: "food",
        path: "/about-me/food",
      },
    ],
  };

  return (
    <div className="flex h-full">
      <div className="max-w-[69px] w-full h-full border-r border-r-slate-700">
        one
      </div>
      <nav className="max-w-[242px] w-full h-full border-r border-r-slate-700">
        <ul>
          <li>
            <ParentNavigations
              navTitle="personal-info"
              navList={
                <ChildNavigations
                  navTitle="bio"
                  navList={navItems.bio.map((item) => (
                    <li key={item.label}>{item.label}</li>
                  ))}
                />
              }
            />
          </li>
          <li>
            <ParentNavigations navTitle="contact">
              <ul>
                <li>hi</li>
                <li>hi</li>
              </ul>
            </ParentNavigations>
          </li>
          <li>
            <ParentNavigations navTitle="music">
              <ul>
                <li>hi</li>
                <li>hi</li>
              </ul>
            </ParentNavigations>
          </li>
        </ul>
      </nav>

      <div className="w-full h-full overflow-hidden">
        <div className="flex items-center border-b border-b-slate-700 overflow-x-auto">
          <Button className="nav-header group border-r border-r-slate-700">
            <span className="nav-header--text group-hover:text-white">
              bio.jsx
            </span>
            <span role="button" className="flex-shrink-0">
              <img src={closeIcon} alt="chevron down icon" />
            </span>
          </Button>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
