import { SetState } from "../../../types/global";
import TextInput from "../../../ui/admin/TextInput";
import LableInput from "../../../ui/admin/LableInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { minValidator, requiredValidator } from "../../../validators/rules";
import { useMutation, useQueryClient } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import {
  NewCategoryType,
  postNewCategory,
} from "../../../services/adminPanel/adminCategoriesAPI";

type AddCategoryProps = {
  isAddCategoryOpen: boolean;
  setIsAddCategoryOpen: SetState<boolean>;
};

function AddCategory({
  setIsAddCategoryOpen,
  isAddCategoryOpen,
}: AddCategoryProps) {
  const { userToken } = useAppContext();
  const queryClient = useQueryClient();
  function cancelHandler() {
    setIsAddCategoryOpen((isAddCategoryOpen) => !isAddCategoryOpen);
  }
  // form handling

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset: resetAddCategoryForm,
  } = useForm<NewCategoryType>();

  const addMutation = useMutation(
    (newCategory: NewCategoryType) => postNewCategory(userToken, newCategory),
    {
      onSuccess: () => {
        resetAddCategoryForm();
        Swal.fire({
          title: "Category Created!",
          text: "Your Category has been successfully added to the database.",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });
        queryClient.invalidateQueries({
          queryKey: ["getAdminCategories"],
        });
      },
      onError: (error) => {
        console.error("Failed to post New Category:", error);
      },
    },
  );

  const onSubmit: SubmitHandler<NewCategoryType> = (data) => {
    addMutation.mutate(data);
  };

  if (isAddCategoryOpen)
    return (
      <div
        className={`${isAddCategoryOpen ? "h-auto" : "h-0"} bg-slate-200 dark:bg-slate-900`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Category Title" />
              <TextInput<NewCategoryType>
                error={errors?.title}
                name="title"
                register={register}
                validations={{
                  minLength: minValidator(4),
                  required: requiredValidator(),
                }}
                placeholder="Enter your Category title"
              />
            </div>
            <div className="w-full">
              <LableInput text="Category Shortname" />
              <TextInput<NewCategoryType>
                error={errors?.name}
                name="name"
                register={register}
                validations={{
                  required: requiredValidator(),
                }}
                placeholder="Enter your category Shortname"
              />
            </div>
          </div>

          {/* post and cancel button */}
          <div className="flex items-center justify-end">
            <button
              className="mx1 w-[140px] rounded-sm border-1 border-green-500 bg-green-500 px-2 py-[6px] text-[17px] text-white hover:border-green-600 hover:bg-green-600"
              type="submit"
            >
              {addMutation.isLoading ? (
                <div className="flex items-center justify-center gap-1">
                  <span>Posting</span>
                  <span className="loading loading-dots loading-xs h-[16px]"></span>
                </div>
              ) : (
                "Post"
              )}
            </button>
            <button
              onClick={cancelHandler}
              className="m-1 w-[140px] rounded-sm border-1 border-red-600 px-2 py-[6px] text-[17px] text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  return (
    <div>
      <div className="my-3 rounded bg-green-100 px-1 py-2 text-lg text-green-800">
        Dear Admins, as we introduce new category items, please ensure that all
        details are thoroughly reviewed before submission. Any incomplete or
        inaccurate information may delay the approval process. Thank you for
        your cooperation and diligence!
      </div>
    </div>
  );
}

export default AddCategory;
