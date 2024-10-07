import { Link } from "react-router-dom";

// CourseIntro : This feature shows a short description, title, buy button, and introduction video.
type CourseIntroProps = {
  category: string;
  name: string;
  description: string;
};
function CourseIntro({ category, name, description }: CourseIntroProps) {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-md bg-slate-50 p-3 md:flex-row dark:bg-slate-900">
      <div className="flex items-center justify-center md:basis-1/2">
        <video
          src=""
          poster="/images/courses/npm-cover.jpg"
          className="rounded-xl"
          controls
        ></video>
      </div>
      <div className="md:flex md:basis-1/2 md:flex-col md:justify-between">
        <div>
          <div className="flex items-center justify-end">
            <Link to={`/category-info/${category}`}>
              <div className="badge badge-accent">{category}</div>
            </Link>
          </div>
          <h1 className="text-4xl font-semibold">{name}</h1>
          <p className="line-clamp-[9] lg:line-clamp-[10] max-h-[176px] overflow-hidden lg:text-[17px] xl:line-clamp-none xl:max-h-[270px] xl:text-[20px] xl:leading-6">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-end gap-2 py-1">
          <Link to="" className="hover:text-sky-600 dark:hover:text-sky-500">
            <i className="fab fa-facebook-f fa-lg"></i>
          </Link>
          <Link to="" className="hover:text-sky-600 dark:hover:text-sky-500">
            <i className="fab fa-twitter fa-lg"></i>
          </Link>
          <Link to="" className="hover:text-sky-600 dark:hover:text-sky-500">
            <i className="fab fa-telegram-plane fa-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseIntro;
