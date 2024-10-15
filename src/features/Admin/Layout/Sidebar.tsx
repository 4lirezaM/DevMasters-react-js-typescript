import { useEffect, useRef } from "react";
import { SetState } from "../../../types/global";
import Logo from "../../Header/Navbar/Components/Logo";
import styles from "./Sidebar.module.css";
import DarkModeButton from "../../Header/Navbar/Components/DarkModeButton";
import { NavLink, useNavigate } from "react-router-dom";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";

function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
}) {
  const SidebarRef = useRef<HTMLDivElement>(null);
  const { setUserInfo, setUserToken } = useAppContext();
  const navigate = useNavigate();
  function handleLogout() {
    Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Log Out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setUserInfo(null);
        setUserToken(null);
        navigate("/");
        Swal.fire(
          "Logged Out!",
          "You have been successfully logged out.",
          "success",
        );
      }
    });
  }
  function handleClose() {
    setIsOpen(false);
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        SidebarRef.current &&
        event.target instanceof Node &&
        !SidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);
  return (
    <div
      ref={SidebarRef}
      className={` ${isOpen ? "left-0" : "-left-full"} ${styles.Sidebar} absolute bottom-0 top-0 z-50 w-60 overflow-auto overflow-x-hidden border-r-1 border-solid border-r-sky-50 bg-white transition-transform duration-300 ease-in-out md:relative md:left-0 md:right-0 md:h-full dark:border-slate-950 dark:bg-slate-900`}
    >
      <div className="flex items-center justify-between border-b border-solid border-b-slate-200 p-2 pb-1.5 dark:border-b-slate-950">
        <Logo />
        <div className="flex">
          <DarkModeButton btnType="secondarySquare" />
          <button className="p-3 md:hidden" onClick={handleClose}>
            <i className="fa fa-xl fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-1 py-2 text-[20px] font-semibold hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60 ${
                isActive
                  ? "border-r-8 border-solid border-blue-600 bg-gradient-to-r from-transparent to-sky-500/60 dark:border-blue-700 dark:to-sky-500/50"
                  : ""
              }`
            }
            to="/panel/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-1 py-2 text-[20px] font-semibold hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60 ${
                isActive
                  ? "border-r-8 border-solid border-blue-600 bg-gradient-to-r from-transparent to-sky-500/60 dark:border-blue-700 dark:to-sky-500/50"
                  : ""
              }`
            }
            to="/panel/admincourses"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-1 py-2 text-[20px] font-semibold hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60 ${
                isActive
                  ? "border-r-8 border-solid border-blue-600 bg-gradient-to-r from-transparent to-sky-500/60 dark:border-blue-700 dark:to-sky-500/50"
                  : ""
              }`
            }
            to="/panel/AdminSessions"
          >
            Sessions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-1 py-2 text-[20px] font-semibold hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60 ${
                isActive
                  ? "border-r-8 border-solid border-blue-600 bg-gradient-to-r from-transparent to-sky-500/60 dark:border-blue-700 dark:to-sky-500/50"
                  : ""
              }`
            }
            to="/panel/users"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-1 py-2 text-[20px] font-semibold hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60 ${
                isActive
                  ? "border-r-8 border-solid border-blue-600 bg-gradient-to-r from-transparent to-sky-500/60 dark:border-blue-700 dark:to-sky-500/50"
                  : ""
              }`
            }
            to="/panel/adminmenus"
          >
            Menus
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-1 py-2 text-[20px] font-semibold hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60 ${
                isActive
                  ? "border-r-8 border-solid border-blue-600 bg-gradient-to-r from-transparent to-sky-500/60 dark:border-blue-700 dark:to-sky-500/50"
                  : ""
              }`
            }
            to="/panel/admincategory"
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <div
        onClick={handleLogout}
        className="block px-1 py-2 text-[20px] font-semibold hover:cursor-pointer hover:bg-gradient-to-r hover:from-transparent hover:to-sky-500/60"
      >
        Log Out
      </div>
    </div>
  );
}

export default Sidebar;
