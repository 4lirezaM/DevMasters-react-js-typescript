import { useMutation, useQueryClient } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import {
  SessionItemTableType,
  removeSession,
} from "../../../services/adminPanel/AdminSessetionsAPI";

type SessionItemProps = { item: SessionItemTableType; index: number };

function SessionItem({ item, index }: SessionItemProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(() => removeSession(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "Session Deleted!",
        text: "The session has been successfully removed from the database.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getAdminSessions"] });
    },
    onError: (error) => {
      console.error("Failed to DELETE session:", error);
    },
  });

  function handleRemove() {
    Swal.fire({
      title: "Remove Session",
      text: "Are you sure you want to delete this session from the database?",
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

  return (
    <tr className={`${index % 2 !== 0 ? "dark:!bg-slate-900" : " "}`}>
      <th>{++index}</th>
      <td>{item.title}</td>
      <td>{item.time}</td>
      <td>{item.course.name}</td>

      <td>
        <button
          onClick={handleRemove}
          className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:bg-red-700"
        >
          DELET
        </button>
      </td>
    </tr>
  );
}

export default SessionItem;
