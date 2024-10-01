function CourseMembershipStatus({
  isUserRegisteredToThisCourse,
}: {
  isUserRegisteredToThisCourse: boolean;
}) {
  return (
    <div className="my-1 flex flex-col items-center justify-center bg-slate-50 p-2 dark:bg-slate-900">
      <h3 className="text-xl font-semibold">Course Membership Status</h3>
      <div className="m-2 flex w-full items-center justify-center gap-2 rounded-md border-2 border-solid border-green-500 bg-green-50 p-2 font-semibold hover:cursor-pointer hover:bg-green-500 dark:bg-green-500/40">
        {isUserRegisteredToThisCourse ? "You Are a Member" : "Join the Course"}
        {isUserRegisteredToThisCourse ? (
          <i className="fa fa-check text-[20px]"></i>
        ) : (
          <i className="fa fa-sign-in-alt text-[20px]"></i>
        )}
      </div>
    </div>
  );
}

export default CourseMembershipStatus;
