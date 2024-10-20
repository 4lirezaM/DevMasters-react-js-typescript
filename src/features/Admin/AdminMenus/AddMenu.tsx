import { SetState } from "../../../types/global";
import TextInput from "../../../ui/admin/TextInput";
import LableInput from "../../../ui/admin/LableInput";
import SelectBox from "../../../ui/admin/SelectBox";
import { SubmitHandler, useForm } from "react-hook-form";
import { minValidator, requiredValidator } from "../../../validators/rules";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useAppContext from "../../../Hooks/useAppContext";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  MenuItemTableType,
  NewMenuType,
  getAllMenus,
  postNewMenu,
} from "../../../services/adminPanel/adminMenusAPI";

type AddMenuProps = {
  isAddMenuOpen: boolean;
  setIsAddMenuOpen: SetState<boolean>;
};

function AddMenu({ setIsAddMenuOpen, isAddMenuOpen }: AddMenuProps) {
  const [mainMenuSelectBoxItems, setMainMenuSelectBoxItems] = useState<
    { id: string; title: string }[]
  >([]);

  const { userToken } = useAppContext();
  const queryClient = useQueryClient();
  function cancelHandler() {
    setIsAddMenuOpen((isAddMenuOpen) => !isAddMenuOpen);
  }
  // get SelectBox Courses items in initial render
  useQuery<MenuItemTableType[]>({
    queryKey: ["getMainMenusForSelctBox"],
    queryFn: () => getAllMenus(),
    onSuccess: (data) => {
      const mainMenus = data
        .filter((item) => item.parent === undefined)
        .map((item) => ({ title: item.title, id: item._id }));
      setMainMenuSelectBoxItems(mainMenus);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  // form handling

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset: resetAddMenuForm,
  } = useForm<NewMenuType>();

  const addMutation = useMutation(
    (newMenu: NewMenuType) => postNewMenu(userToken, newMenu),
    {
      onSuccess: () => {
        resetAddMenuForm();
        queryClient.refetchQueries({ queryKey: ["getAdminMenus"] });
        queryClient.refetchQueries({ queryKey: ["getMainMenusForSelctBox"] });
        Swal.fire({
          title: "Menu Created!",
          text: "Your Menu has been successfully added to the database.",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });
      },
      onError: (error) => {
        console.error("Failed to post New Menu:", error);
      },
    },
  );

  const onSubmit: SubmitHandler<NewMenuType> = (data) => {
    addMutation.mutate(data);
  };

  if (isAddMenuOpen)
    return (
      <div
        className={`${isAddMenuOpen ? "h-auto" : "h-0"} bg-slate-200 dark:bg-slate-900`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Menu Title" />
              <TextInput<NewMenuType>
                error={errors?.title}
                name="title"
                register={register}
                validations={{
                  minLength: minValidator(4),
                  required: requiredValidator(),
                }}
                placeholder="Enter your Menu title"
              />
            </div>
            <div className="w-full">
              <LableInput text="Menu Href" />
              <TextInput<NewMenuType>
                error={errors?.href}
                name="href"
                register={register}
                validations={{
                  required: requiredValidator(),
                }}
                placeholder="Enter your Session time"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
            <div className="w-full">
              <LableInput text="Parent Menu" />
              <SelectBox
                error={errors?.parent}
                name="parent"
                register={register}
                required={true}
                items={mainMenuSelectBoxItems}
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
        Dear Admins, as we introduce new menu items, please ensure that all
        details are meticulously reviewed before submission. Any incomplete or
        incorrect information may result in delays in the approval process.
        Thank you for your careful attention to this matter!
      </div>
    </div>
  );
}

export default AddMenu;
