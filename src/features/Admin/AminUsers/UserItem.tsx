import { useMutation, useQueryClient } from "react-query";
import {
  BanUser,
  UserItemTableType,
  promoteUserToAdmin,
  removeUser,
} from "../../../services/adminPanel/AdminUsersAPI";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";

type UserItemProps = { item: UserItemTableType; index: number };
function UserItem({ item, index }: UserItemProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();

  const blockMutation = useMutation(() => BanUser(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "User Blocked!",
        text: "The user has been successfully blocked from the website.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getUsers"] });
    },
    onError: (error) => {
      console.error("Failed to DELETE User:", error);
    },
  });

  const deleteMutation = useMutation(() => removeUser(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "User Deleted!",
        text: "The user has been successfully removed from the database.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getUsers"] });
    },
    onError: (error) => {
      console.error("Failed to DELETE User:", error);
    },
  });
  const promoteMutation = useMutation(
    () => promoteUserToAdmin(userToken, item._id),
    {
      onSuccess: () => {
        Swal.fire({
          title: "User Promoted!",
          text: "The user has been successfully Promoted from USER to ADMIN.",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });

        queryClient.invalidateQueries({ queryKey: ["getUsers"] });
      },
      onError: (error) => {
        console.error("Failed to Promote User:", error);
      },
    },
  );

  function handleRemove() {
    Swal.fire({
      title: "Remove User",
      text: "Are you sure you want to delete this User from the database?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate();
      }
    });
  }
  function handleBlock() {
    Swal.fire({
      title: "Block User",
      text: "Are you sure you want to Block this User?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Yes, Block it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        blockMutation.mutate();
      }
    });
  }

  function promoteHandler() {
    Swal.fire({
      title: "Promote User",
      text: "Are you sure you want to Promote this User to Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Promote it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        promoteMutation.mutate();
      }
    });
  }

  return (
    <tr className={`${index % 2 !== 0 ? "dark:!bg-slate-900" : " "}`}>
      <th>{++index}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        {item.role === "ADMIN" ? (
          item.role
        ) : (
          <div className="hover:cursor-pointer">
            <div
              onClick={promoteHandler}
              className="tooltip before:dark:bg-slate-50 before:dark:text-black"
              data-tip="Click to Promote User to Admin 🛡️"
            >
              USER
            </div>
          </div>
        )}
      </td>
      {item.role === "USER" ? (
        <>
          <td>
            <div
              className="tooltip before:dark:bg-slate-50 before:dark:text-black"
              data-tip="This feature is coming soon. 🚀"
            >
              <button className="inline-block w-11 rounded-sm bg-green-500 text-white hover:bg-green-700">
                EDIT
              </button>
            </div>
          </td>
          <td>
            <button
              onClick={handleBlock}
              className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:bg-red-700"
            >
              BLOCK
            </button>
          </td>
          <td>
            <button
              onClick={handleRemove}
              className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:bg-red-700"
            >
              DELET
            </button>
          </td>
        </>
      ) : (
        <>
          <td>
            <div
              className="tooltip before:dark:bg-slate-50 before:dark:text-black"
              data-tip="This feature is coming soon. 🚀"
            >
              <button className="inline-block w-11 rounded-sm bg-green-500 text-white hover:bg-green-700">
                EDIT
              </button>
            </div>
          </td>
          <td>
            <div
              className="tooltip before:dark:bg-slate-50 before:dark:text-black"
              data-tip="⛔"
            >
              <button className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:cursor-not-allowed hover:bg-red-700">
                BLOCK
              </button>
            </div>
          </td>
          <td>
            <div
              className="tooltip before:dark:bg-slate-50 before:dark:text-black"
              data-tip="⛔"
            >
              <button className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:cursor-not-allowed hover:bg-red-700">
                DELET
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default UserItem;
