import { useState } from "react";
import Logo from "./Components/Logo.tsx";
import Menu from "./Components/Menu.tsx";
import Navbarsearch from "./Components/Navbarsearch.tsx";
import Sidebar from "./Components/Sidebar.tsx";
import DarkModeButton from "./Components/DarkModeButton";
import Button from "../../../ui/Button.tsx";
import useAppContext from "../../../Hooks/useAppContext.tsx";

function Navbar() {
  const { userInfo } = useAppContext();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function handleSidebar() {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  }
  return (
    <div className="flex items-center justify-between p-1 md:pr-2 dark:bg-slate-900">
      {/* mobile size */}
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="md:hidden">
        <button className="px-1 py-3" onClick={handleSidebar}>
          <i className="fa-solid fa-xl fa-bars"></i>
        </button>
      </div>
      <div className="px-1 py-3 md:flex md:items-center md:justify-start">
        <Logo />
        {/* desktop size */}
        <div className="hidden md:block">
          <Menu menuType={"horizontal"} />
        </div>
      </div>
      <div className="px-1 py-3 md:flex md:items-center md:justify-end md:gap-2">
        <div className="hidden md:block">
          <DarkModeButton btnType="secondarySquare" />
        </div>
        <div className="hidden md:block">
          <Navbarsearch />
        </div>
        {userInfo ? (
          <Button
            classname="hidden md:flex overflow-hidden w-32 truncate "
            type="secondary"
            to={userInfo.role === "ADMIN" ? "/panel" : ""}
          >
            {userInfo.role === "ADMIN" ? "Admin Panel" : userInfo.username}
          </Button>
        ) : (
          <Button classname="hidden md:flex w-32" to="/signin" type="secondary">
            Sign in/Sign up
          </Button>
        )}
        {userInfo ? (
          <Button
            classname=" md:hidden "
            to={userInfo.role === "ADMIN" ? "/panel" : ""}
          >
            <i className="fa-solid fa-user fa-xl"></i>
          </Button>
        ) : (
          <Button classname=" md:hidden " to="/signin">
            <i className="fa-solid fa-user fa-xl"></i>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
