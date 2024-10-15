import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import SessionItem from "./SessionItem.tsx";
import {
  SessionItemTableType,
  getAdminSessions,
} from "../../../services/adminPanel/AdminSessetionsAPI.ts";

function SessionsDisplay() {
  const { data, error, isLoading } = useQuery<SessionItemTableType[]>({
    queryKey: ["getAdminSessions"],
    queryFn: () => getAdminSessions(),
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
              <th>Time</th>
              <th>Course</th>
              <th>DELETE</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {data.map((item: SessionItemTableType, index: number) => (
                <SessionItem index={index} item={item} key={item._id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default SessionsDisplay;
