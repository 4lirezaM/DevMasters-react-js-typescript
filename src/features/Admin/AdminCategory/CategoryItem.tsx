import { useMutation, useQueryClient } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import {
  CategoryItemType,
  removeCategory,
} from "../../../services/adminPanel/adminCategoriesAPI";

type CategoryItemProps = { item: CategoryItemType; index: number };

function CategoryItem({ item, index }: CategoryItemProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    () => removeCategory(userToken, item._id),
    {
      onSuccess: () => {
        Swal.fire({
          title: "Category Deleted!",
          text: "The Category has been successfully removed from the database.",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });

        queryClient.invalidateQueries({ queryKey: ["getAdminCategories"] });
      },
      onError: (error) => {
        console.error("Failed to DELETE Category:", error);
      },
    },
  );

  function handleRemove() {
    Swal.fire({
      title: "Remove Category",
      text: "Are you sure you want to delete this Category from the database?",
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

export default CategoryItem;
