function LableInput({ text, subtext }: { text: string; subtext?: string }) {
  return (
    <label className="block text-[18px] font-semibold">
      {text}
      <small className="text-[14px] font-medium">{subtext}</small>
    </label>
  );
}

export default LableInput;
