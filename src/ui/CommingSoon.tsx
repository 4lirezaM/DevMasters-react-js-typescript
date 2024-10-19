function CommingSoon({ text }: { text: string }) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <span className="text-xl font-semibold">{text}</span>
    </div>
  );
}

export default CommingSoon;
