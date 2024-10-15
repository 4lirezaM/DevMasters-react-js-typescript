import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type PasswordInputProps<T extends FieldValues> = {
  placeholder: string;
  error?: FieldError;
  register?: UseFormRegister<T>;
  name: Path<T>;
  validations?: {
    validate?: (value: string) => boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    required?: string;
    pattern?: { value: RegExp; message: string };
  };
};
function PasswordInput<T extends FieldValues>({
  placeholder,
  register,
  name,
  error,
  validations,
}: PasswordInputProps<T>) {
  const errorStyle = "border-2 border-solid border-red-500";
  if (!register || !name) {
    return (
      <input
        placeholder={placeholder}
        type="password"
        className={`my-1 w-full rounded-sm p-1 outline-none dark:bg-slate-700 ${error && errorStyle}`}
      />
    );
  }
  return (
    <>
      <input
        {...register(name, validations)}
        type="password"
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

export default PasswordInput;
