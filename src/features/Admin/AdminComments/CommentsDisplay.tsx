import { useQuery } from "react-query";
import {
  CommentItemTableType,
  getAllComments,
} from "../../../services/adminPanel/adminCommentsAPI";
import Loading from "../../Loading/Loading";
import CommentItem from "./CommentItem";

function CommentsDisplay() {
  const { data, error, isLoading } = useQuery<CommentItemTableType[]>({
    queryKey: ["getAllComments"],
    queryFn: () => getAllComments(),
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
              <th>Course</th>
              <th>Creator</th>
              <th>Context</th>
              <th>Answer</th>
              <th>Reply</th>
              <th>Accept</th>
              <th>Reject</th>
              <th>Delete</th>
              <th>Status</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {data
                .filter((item) => item.isAnswer === 0)
                .map((item: CommentItemTableType, index: number) => (
                  <CommentItem index={index} item={item} key={item._id} />
                ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
export default CommentsDisplay;
