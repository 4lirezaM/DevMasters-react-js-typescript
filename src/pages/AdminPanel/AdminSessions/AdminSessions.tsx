import { useState } from "react";
import AddSession from "../../../features/Admin/AdminSession/AddSession";
import SessionsDisplay from "../../../features/Admin/AdminSession/SessionsDisplay";

function AdminSessions() {
  const [isAddSessionOpen, setIsAddSessionOpen] = useState(false);
  function addCourseOpenHandler() {
    setIsAddSessionOpen((isAddSessionOpen) => !isAddSessionOpen);
  }
  return (
    <div>
      <div className="min-h-svh bg-slate-50 p-1 sm:p-4 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-purple-400 dark:bg-purple-500"></span>
            Sessions
          </h2>
          <button
            className="w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600"
            onClick={addCourseOpenHandler}
          >
            {isAddSessionOpen ? "Close Form" : "Add New Session"}
          </button>
        </div>
        <AddSession
          setIsAddSessionOpen={setIsAddSessionOpen}
          isAddSessionOpen={isAddSessionOpen}
        />
        <SessionsDisplay />
      </div>
    </div>
  );
}

export default AdminSessions;
