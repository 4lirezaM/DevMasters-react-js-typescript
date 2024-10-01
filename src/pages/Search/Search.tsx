import { useEffect, useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import { CourseCart } from "../../types/global";
import { fetchsearchResult } from "../../services/search/searchAPI";
import { useParams } from "react-router-dom";
import Loading from "../../features/Loading/Loading";
import CourseSmallCart from "../../ui/CourseSmallCart";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<CourseCart[]>([]);
  const { query } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (query) {
          const data = await fetchsearchResult(query);
          setCourses(data);
        }
      } catch (error) {
        console.log("topbar fetch error", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);
  return (
    <div className="container min-h-[350px] px-[12px] sm:px-2">
      <SectionHeader
        title="Search Results"
        subTitle="Uncover the answers you seek."
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
              <p className="text-2xl">No Results Found</p>
              <p>
                We couldn’t find any results for your search. Please try using
                different keywords or check your spelling and try again.
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

export default Search;
