import { useQuery } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import {
  CourseItemTableType,
  fetchCourses,
} from "../../../services/adminPanel/adminCoursesAPI";
import Loading from "../../Loading/Loading";
import CourseItem from "./CourseItem";

function CourseDisplay() {
  const { userToken } = useAppContext();
  const { data, error, isLoading } = useQuery<CourseItemTableType[]>({
    queryKey: ["getCourses"],
    queryFn: () => fetchCourses(userToken),
  });
  if (error) throw error;
  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-lg font-semibold text-slate-950 dark:text-slate-50">
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
              <th>Link</th>
              <th>Creator</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {data.map((item: CourseItemTableType, index: number) => (
                <CourseItem index={index} item={item} key={item._id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CourseDisplay;
