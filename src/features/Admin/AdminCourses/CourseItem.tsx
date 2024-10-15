import { useMutation, useQueryClient } from "react-query";
import {
  CourseItemTableType,
  removeCourse,
} from "../../../services/adminPanel/adminCoursesAPI";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";

type CourseItemProps = { item: CourseItemTableType; index: number };
function CourseItem({ item, index }: CourseItemProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(() => removeCourse(userToken, item._id), {
    onSuccess: () => {
      Swal.fire({
        title: "Course Deleted!",
        text: "The course has been successfully removed from the database.",
        icon: "success",
        showConfirmButton: false,
        timer: 4000,
      });

      queryClient.invalidateQueries({ queryKey: ["getCourses"] });
    },
    onError: (error) => {
      console.error("Failed to DELETE course:", error);
    },
  });

  function handleRemove() {
    Swal.fire({
      title: "Remove Course",
      text: "Are you sure you want to delete this course from the database?",
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
      <td>{item.name}</td>
      <td>{item.price === 0 ? "free" : item.price}</td>
      <td>{item.status}</td>
      <td>{item.shortName}</td>
      <td>{item.creator}</td>
      <td>{item.categoryID}</td>
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
          onClick={handleRemove}
          className="inline-block w-11 rounded-sm bg-red-500 py-[1px] text-white hover:bg-red-700"
        >
          DELET
        </button>
      </td>
    </tr>
  );
}

export default CourseItem;
