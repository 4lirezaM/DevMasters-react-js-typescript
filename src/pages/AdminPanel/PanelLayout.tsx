import { Outlet, useNavigate } from "react-router";
import Sidebar from "../../features/Admin/Layout/Sidebar";
import Header from "../../features/Admin/Layout/Header";
import { useEffect, useState } from "react";
import useAppContext from "../../Hooks/useAppContext";
import Swal from "sweetalert2";
import Loading from "../../features/Loading/Loading";

function PanelLayout() {
  const navigate = useNavigate();
  const { userInfo } = useAppContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    if (!userInfo || userInfo?.role !== "ADMIN") {
      navigate("/");
      Swal.fire({
        title: "Access Denied",
        text: "You must sign in first. This section is only accessible to admins.",
        icon: "warning",
      });
    }
  }, [userInfo]);
  if (!userInfo)
    return (
      <div className="flex h-dvh w-dvw items-center justify-center dark:bg-slate-950">
        <Loading />
      </div>
    );
  return (
    <div className="flex h-dvh w-full">
      <div className="h-full">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
      <div className="w-full overflow-hidden">
        <Header setIsOpen={setIsSidebarOpen} />
        <div className="h-[calc(100%-63px)] overflow-y-scroll dark:bg-slate-800">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelLayout;
