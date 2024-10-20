import { FieldError, UseFormRegister } from "react-hook-form";
import { NewCourseIFormInputs } from "../../features/Admin/AdminCourses/AddCourse";

type TextAreaProps = {
  placeholder: string;
  error?: FieldError;
  register?: UseFormRegister<NewCourseIFormInputs>;
  name?: keyof NewCourseIFormInputs;
  validations?: {
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    required?: string;
    pattern?: { value: RegExp; message: string };
  };
};
function TextArea({
  placeholder,
  error,
  register,
  name,
  validations,
}: TextAreaProps) {
  const errorStyle = "border-2 border-solid border-red-500";
  if (!name || !register) {
    return (
      <textarea
        placeholder={placeholder}
        className={`my-1 min-h-40 w-full p-1 outline-none dark:bg-slate-700 ${error && errorStyle}`}
      />
    );
  }
  return (
    <>
      <textarea
        {...register(name, validations)}
        placeholder={placeholder}
        className={`my-1 min-h-40 w-full p-1 outline-none dark:bg-slate-700 ${error && errorStyle}`}
      />
      {error && (
        <span className="block pb-2 text-[14px] font-medium">
          {error?.message}
        </span>
      )}
    </>
  );
}

export default TextArea;
