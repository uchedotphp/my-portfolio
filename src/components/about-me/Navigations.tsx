import chevronDown from "@assets/icons/chevron-down.svg";
import caretRight from "@assets/icons/caret-right.svg";
import folderIcon from "@assets/icons/folder.svg";
import Button from "@components/Button";
import { useState } from "react";

function useToggle(initialValue: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  return { isOpen, setIsOpen };
}

export const ParentNavigations = ({
  navTitle,
  children,
}: {
  navTitle: string;
  children: React.ReactNode;
}) => {
  const { isOpen, setIsOpen } = useToggle(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-header group w-full border-b border-b-slate-700"
      >
        <img src={chevronDown} alt="chevron down icon" />
        <span className="nav-header--text group-hover:text-white">
          {navTitle}
        </span>
      </Button>
      <ul className={`${isOpen ? "block" : "hidden"} p-3`}>{children}</ul>
    </>
  );
};

interface ChildNavigationsProps {
  navTitle: string;
  navList: React.ReactNode;
}

export const ChildNavigations = ({
  navTitle,
  navList,
}: ChildNavigationsProps) => {
  const { isOpen, setIsOpen } = useToggle(false);
  return (
    <ul>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-header group w-full border-b border-b-slate-700"
      >
        <img src={caretRight} alt="caret right icon" />
        <div className="flex items-center gap-3">
          <img src={folderIcon} alt="folder icon" />
          <span className="nav-header--text group-hover:text-white">
            {navTitle}
          </span>
        </div>
      </Button>
      <li className={`${isOpen ? "block" : "hidden"} p-3`}>
        <ul>{navList}</ul>
      </li>
    </ul>
  );
};
