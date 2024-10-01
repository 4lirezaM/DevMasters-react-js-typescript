import { Link } from "react-router-dom";
import { Session } from "../../types/global";

type CourseSessionsProps = {
  sessions: Session[];
  courseName: string;
  isUserRegisteredToThisCourse: boolean;
  category: string;
};
function CourseSessions({
  category,
  sessions,
  courseName,
  isUserRegisteredToThisCourse,
}: CourseSessionsProps) {
  return (
    <div className="bg-slate-50 p-1 sm:px-4 dark:bg-slate-900">
      <h2 className="p-4 py-2 text-2xl font-semibold">
        <span className="inline-block h-4 w-4 rounded-sm bg-lime-400 dark:bg-lime-500"></span>{" "}
        Sessions
      </h2>
      <div className="collapse collapse-arrow my-2 rounded-md bg-slate-100 px-1 sm:px-4 dark:bg-slate-800">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold">
          First Session
        </div>
        <div className="collapse">
          {sessions?.length ? (
            sessions.map((session, index) => (
              <div
                key={session._id}
                className="group my-1 flex items-center justify-between rounded-md bg-slate-200 p-2 sm:my-2 sm:text-xl dark:bg-slate-700"
              >
                <div className="flex items-center">
                  <span className="mr-2 inline-flex aspect-square h-6 items-center justify-center rounded-sm bg-slate-600 text-white group-hover:bg-sky-500 sm:h-8">
                    {++index}
                  </span>
                  {session.free > 0 || isUserRegisteredToThisCourse ? (
                    <Link
                      to={`/courseplayer/${category}/${courseName}/${session._id}`}
                      className="group-hover:text-sky-500"
                    >
                      {session.title}
                    </Link>
                  ) : (
                    <span>{session.title}</span>
                  )}
                </div>
                <div className="flex items-center group-hover:text-sky-500">
                  <span className="mr-2">{session.time}</span>
                  {session.free ? (
                    <i className="fa fa-play"></i>
                  ) : (
                    <i className="fa fa-lock"></i>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>
              <div className="m-1 rounded bg-blue-100 px-1 py-2 text-lg text-blue-800 sm:m-3">
                <h4 className="font-semibold">
                  <i className="fa fa-circle-info fa-lg mr-1"></i>No Videos
                  Uploaded Yet
                </h4>
                It looks like there are no videos uploaded at the moment. Stay
                tuned, as we will be adding new content soon!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseSessions;
