import { Category, SetState } from "../../../types/global";
import TextInput from "../../../ui/admin/TextInput";
import LableInput from "../../../ui/admin/LableInput";
import TextArea from "../../../ui/admin/TextArea";
import SelectBox from "../../../ui/admin/SelectBox";
import { getAllCategories } from "../../../services/adminPanel/adminCategoriesAPI";
import { SubmitHandler, useForm } from "react-hook-form";
import { minValidator, requiredValidator } from "../../../validators/rules";
import { pricePattern } from "../../../validators/regex";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { postNewCourse } from "../../../services/adminPanel/adminCoursesAPI";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import { useState } from "react";

type AddCourseProps = {
  isAddCourseOpen: boolean;
  setIsAddCourseOpen: SetState<boolean>;
};
export type NewCourseIFormInputs = {
  courseName: string;
  price: string;
  courseDes: string;
  raidoStatus: string;
  courseCover: FileList;
  Support: string;
  courseCategory: string;
  shortname: string;
};
function AddCourse({ setIsAddCourseOpen, isAddCourseOpen }: AddCourseProps) {
  const [categorySelectBoxItems, setCategorySelectBoxItems] = useState<
    { id: string; title: string }[]
  >([]);

  const { userToken } = useAppContext();
  const queryClient = useQueryClient();

  function cancelHandler() {
    setIsAddCourseOpen((isAddCourseOpen) => !isAddCourseOpen);
  }
  // get SelectBox Category items in initial render
  useQuery<Category[]>({
    queryKey: ["getCategorisForSelctBox"],
    queryFn: () => getAllCategories(),
    onSuccess: (data) => {
      const catItems = data.map((item) => {
        return { title: item.title, id: item._id };
      });
      setCategorySelectBoxItems(catItems);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  // form handling

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset: resetAddCourseForm,
  } = useForm<NewCourseIFormInputs>();

  const mutation = useMutation(
    (formData: FormData) => postNewCourse(userToken, formData),
    {
      onSuccess: () => {
        resetAddCourseForm();
        Swal.fire({
          title: "Course Created!",
          text: "Your course has been successfully added to the database.",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });
        queryClient.invalidateQueries({ queryKey: ["getCourses"] });
      },
      onError: (error) => {
        console.error("Failed to post course:", error);
      },
    },
  );

  const onSubmit: SubmitHandler<NewCourseIFormInputs> = (data) => {
    const formData = new FormData();
    formData.append("name", data.courseName);
    formData.append("description", data.courseDes);
    formData.append("shortName", data.shortname);
    formData.append("categoryID", data.courseCategory);
    formData.append("price", data.price);
    formData.append("support", data.Support);
    formData.append("status", data.raidoStatus);
    formData.append("cover", data.courseCover[0]);
    mutation.mutate(formData);
  };

  if (isAddCourseOpen)
    return (
      <div
        className={`${isAddCourseOpen ? "h-auto" : "h-0"} bg-slate-200 dark:bg-slate-900`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Course name" />
              <TextInput<NewCourseIFormInputs>
                error={errors?.courseName}
                name="courseName"
                register={register}
                validations={{
                  minLength: minValidator(6),
                  required: requiredValidator(),
                }}
                placeholder="Enter your course name"
              />
            </div>
            <div className="w-full">
              <LableInput text="Course Price" />
              <TextInput<NewCourseIFormInputs>
                error={errors?.price}
                name="price"
                register={register}
                validations={{
                  pattern: pricePattern(),
                  required: requiredValidator(),
                }}
                placeholder="Enter your course Price"
              />
            </div>
          </div>
          <div>
            <LableInput text="Description" />
            <TextArea
              error={errors?.courseDes}
              name="courseDes"
              validations={{ required: requiredValidator() }}
              register={register}
              placeholder="Enter the course description"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Course Url ShortName" />
              <TextInput<NewCourseIFormInputs>
                error={errors?.shortname}
                name="shortname"
                register={register}
                validations={{ required: requiredValidator() }}
                placeholder="Enter your course ShortName"
              />
            </div>
            <div className="w-full">
              <LableInput text="Course Category" />
              <SelectBox
                items={categorySelectBoxItems}
                error={errors?.courseCategory}
                name="courseCategory"
                register={register}
                required={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Support Method" />
              <TextInput<NewCourseIFormInputs>
                error={errors?.Support}
                name="Support"
                validations={{ required: requiredValidator() }}
                register={register}
                placeholder="Enter your course Support Method"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Course Main Image" />
              <input
                {...register("courseCover", {
                  required: "course cover is required.",
                })}
                type="file"
                className={`file-input file-input-bordered file-input-warning file-input-sm my-1 w-full max-w-xs rounded-none bg-white outline-none focus:outline-none dark:bg-slate-700 ${errors.courseCover ? "border-2 border-solid border-red-500" : ""}`}
              />
              {errors.courseCover && (
                <span className="block pb-2 text-[14px] font-medium">
                  {errors.courseCover?.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <LableInput text="Course Status" />
              <div className="my-1 flex items-center justify-start gap-5 p-1">
                <span className="flex items-center">
                  <label htmlFor="inprogress">start</label>
                  <input
                    {...register("raidoStatus")}
                    type="radio"
                    value="start"
                    className="radio-success radio radio-sm ml-2 dark:bg-slate-50"
                    defaultChecked
                  />
                </span>
                <span className="flex items-center">
                  <label htmlFor="completed">presell</label>
                  <input
                    {...register("raidoStatus")}
                    value="presell"
                    type="radio"
                    className="radio-success radio radio-sm ml-2 dark:bg-slate-50"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* post and cancel button */}
          <div className="flex items-center justify-end">
            <button
              className="mx1 w-[140px] rounded-sm border-1 border-green-500 bg-green-500 px-2 py-[6px] text-[17px] text-white hover:border-green-600 hover:bg-green-600"
              type="submit"
            >
              {mutation.isLoading ? (
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
