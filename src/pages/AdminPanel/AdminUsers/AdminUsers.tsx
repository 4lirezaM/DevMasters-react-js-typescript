import { useState } from "react";
import AddUser from "../../../features/Admin/AminUsers/AddUser";
import UseresDisplay from "../../../features/Admin/AminUsers/UseresDisplay";

function AdminUsers() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  function addCourseOpenHandler() {
    setIsAddUserOpen((isAddUserOpen) => !isAddUserOpen);
  }

  return (
    <div>
      <div className="min-h-svh bg-slate-50 p-1 sm:p-4 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-rose-400 dark:bg-rose-500"></span>
            Users
          </h2>
          <button
            className="w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600"
            onClick={addCourseOpenHandler}
          >
            {isAddUserOpen ? "Close Form" : "Add New User"}
          </button>
        </div>
        <AddUser
          setIsAddUserOpen={setIsAddUserOpen}
          isAddUserOpen={isAddUserOpen}
        />
        <UseresDisplay />
      </div>
    </div>
  );
}

export default AdminUsers;
