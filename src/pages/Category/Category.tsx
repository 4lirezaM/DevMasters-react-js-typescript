import { useParams } from "react-router";
import { useEffect, useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import { CourseCart } from "../../types/global";
import Loading from "../../features/Loading/Loading";
import CourseSmallCart from "../../ui/CourseSmallCart";
import { fetchCoursesByCategory } from "../../services/category/categoryAPI";
import NotFound from "../NotFound/NotFound";
// Due to an issue in the backend, we have implemented a temporary and inefficient workaround on the frontend.

export default function Category() {
  const { categoryname } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [courses, setCourses] = useState<CourseCart[]>([]);

  useEffect(() => {
    if (!categoryname) {
      setError("Invalid URL parameters");
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCoursesByCategory(categoryname);
        setCourses(data);
      } catch (error) {
        console.log("topbar fetch error", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (
      categoryname.toLocaleLowerCase() === "frontend" ||
      categoryname.toLocaleLowerCase() === "backend" ||
      categoryname.toLocaleLowerCase() === "python" ||
      categoryname.toLocaleLowerCase() === "security" ||
      categoryname.toLocaleLowerCase() === "softskills" ||
      categoryname.toLocaleLowerCase() === "freelance"
    ) {
      setError(null);
      fetchData();
    } else {
      setError("Invalid URL parameters");
      return;
    }
  }, [categoryname]);
  if (error) return <NotFound />;
  return (
    <div className="container min-h-[350px] px-[12px] sm:px-2">
      <SectionHeader
        title={`${categoryname?.toLocaleUpperCase()} Category`}
        subTitle="Organized by category for your convenience."
        shapeColor="bg-orange-500 dark:bg-orange-400"
      />
      <div className="pb-7">
        {isLoading && <Loading />}
        {!courses.length && !isLoading && (
          <div role="alert" className="alert dark:bg-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-8 w-8 shrink-0 stroke-info"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="dark:text-slate-50">
              <p className="text-2xl">No Courses Found</p>
              <p>
                We couldn’t find any courses in this category yet. Please check
                back later or explore other categories.
              </p>
            </div>
          </div>
        )}
        {!!courses.length && !isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((course) => (
              <div className="col-span-1 py-2" key={course._id}>
                <CourseSmallCart type="B" course={course} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
