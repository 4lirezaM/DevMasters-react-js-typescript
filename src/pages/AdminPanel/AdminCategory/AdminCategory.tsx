import { useState } from "react";
import AddCategory from "../../../features/Admin/AdminCategory/AddCategory";
import CategoryDisplay from "../../../features/Admin/AdminCategory/CategoryDisplay";

function AdminCategory() {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  function addCourseOpenHandler() {
    setIsAddCategoryOpen((isAddCategoryOpen) => !isAddCategoryOpen);
  }

  return (
    <div>
      <div className="min-h-svh bg-slate-50 p-1 sm:p-4 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-lime-400 dark:bg-lime-500"></span>
            Categories
          </h2>
          <button
            className="w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600"
            onClick={addCourseOpenHandler}
          >
            {isAddCategoryOpen ? "Close Form" : "Add Category"}
          </button>
        </div>
        <AddCategory
          setIsAddCategoryOpen={setIsAddCategoryOpen}
          isAddCategoryOpen={isAddCategoryOpen}
        />
        <CategoryDisplay />
      </div>
    </div>
  );
}

export default AdminCategory;
