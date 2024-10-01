import { useState } from "react";
import { UserInfo } from "../../../services/auth/Login";
import { SetState } from "../../../types/global";
import { fetchAddComment } from "../../../services/comments/commentsAPI";
import { Ratingstar } from "../../../ui/starRating";
import Swal from "sweetalert2";

type AddCommentProps = {
  isAddCommentOpen: boolean;
  userInfo: UserInfo | null;
  userToken: string | null;
  setIsAddCommentOpen: SetState<boolean>;
  courseName: string;
};

function AddComment({
  isAddCommentOpen,
  userInfo,
  userToken,
  setIsAddCommentOpen,
  courseName,
}: AddCommentProps) {
  const [commentText, setCommentText] = useState("");
  const [rate, setRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  function handleCancel() {
    setIsAddCommentOpen(false);
  }
  function handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value);
  }
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!commentText.length || !userToken || !rate) {
      Swal.fire({
        icon: "warning",
        title: "Post Requirements!",
        text: "Please note that both the comment text and star rating are required to post your comment.",
        showConfirmButton: false,
        timer: 4000,
      });
      return;
    }
    try {
      setIsLoading(true);
      const data = await fetchAddComment(
        commentText,
        userToken,
        courseName,
        rate,
      );
      if (data) {
        setCommentText("");
        setRate(null);
        setIsAddCommentOpen(false);
        Swal.fire({
          icon: "success",
          title: "Comment Submitted",
          text: "Your comment has been sent successfully and will be published after review.",
          showConfirmButton: false,
          timer: 4000,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  //   condition rendering
  if (isAddCommentOpen && userInfo && userToken)
    return (
      <div className="my-3 px-1 py-2">
        <div className="my-3 ml-2 flex items-center">
          <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-slate-200 text-[36px] text-slate-400 ring ring-slate-400 ring-offset-4 ring-offset-slate-50 dark:bg-slate-500 dark:text-slate-100 dark:ring-slate-500 dark:ring-offset-slate-900">
            <i className="fa fa-user"></i>
          </div>
          <div className="ml-5">
            <h4 className="mb-1 text-[20px] font-semibold">{userInfo.name}</h4>
            <p className="">Submit a new comment</p>
          </div>
        </div>
        <div
          role="alert"
          className="my-3 flex items-center rounded bg-yellow-300 px-1 py-2 text-lg text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            Please post questions related to each lesson or video on the page of
            that specific video.
          </span>
        </div>
        <form onSubmit={submitHandler}>
          <textarea
            value={commentText}
            onChange={handleTextArea}
            className="h-[260px] w-full rounded p-2 focus:outline-none dark:bg-slate-700"
            placeholder="Write your comment here…"
          ></textarea>

          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <Ratingstar rate={rate} setRate={setRate} size={36} />

            <div className="flex items-center justify-end">
              <button className="mx1 w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-1">
                    <span>Posting</span>
                    <span className="loading loading-dots loading-xs h-[16px]"></span>
                  </div>
                ) : (
                  "Post"
                )}
              </button>
              <button
                onClick={handleCancel}
                className="m-1 w-[140px] rounded-sm border-1 border-red-600 px-2 py-[6px] text-[17px] text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  return (
    <div>
      <div className="my-3 rounded bg-green-100 px-1 py-2 text-lg text-green-800">
        Dear students, please note that support-related questions will not be
        approved in the comments section. Kindly post your questions in the
        online viewing section of each video.
      </div>
    </div>
  );
}

export default AddComment;
