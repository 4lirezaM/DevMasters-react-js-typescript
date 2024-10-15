import { useQuery } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import {
  UserItemTableType,
  getAllUsers,
} from "../../../services/adminPanel/AdminUsersAPI";
import Loading from "../../Loading/Loading";
import UserItem from "./UserItem";

function CourseDisplay() {
  const { userToken } = useAppContext();
  const { data, error, isLoading } = useQuery<UserItemTableType[]>({
    queryKey: ["getUsers"],
    queryFn: () => getAllUsers(userToken),
    onSuccess: (data) => {
      const sortedData = data.sort((a, b) => {
        if (a.role === "ADMIN" && b.role !== "ADMIN") return -1;
        if (a.role !== "ADMIN" && b.role === "ADMIN") return 1;
        return 0;
      });
      return sortedData;
    },
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
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>EDIT</th>
              <th>BLOCK</th>
              <th>DELETE</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {data.map((item: UserItemTableType, index: number) => (
                <UserItem index={index} item={item} key={item._id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CourseDisplay;
