import { ReactNode, useState } from "react";

function ExpandableDiv({
  children,
  height = "h-[730px]",
  disable = false,
}: {
  children: ReactNode;
  height?: string;
  disable?: boolean;
}) {
  const [isDescOpen, setIsDescOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsDescOpen((isDescOpen) => !isDescOpen);
  };
  if (disable)
    return (
      <div
        className={
          "relative my-2 overflow-hidden bg-slate-50 px-2 pb-14 pt-2 transition-all duration-500 dark:bg-slate-900"
        }
      >
        {children}
      </div>
    );
  return (
    <div
      className={`relative ${isDescOpen ? "px-2 pb-14 pt-2" : "p-2"} ${!isDescOpen && height} my-2 overflow-hidden bg-slate-50 transition-all duration-500 dark:bg-slate-900`}
    >
      {children}
      <div
        className={`${isDescOpen && "hidden"} pointer-events-none absolute bottom-12 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900`}
      ></div>
      <div className="absolute bottom-0 flex w-full items-center justify-center bg-slate-50 p-2 dark:bg-slate-900">
        <button
          className="rounded-sm border-2 border-sky-500 bg-slate-50 px-2 text-2xl font-semibold text-sky-500 hover:bg-sky-500 hover:text-white dark:border-sky-400 dark:bg-slate-900 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-slate-50"
          onClick={handleClick}
        >
          {isDescOpen ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default ExpandableDiv;
