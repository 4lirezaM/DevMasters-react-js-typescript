type TextAreaProps = { placeholder: string };
function TextArea({ placeholder }: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="my-1 min-h-40 w-full p-1 outline-none dark:bg-slate-700"
    />
  );
}

export default TextArea;
