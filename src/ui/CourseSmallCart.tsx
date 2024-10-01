import { Link } from "react-router-dom";
import { CourseCart } from "../types/global";
function CourseSmallCart({
  course,
  type,
}: {
  course: CourseCart;
  type: "A" | "B";
}) {
  return (
    <div className="m-2 flex h-full flex-col justify-between overflow-hidden rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-slate-900">
      <Link to={`/courseoverview/${course.shortName}`}>
        <img
          className="w-full"
          src="/images/courses/npm-cover.jpg"
          alt={course.shortName}
        />
      </Link>
      <div className="flex h-full flex-col justify-between p-2 pb-0 pt-4">
        <h2 className="text-2xl font-semibold">
          <Link
            className="hover:text-sky-500 dark:hover:text-sky-600"
            to={`/courseoverview/${course.shortName}`}
          >
            {course.name}
          </Link>
        </h2>
        {type === "A" && (
          <div className="border-b-[1px] border-solid border-slate-200 py-2 pr-1 dark:border-slate-950">
            <div className="flex items-center justify-between pt-2">
              <p>{course.creator}</p>
              <div className="flex space-x-[-3px]">
                {Array.from({ length: 5 - course.courseAverageScore }).map(
                  (_, index) => (
                    <svg
                      key={`empty-${index}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#FFD700"
                      className="trackin h-6 w-6"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ),
                )}
                {Array.from({ length: course.courseAverageScore }).map(
                  (_, index) => (
                    <svg
                      key={`filled-${index}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FFD700"
                      stroke="#FFD700"
                      className="trackin h-6 w-6"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ),
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <i className="fa fa-chalkboard-user" /> {course.registers}
              </div>
              <p className="text-xl font-medium text-green-500">
                {course.price === 0 ? "free" : `${course.price} $`}
              </p>
            </div>
          </div>
        )}
        {type === "B" && (
          <div className="relative border-b-[1px] border-solid border-slate-200 pb-4 dark:border-slate-950">
            <div className="relative flex h-[74px] items-start justify-between overflow-hidden pt-2">
              {course.description}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent dark:from-slate-900"></div>
            </div>
            <div className="flex items-center justify-end">
              <p className="absolute bottom-[2px] text-xl font-medium text-green-500">
                {course.price === 0 ? "free" : `${course.price} $`}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="">
        <Link
          to={`/courseoverview/${course.shortName}`}
          className="block py-4 text-center font-semibold hover:cursor-pointer hover:text-sky-500 dark:hover:text-sky-500"
        >
          See More
        </Link>
      </div>
    </div>
  );
}

export default CourseSmallCart;
