import { Comment } from "../../../types/global";
import CommentBox from "./CommentBox";

function CommentDisplay({ commentsData }: { commentsData: Comment[] }) {
  if (!commentsData.length)
    return (
      <div>
        <div className="my-3 rounded bg-blue-100 px-1 py-2 text-lg text-blue-800">
          <h4 className="font-semibold">
            <i className="fa fa-circle-info fa-lg mr-1"></i>No Comments Yet
          </h4>
          It looks like there are no comments at the moment. Feel free to share
          your thoughts or check back later for updates!
        </div>
      </div>
    );
  return (
    <div>
      {commentsData.map((comment) => (
        <CommentBox key={comment._id} commentData={comment} />
      ))}
    </div>
  );
}

export default CommentDisplay;
