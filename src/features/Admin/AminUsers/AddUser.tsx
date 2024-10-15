import { SetState } from "../../../types/global";
import TextInput from "../../../ui/admin/TextInput";
import LableInput from "../../../ui/admin/LableInput";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  minValidator,
  passwordMatchValidator,
  requiredValidator,
} from "../../../validators/rules";
import { useMutation, useQueryClient } from "react-query";
import {
  NewUser,
  postNewUser,
} from "../../../services/adminPanel/AdminUsersAPI";
import Swal from "sweetalert2";
import PasswordInput from "../../../ui/admin/PasswordInput";
import { emailPattern } from "../../../validators/regex";

type AddUserProps = {
  isAddUserOpen: boolean;
  setIsAddUserOpen: SetState<boolean>;
};

function AddCourse({ setIsAddUserOpen, isAddUserOpen }: AddUserProps) {
  const queryClient = useQueryClient();
  function cancelHandler() {
    setIsAddUserOpen((isAddUserOpen) => !isAddUserOpen);
  }
  // form handling

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset: resetAddCourseForm,
    watch,
  } = useForm<NewUser>();

  const password = watch("password");

  const mutation = useMutation(
    (userObject: NewUser) => postNewUser(userObject),
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
        queryClient.invalidateQueries({ queryKey: ["getUsers"] });
      },
      onError: (error) => {
        console.error("Failed to post course:", error);
      },
    },
  );

  const onSubmit: SubmitHandler<NewUser> = (data) => {
    mutation.mutate(data);
  };

  if (isAddUserOpen)
    return (
      <div
        className={`${isAddUserOpen ? "h-auto" : "h-0"} bg-slate-200 dark:bg-slate-900`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Full Name" />
              <TextInput
                error={errors?.name}
                name="name"
                register={register}
                validations={{
                  minLength: minValidator(6),
                  required: requiredValidator(),
                }}
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full">
              <LableInput text="Username" />
              <TextInput
                error={errors?.username}
                name="username"
                register={register}
                validations={{
                  required: requiredValidator(),
                }}
                placeholder="Enter your Username"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Email" />
              <TextInput
                error={errors?.email}
                name="email"
                register={register}
                validations={{
                  required: requiredValidator(),
                  pattern: emailPattern(),
                }}
                placeholder="Enter your Email"
              />
            </div>
            <div className="w-full">
              <LableInput text="Phone" />
              <TextInput
                error={errors?.phone}
                name="phone"
                validations={{ required: requiredValidator() }}
                register={register}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Password" />
              <PasswordInput
                error={errors?.password}
                name="password"
                register={register}
                validations={{
                  required: requiredValidator(),
                  minLength: minValidator(8),
                }}
                placeholder="Enter your password"
              />
            </div>
            <div className="w-full">
              <LableInput text="Confirm Password" />
              <PasswordInput
                error={errors?.confirmPassword}
                name="confirmPassword"
                validations={{
                  required: requiredValidator(),
                  validate: passwordMatchValidator(password),
                  minLength: minValidator(8),
                }}
                register={register}
                placeholder="Enter your password again"
              />
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
        Dear Admins, as we add new users to the system, please ensure that all
        their details are accurately reviewed before submission. Any incomplete
        or incorrect information may cause delays in the approval process.
        Thanks for your careful attention to this matter!
      </div>
    </div>
  );
}

export default AddCourse;
