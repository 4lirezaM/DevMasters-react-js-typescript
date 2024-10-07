import { Link } from "react-router-dom";

type SectionHeaderProps = {
  title: string;
  subTitle: string;
  shapeColor: string;
  to?: string;
  linkText?: string;
};

function SectionHeader({
  title,
  subTitle,
  to,
  shapeColor,
  linkText,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between py-5">
      <div className="">
        <div className="flex items-center justify-start gap-2">
          <span
            className={`inline-block h-4 w-4 rounded-sm ${shapeColor}`}
          ></span>
          <h3 className="inline-block text-3xl font-bold">{title}</h3>
        </div>
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          {subTitle}
        </p>
      </div>
      {to && linkText ? (
        <Link
          to={to}
          className="flex items-center justify-center py-4 hover:text-sky-500 dark:hover:text-sky-600"
        >
          <span className="pb-[0.2rem] font-semibold transition-all duration-300 hover:pr-2">
            {linkText}
          </span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </Link>
      ) : null}
    </div>
  );
}

export default SectionHeader;
