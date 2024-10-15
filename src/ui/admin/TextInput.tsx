import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  placeholder: string;
  error?: FieldError;
  register?: UseFormRegister<T>;
  name: Path<T>;
  validations?: {
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    required?: string;
    pattern?: { value: RegExp; message: string };
  };
};
function TextInput<T extends FieldValues>({
  placeholder,
  register,
  name,
  error,
  validations,
}: TextInputProps<T>) {
  const errorStyle = "border-2 border-solid border-red-500";
  if (!register || !name) {
    return (
      <input
        placeholder={placeholder}
        className={`my-1 w-full rounded-sm p-1 outline-none dark:bg-slate-700 ${error && errorStyle}`}
      />
    );
  }
  return (
    <>
      <input
        {...register(name, validations)}
        placeholder={placeholder}
        className={`my-1 w-full rounded-sm p-1 outline-none dark:bg-slate-700 ${error && errorStyle}`}
      />
      {error && (
        <span className="block pb-2 text-[14px] font-medium">
          {error?.message}
        </span>
      )}
    </>
  );
}

export default TextInput;
