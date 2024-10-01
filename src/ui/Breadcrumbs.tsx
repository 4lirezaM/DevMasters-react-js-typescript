import { Link } from "react-router-dom";

type BreadcrumbsProps = {
  pathArray: { id: number; title: string; to: string }[];
  current: string;
};

function Breadcrumbs({ pathArray, current }: BreadcrumbsProps) {
  return (
    <div>
      <div className="breadcrumbs pl-3 text-base sm:pb-6 sm:pt-3">
        <ul>
          <li>
            <Link
              to="/"
              className="hover:text-sky-600 hover:!no-underline dark:hover:text-sky-500"
            >
              <i className="fa fa-house fa-sm" />
              Home
            </Link>
          </li>
          {pathArray.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                className="hover:text-sky-600 hover:!no-underline dark:hover:text-sky-500"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>{current}</li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
