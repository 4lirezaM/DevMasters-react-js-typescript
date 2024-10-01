import { useState } from "react";
import ExpandableDiv from "../../ui/ExpandableDiv";
import AddComment from "./Components/AddComment";
import useAppContext from "../../Hooks/useAppContext";
import Swal from "sweetalert2";
import CommentDisplay from "./Components/CommentDisplay";
import { Comment } from "../../types/global";

function Commments({
  courseName,
  commentsData,
}: {
  courseName: string;
  commentsData: Comment[];
}) {
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);
  const { userInfo, userToken } = useAppContext();
  function addCommentOpenHandler() {
    if (userInfo) {
      setIsAddCommentOpen((isAddCommentOpen) => !isAddCommentOpen);
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Required!",
        text: "To add a comment, please log in first.",
        showConfirmButton: false,
        timer: 4000,
      });
    }
  }
  return (
    <ExpandableDiv disable={!commentsData.length ? true : false}>
      <div className="bg-slate-50 p-1 sm:p-4 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-yellow-400 dark:bg-yellow-500"></span>
            Comments
          </h2>
          <button
            className="w-[140px] rounded-sm bg-green-500 px-2 py-[6px] text-[17px] text-white hover:bg-green-600"
            onClick={addCommentOpenHandler}
          >
            {isAddCommentOpen ? "Cancel Comment" : "Add Comment"}
          </button>
        </div>
        <AddComment
          courseName={courseName}
          setIsAddCommentOpen={setIsAddCommentOpen}
          userInfo={userInfo}
          userToken={userToken}
          isAddCommentOpen={isAddCommentOpen}
        />
        <CommentDisplay commentsData={commentsData} />
      </div>
    </ExpandableDiv>
  );
}

export default Commments;
