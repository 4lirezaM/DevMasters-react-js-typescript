import { useMutation, useQueryClient } from "react-query";

import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import {
  CommentItemTableType,
  acceptComment,
  rejectComment,
  removeComment,
} from "../../../services/adminPanel/adminCommentsAPI";

type CommentItemProps = { item: CommentItemTableType; index: number };
function CommentItem({ item, index }: CommentItemProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();
  // const [replyText, setReplyText] = useState("");

  // handle remove comment feature
  const deleteMutation = useMutation(() => removeComment(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "Comment Deleted!",
        text: "The Comment has been successfully removed from the database.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getAllComments"] });
    },
    onError: (error) => {
      console.error("Failed to DELETE Comment:", error);
    },
  });

  function handleRemove() {
    Swal.fire({
      title: "Remove Comment",
      text: "Are you sure you want to delete this Comment from the database?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate();
      }
    });
  }
  // handel replay feature

  // replay qoury
  // const replyMutation = useMutation(
  //   (message: { body: string }) =>
  //     postNewAnswerComment(userToken, item._id, message),
  //   {
  //     onSuccess: () => {
  //       Swal.fire({
  //         title: "Reply Sent!",
  //         text: "Your reply has been successfully sent.",
  //         icon: "success",
  //         showConfirmButton: false,
  //         timer: 4000,
  //       });

  //       queryClient.invalidateQueries({ queryKey: ["getAllComments"] });
  //     },
  //     onError: (error) => {
  //       console.error("Failed to Post Comment reply:", error);
  //     },
  //   },
  // );

  function replyHandler() {
    Swal.fire({
      title: "Enter your reply text",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Post",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        // if (result.value !== "") replyMutation.mutate({ body: result.value });
        // ++++++Problem in backend+++++++
        return;
      }
    });
  }

  // handle show context feture
  function handleShowContext() {
    const stars = "⭐".repeat(item.score);
    Swal.fire({
      title: "Comment",
      showConfirmButton: false,
      html: `
        <div>
          <p style="text-align: left">
            <b style="font-weight: 700">Comment</b>: ${item.body}
          </p>
          <hr style="margin: 10px 0;">
          <div style="display: flex; padding: 5px 0px; justify-content: space-between; align-items: baseline;">
            <div><b style="font-weight: 700">CreatedAt:</b> ${item.createdAt.slice(0, 10)}</div>
            <div>${stars}</div>
          </div>
        </div>
      `,
    });
  }

  // handel show answer feature
  function handleAnswer() {
    Swal.fire({
      title: "Comment Answer",
      showConfirmButton: false,
      html: `
        <div>
          <p style="text-align: left">
            <b style="font-weight: 700">Answer</b>: ${item.answerContent?.body}
          </p>
          <hr style="margin: 10px 0;">
          <div style="display: flex; padding: 5px 0px; justify-content: space-between; align-items: baseline;">
            <div><b style="font-weight: 700">CreatedAt:</b> ${item.answerContent?.createdAt.slice(0, 10)}</div>
            <div>${item.answerContent?.creator.name}</div>
          </div>
        </div>
      `,
    });
  }

  // handle accept commment feture

  const acceptMutation = useMutation(() => acceptComment(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "Comment Accepted!",
        text: "The Comment has been successfully Accepted.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getAllComments"] });
    },
    onError: (error) => {
      console.error("Failed to ACCEPT Comment:", error);
    },
  });

  function handleAcccept() {
    Swal.fire({
      title: "Acccept Comment",
      text: "Are you sure you want to Acccept this Comment ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Acccept it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        acceptMutation.mutate();
      }
    });
  }

  // handle reject commment feture

  const rejectMutation = useMutation(() => rejectComment(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "Comment Rejected!",
        text: "The Comment has been successfully rejected.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getAllComments"] });
    },
    onError: (error) => {
      console.error("Failed to REJECT Comment:", error);
    },
  });

  function handleReject() {
    Swal.fire({
      title: "Reject Comment",
      text: "Are you sure you want to Reject this Comment ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Reject it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        rejectMutation.mutate();
      }
    });
  }

  return (
    <tr className={`${index % 2 !== 0 ? "dark:!bg-slate-900" : " "}`}>
      <th>{++index}</th>
      <td>{item.course}</td>
      <td>{item.creator.name}</td>
      <td>
        <button
          onClick={handleShowContext}
          className="inline-block w-11 rounded-sm bg-blue-500 py-[1px] text-[10px] text-white hover:bg-blue-700"
        >
          CONTEXT
        </button>
      </td>
      <td>
        {item.answerContent ? (
          <button
            onClick={handleAnswer}
            className="inline-block w-11 rounded-sm bg-blue-500 py-[1px] text-[10px] text-white hover:bg-blue-700"
          >
            ANSWER
          </button>
        ) : (
          "NoAnswer"
        )}
      </td>
      <td>
        <div
          className="tooltip before:dark:bg-slate-50 before:dark:text-black"
          data-tip="Click to replay."
        >
          <button
            onClick={replyHandler}
            className="inline-block w-11 rounded-sm bg-green-500 text-white hover:bg-green-700"
          >
            REPLY
          </button>
        </div>
      </td>
      <td>
        <div
          className="tooltip before:dark:bg-slate-50 before:dark:text-black"
          data-tip="This feature is coming soon. 🚀"
        >
          <button
            onClick={handleAcccept}
            className="inline-block w-11 rounded-sm bg-green-500 text-[12px] text-white hover:bg-green-700"
          >
            ACCEPT
          </button>
        </div>
      </td>
      <td>
        <div
          className="tooltip before:dark:bg-slate-50 before:dark:text-black"
          data-tip="This feature is coming soon. 🚀"
        >
          <button
            onClick={handleReject}
            className="inline-block w-11 rounded-sm bg-red-500 text-[12px] text-white hover:bg-red-700"
          >
            REJECT
          </button>
        </div>
      </td>
      <td>
        <button
          onClick={handleRemove}
          className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:bg-red-700"
        >
          DELET
        </button>
      </td>
      <td>
        {item.answer === 0 ? (
          <span className="text-red-600">Rejected</span>
        ) : (
          <span className="text-green-600">Accepted</span>
        )}
      </td>
    </tr>
  );
}

export default CommentItem;
