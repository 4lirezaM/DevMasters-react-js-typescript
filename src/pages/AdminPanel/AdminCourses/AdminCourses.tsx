import { useState } from "react";
import AddCourse from "../../../features/Admin/AdminCourses/AddCourse";
import CourseDisplay from "../../../features/Admin/AdminCourses/CourseDisplay";

function AdminCourses() {
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  function addCourseOpenHandler() {
    setIsAddCourseOpen((isAddCourseOpen) => !isAddCourseOpen);
  }
  return (
    <div>
      <div className="min-h-svh bg-slate-50 p-1 sm:p-4 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-yellow-400 dark:bg-yellow-500"></span>
            Courses
          </h2>
          <button
            className="w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600"
            onClick={addCourseOpenHandler}
          >
            {isAddCourseOpen ? "Close Form" : "Add Course"}
          </button>
        </div>
        <AddCourse
          setIsAddCourseOpen={setIsAddCourseOpen}
          isAddCourseOpen={isAddCourseOpen}
        />
        <CourseDisplay />
      </div>
    </div>
  );
}

export default AdminCourses;
