import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type ItemType = {
  id: string;
  title: string;
};

type SelectBoxProps<T extends FieldValues> = {
  items: ItemType[];
  error?: FieldError;
  register?: UseFormRegister<T>;
  name: Path<T>;
  required?: boolean;
};

function SelectBox<T extends FieldValues>({
  items,
  name,
  error,
  register,
  required,
}: SelectBoxProps<T>) {
  const errorStyle = "border-2 border-solid border-red-500";

  if (!register || !name || !required) {
    return (
      <select
        className={`my-1 w-full p-[3px] dark:bg-slate-700 ${error && errorStyle}`}
      >
        <option value={-1}>Select a Category</option>
        {items?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    );
  }
  return (
    <>
      <select
        {...register(name, {
          validate: (value) => value !== "-1" || "select box is required",
        })}
        className={`my-1 w-full p-[3px] focus:outline-none dark:bg-slate-700 ${error && errorStyle}`}
      >
        <option value={"-1"}>Select a Category</option>
        {items?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      {error && (
        <span className="block pb-2 text-[14px] font-medium">
          {error?.message}
        </span>
      )}
    </>
  );
}

export default SelectBox;
