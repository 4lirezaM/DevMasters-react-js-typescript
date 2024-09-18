import { SetState } from "../types/global";

type FormInputProps = {
  type: string;
  id: string;
  onchange: SetState<string>;
  value: string;
  placeholder: string;
};

function FormInput({ type, id, placeholder, value, onchange }: FormInputProps) {
  return (
    <input
      className="mb-4 w-full bg-white py-2 pl-1 pr-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] outline-none placeholder:text-slate-500 focus:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-slate-950 dark:placeholder:text-slate-300"
      type={type}
      autoComplete="on"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onchange(e.target.value)}
    />
  );
}

export default FormInput;
