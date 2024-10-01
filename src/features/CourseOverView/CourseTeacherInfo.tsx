// CourseTeacherInfo: This feature provides information about the teacher.
function CourseTeacherInfo() {
  return (
    <div className="my-1 flex flex-col items-center justify-center bg-slate-50 p-2 dark:bg-slate-900">
      <a target="_blank" href="https://github.com/4lirezaM">
        <img
          src="/images/teachers/IMG_20230916_011611 (1).jpg"
          alt="teacher"
          className="w-44 overflow-hidden rounded-full"
        />
      </a>
      <a target="_blank" href="https://github.com/4lirezaM">
        <h2 className="p-2 text-xl font-semibold hover:text-sky-500">
          4lirezaM
        </h2>
      </a>
      <h3 className="text-xl font-semibold">Course Teacher</h3>
    </div>
  );
}

export default CourseTeacherInfo;
