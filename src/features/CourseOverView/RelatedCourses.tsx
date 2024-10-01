import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRelatedCourses } from "../../services/courseOverView/CourseOverViewAPI";
import { CourseCart } from "../../types/global";

function RelatedCourses({ courseName }: { courseName: string }) {
  const [courses, setCourses] = useState<CourseCart[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchRelatedCourses(courseName);
      setCourses(data);
    }
    fetchData();
  }, [courseName]);
  return (
    <div className="my-1 hidden flex-col items-start justify-center bg-slate-50 p-2 lg:flex dark:bg-slate-900">
      <h3 className="text-xl font-semibold">Explore Related Courses</h3>
      {!courses.length && (
        <div className="flex items-center py-2">
          <i className="fa-solid fa-circle-info pr-1 text-[25px] text-sky-500"></i>
          <p>
            No related courses available at the moment. Please check back soon!
          </p>
        </div>
      )}
      {!!courses.length &&
        courses.map((course) => (
          <Link
            key={course._id}
            to={`/courseoverview/${course.shortName}`}
            className="my-1 flex w-full items-center justify-start gap-1 hover:text-sky-500"
          >
            <img
              className="h-10 rounded"
              src="/images/courses/npm-cover.jpg"
              alt={course.shortName}
            />
            <h4 className="text-lg font-semibold">{course.name}</h4>
          </Link>
        ))}
    </div>
  );
}

export default RelatedCourses;
