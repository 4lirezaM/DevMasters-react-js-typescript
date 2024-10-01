import { Comment } from "../../../types/global";
import { ShowRating } from "../../../ui/starRating";
import CommentReply from "./CommentReply";

function CommentBox({ commentData }: { commentData: Comment }) {
  return (
    <div className="my-4 rounded bg-slate-100 p-1 dark:bg-slate-800">
      <div className="mb-3 ml-2 mt-2 flex items-center">
        <div className="flex aspect-square w-10 items-center justify-center rounded-full bg-slate-200 text-[16px] text-slate-400 ring ring-slate-400 ring-offset-4 ring-offset-slate-50 sm:w-20 sm:text-[36px] dark:bg-slate-500 dark:text-slate-100 dark:ring-slate-500 dark:ring-offset-slate-900">
          <i className="fa fa-user"></i>
        </div>
        <div className="ml-5">
          <h4 className="mb-1 text-[20px] font-semibold">
            {commentData.creator.name}
          </h4>
          <p className="">{commentData.createdAt.slice(0, 10)}</p>
          <ShowRating rate={commentData.score} />
        </div>
      </div>
      <p className="border-t-1 border-solid border-slate-300 p-3 text-lg dark:border-slate-600">
        {commentData.body}
      </p>
      {!!commentData.answerContent && (
        <CommentReply answerContent={commentData.answerContent} />
      )}
    </div>
  );
}

export default CommentBox;
