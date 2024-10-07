import { useState } from "react";
import { SetState } from "../../../types/global";
import TextInput from "../../../ui/admin/TextInput";
import LableInput from "../../../ui/admin/LableInput";
import TextArea from "../../../ui/admin/TextArea";
import SelectBox from "../../../ui/admin/SelectBox";
import { getAllCategories } from "../../../services/adminPanel/adminCategoriesAPI";

type AddCourseProps = {
  isAddCourseOpen: boolean;
  setIsAddCourseOpen: SetState<boolean>;
};

function AddCourse({ setIsAddCourseOpen, isAddCourseOpen }: AddCourseProps) {
  const [isLoading] = useState(false);

  function cancelHandler() {
    setIsAddCourseOpen((isAddCourseOpen) => !isAddCourseOpen);
  }

  if (isAddCourseOpen)
    return (
      <div
        className={`${isAddCourseOpen ? "h-auto" : "h-0"} bg-slate-200 dark:bg-slate-900`}
      >
        <form className="p-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Course name" />
              <TextInput placeholder="Enter your course name" />
            </div>
            <div className="w-full">
              <LableInput
                text="Course Price"
                subtext="(Enter 0 for free courses)"
              />
              <TextInput placeholder="Enter your course Price" />
            </div>
          </div>
          <div>
            <LableInput text="Description" />
            <TextArea placeholder="Enter the course description" />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Course Url ShortName" />
              <TextInput placeholder="Enter your course ShortName" />
            </div>
            <div className="w-full">
              <LableInput text="Course Category" />
              <SelectBox getFunc={getAllCategories} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Course Main Image" />
              <input
                type="file"
                className="file-input file-input-bordered file-input-warning file-input-sm my-1 w-full max-w-xs rounded-none bg-white dark:bg-slate-700"
              />
            </div>
            <div className="w-full">
              <LableInput text="Course Status" />
              <div className="my-1 flex items-center justify-start gap-5 p-1">
                <span className="flex items-center">
                  In Progress
                  <input
                    type="radio"
                    name="radio-status"
                    className="radio-success radio radio-sm ml-2 dark:bg-slate-50"
                    defaultChecked
                  />
                </span>
                <span className="flex items-center">
                  Completed
                  <input
                    type="radio"
                    name="radio-status"
                    className="radio-success radio radio-sm ml-2 dark:bg-slate-50"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* post and cancel button */}
          <div className="flex items-center justify-end">
            <button className="mx1 w-[140px] rounded-sm border-1 border-green-500 bg-green-500 px-2 py-[6px] text-[17px] text-white hover:border-green-600 hover:bg-green-600">
              {isLoading ? (
                <div className="flex items-center justify-center gap-1">
                  <span>Posting</span>
                  <span className="loading loading-dots loading-xs h-[16px]"></span>
                </div>
              ) : (
                "Post"
              )}
            </button>
            <button
              onClick={cancelHandler}
              className="m-1 w-[140px] rounded-sm border-1 border-red-600 px-2 py-[6px] text-[17px] text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  return (
    <div>
      <div className="my-3 rounded bg-green-100 px-1 py-2 text-lg text-green-800">
        Dear Admins, please ensure that all course details are thoroughly
        reviewed before submission. Any incomplete or inaccurate information may
        delay the course approval process. Thank you for your cooperation.
      </div>
    </div>
  );
}

export default AddCourse;
