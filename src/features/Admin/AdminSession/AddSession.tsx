import { SetState } from "../../../types/global";
import TextInput from "../../../ui/admin/TextInput";
import LableInput from "../../../ui/admin/LableInput";
import SelectBox from "../../../ui/admin/SelectBox";
import { SubmitHandler, useForm } from "react-hook-form";
import { minValidator, requiredValidator } from "../../../validators/rules";
import { timePattern } from "../../../validators/regex";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import { postNewSession } from "../../../services/adminPanel/AdminSessetionsAPI";
import {
  CourseItemTableType,
  fetchCourses,
} from "../../../services/adminPanel/adminCoursesAPI";
import { useState } from "react";

type AddSessionProps = {
  isAddSessionOpen: boolean;
  setIsAddSessionOpen: SetState<boolean>;
};
export type NewSessionIFormInputs = {
  title: string;
  time: string;
  video: FileList;
  courseId: string;
  free: "0" | "1";
};
function AddSession({
  setIsAddSessionOpen,
  isAddSessionOpen,
}: AddSessionProps) {
  const [CoursesSelectBoxItems, setCoursesSelectBoxItems] = useState<
    { id: string; title: string }[]
  >([]);

  const { userToken } = useAppContext();
  const queryClient = useQueryClient();
  function cancelHandler() {
    setIsAddSessionOpen((isAddSessionOpen) => !isAddSessionOpen);
  }
  // get SelectBox Courses items in initial render
  useQuery<CourseItemTableType[]>({
    queryKey: ["getCategorisForSelctBox"],
    queryFn: () => fetchCourses(userToken),
    onSuccess: (data) => {
      const catItems = data.map((item) => {
        return { title: item.name, id: item._id };
      });
      setCoursesSelectBoxItems(catItems);
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
    watch,
    reset: resetAddSessionForm,
  } = useForm<NewSessionIFormInputs>();

  const courseId = watch("courseId");

  const addMutation = useMutation(
    (formData: FormData) => postNewSession(userToken, formData, courseId),
    {
      onSuccess: () => {
        resetAddSessionForm();
        Swal.fire({
          title: "Course Created!",
          text: "Your course has been successfully added to the database.",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });
        queryClient.invalidateQueries({ queryKey: ["getAdminSessions"] });
      },
      onError: (error) => {
        console.error("Failed to post course:", error);
      },
    },
  );

  const onSubmit: SubmitHandler<NewSessionIFormInputs> = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("time", data.time);
    formData.append("free", data.free);
    formData.append("video", data.video[0]);
    addMutation.mutate(formData);
  };

  if (isAddSessionOpen)
    return (
      <div
        className={`${isAddSessionOpen ? "h-auto" : "h-0"} bg-slate-200 dark:bg-slate-900`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Session Title" />
              <TextInput<NewSessionIFormInputs>
                error={errors?.title}
                name="title"
                register={register}
                validations={{
                  minLength: minValidator(6),
                  required: requiredValidator(),
                }}
                placeholder="Enter your session title"
              />
            </div>
            <div className="w-full">
              <LableInput text="Session Time" />
              <TextInput<NewSessionIFormInputs>
                error={errors?.time}
                name="time"
                register={register}
                validations={{
                  pattern: timePattern(),
                  required: requiredValidator(),
                }}
                placeholder="Enter your Session time"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Session Course" />
              <SelectBox
                error={errors?.courseId}
                name="courseId"
                register={register}
                required={true}
                items={CoursesSelectBoxItems}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Session Video" />
              <input
                {...register("video", {
                  required: "Session video is required.",
                })}
                type="file"
                className={`file-input file-input-bordered file-input-warning file-input-sm my-1 w-full max-w-xs rounded-none bg-white outline-none focus:outline-none dark:bg-slate-700 ${errors.video ? "border-2 border-solid border-red-500" : ""}`}
              />
              {errors.video && (
                <span className="block pb-2 text-[14px] font-medium">
                  {errors.video?.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <LableInput text="Is Sesstion Free?" />
              <div className="my-1 flex items-center justify-start gap-5 p-1">
                <span className="flex items-center">
                  <label htmlFor="inprogress">YES</label>
                  <input
                    {...register("free")}
                    type="radio"
                    value="1"
                    className="radio-success radio radio-sm ml-2 dark:bg-slate-50"
                    defaultChecked
                  />
                </span>
                <span className="flex items-center">
                  <label htmlFor="completed">NO</label>
                  <input
                    {...register("free")}
                    value="0"
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
              {addMutation.isLoading ? (
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
        Dear Admins, as we prepare to add new course sessions, please
        double-check all details for accuracy and completeness. Any gaps or
        errors may cause delays in the approval process. Thanks for your
        attention to this matter!
      </div>
    </div>
  );
}

export default AddSession;
