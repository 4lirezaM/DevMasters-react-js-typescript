import { useState } from "react";
import AddMenu from "../../../features/Admin/AdminMenus/AddMenu";
import MenusDisplay from "../../../features/Admin/AdminMenus/MenusDisplay";

function AdminMenus() {
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  function addCourseOpenHandler() {
    setIsAddMenuOpen((isAddMenuOpen) => !isAddMenuOpen);
  }

  return (
    <div>
      <div className="min-h-svh bg-slate-50 p-1 sm:p-4 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-orange-400 dark:bg-orange-500"></span>
            Menus
          </h2>
          <button
            className="w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600"
            onClick={addCourseOpenHandler}
          >
            {isAddMenuOpen ? "Close Form" : "Add New Menu"}
          </button>
        </div>
        <AddMenu
          setIsAddMenuOpen={setIsAddMenuOpen}
          isAddMenuOpen={isAddMenuOpen}
        />
        <MenusDisplay />
      </div>
    </div>
  );
}

export default AdminMenus;
