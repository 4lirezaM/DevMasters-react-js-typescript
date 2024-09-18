import { useEffect, useRef } from "react";
import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import Menu from "./Menu";
import Searchinput from "./Searchinput";
import styles from "./Sidebar.module.css";
import { SetState } from "../../../../types/global";

function Sidebar({
  setIsSidebarOpen,
  isSidebarOpen,
}: {
  setIsSidebarOpen: SetState<boolean>;
  isSidebarOpen: boolean;
}) {
  const SidebarRef = useRef<HTMLDivElement>(null);

  function handleClose() {
    setIsSidebarOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        SidebarRef.current &&
        event.target instanceof Node &&
        !SidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSidebarOpen]);

  return (
    <div
      ref={SidebarRef}
      className={`${styles.Sidebar} ${isSidebarOpen ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-50 w-60 overflow-auto overflow-x-hidden border-r-1 border-solid border-r-sky-50 bg-white p-2 transition-all duration-300 ease-in-out md:hidden dark:border-slate-950 dark:bg-slate-900`}
    >
      <div className="flex items-center justify-between border-b border-solid border-b-slate-200 pb-1.5 dark:border-b-slate-950">
        <Logo />
        <div className="flex">
          <DarkModeButton btnType="secondarySquare" />
          <button className="p-3" onClick={handleClose}>
            <i className="fa fa-xl fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="py-1">
        <Searchinput />
      </div>
      <div>
        <Menu menuType="vertical" />
      </div>
    </div>
  );
}

export default Sidebar;
