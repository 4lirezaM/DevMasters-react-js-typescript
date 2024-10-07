type TextInputProps = { placeholder: string };
function TextInput({ placeholder }: TextInputProps) {
  return (
    <input
      placeholder={placeholder}
      className="my-1 w-full p-1 outline-none dark:bg-slate-700"
    />
  );
}

export default TextInput;
