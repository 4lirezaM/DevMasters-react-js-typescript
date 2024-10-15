import { useMutation, useQueryClient } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import {
  MenuItemTableType,
  removeMenu,
} from "../../../services/adminPanel/adminMenusAPI";

type MenuItemProps = { item: MenuItemTableType; index: number };

function MenuItem({ item, index }: MenuItemProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(() => removeMenu(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "Menu Deleted!",
        text: "The Menu has been successfully removed from the database.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getAdminMenus"] });
    },
    onError: (error) => {
      console.error("Failed to DELETE Menu:", error);
    },
  });

  function handleRemove() {
    Swal.fire({
      title: "Remove Menu",
      text: "Are you sure you want to delete this Menu from the database?",
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
      <td>{item.href}</td>
      <td>{item.parent ? item.parent.title : "N/A"}</td>

      {item.parent === undefined ? (
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
      ) : (
        <td>
          <button
            onClick={handleRemove}
            className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:bg-red-700"
          >
            DELET
          </button>
        </td>
      )}
    </tr>
  );
}

export default MenuItem;
