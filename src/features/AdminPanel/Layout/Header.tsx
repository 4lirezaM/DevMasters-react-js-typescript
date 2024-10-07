import useAppContext from "../../../Hooks/useAppContext";
import { SetState } from "../../../types/global";
import HeaderNotification from "./HeaderNotification";

function Header({ setIsOpen }: { setIsOpen: SetState<boolean> }) {
  const { userInfo } = useAppContext();
  function sidbarOpenHandler() {
    setIsOpen(true);
  }
  return (
    <div className="flex items-center justify-between bg-sky-400 p-2 dark:bg-slate-900">
      <button onClick={sidbarOpenHandler} className="p-1 md:hidden">
        <i className="fa-solid fa-xl fa-bars"></i>
      </button>
      <div className="flex items-center justify-between gap-2 p-1">
        <div className="w-10 overflow-hidden rounded-full">
          <img
            className="w-full"
            src="/images/teachers/IMG_20230916_011611 (1).jpg"
            alt=""
          />
        </div>
        <h4 className="text-[20px] font-semibold">{userInfo?.name}</h4>
      </div>
      <HeaderNotification />
    </div>
  );
}

export default Header;
