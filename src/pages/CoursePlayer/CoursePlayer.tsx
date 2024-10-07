import { useParams } from "react-router";
import Breadcrumbs from "../../ui/Breadcrumbs";
import { useEffect, useState } from "react";
import { fetchCoursePlayer } from "../../services/coursePlayer/courseplayerAPI";
import useAppContext from "../../Hooks/useAppContext";
import { Session } from "../../types/global";
import NotFound from "../NotFound/NotFound";
import Loading from "../../features/Loading/Loading";
import { Link } from "react-router-dom";

function CoursePlayer() {
  const { coursename, categoryname, sessionid } = useParams();
  const { userToken } = useAppContext();
  const [session, setSession] = useState<Session | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!coursename || !categoryname || !sessionid) {
      setError("Invalid URL parameters");
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await fetchCoursePlayer(coursename, sessionid, userToken);
        setSession(data.session);
        setSessions(data.sessions);
      } catch (err) {
        throw new Error("There was an error fetching the session video.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [userToken, sessionid, coursename, categoryname]);
  if (error || !coursename || !categoryname || !sessionid) {
    return <NotFound />;
  }
  if (isLoading) return <Loading />;
  return (
    <div className="container py-4">
      <Breadcrumbs
        current={"current"}
        pathArray={[
          { id: 1, title: categoryname, to: `/category-info/${categoryname}` },
          { id: 2, title: coursename, to: `/courseoverview/${coursename}` },
        ]}
      />
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="m-1 lg:basis-1/2">
          <div className="bg-slate-50 p-1 sm:px-4 dark:bg-slate-900">
            <h1 className="p-4 py-2 text-2xl font-semibold">
              <span className="inline-block h-4 w-4 rounded-sm bg-lime-400 dark:bg-lime-500"></span>{" "}
              {session?.title}
            </h1>
            <video
              src={`http://localhost:4000/courses/covers/${session?.video}`}
              poster="/images/courses/npm-cover.jpg"
              className="w-full rounded-xl"
              controls
            ></video>
          </div>
        </div>
        <div className="lg:basis-1/2">
          <div className="bg-slate-50 p-1 sm:px-4 dark:bg-slate-900">
            <h2 className="p-4 py-2 text-2xl font-semibold">
              <span className="inline-block h-4 w-4 rounded-sm bg-lime-400 dark:bg-lime-500"></span>{" "}
              Sessions
            </h2>
            <div className="my-2 rounded-md bg-slate-100 px-1 py-2 sm:px-4 dark:bg-slate-800">
              <div>
                {sessions.map((session, index) => (
                  <div
                    key={session._id}
                    className="group my-1 flex items-center justify-between rounded-md bg-slate-200 p-2 sm:my-2 sm:text-xl dark:bg-slate-700"
                  >
                    <div className="flex items-center">
                      <span className="mr-2 inline-flex aspect-square h-6 items-center justify-center rounded-sm bg-slate-600 text-white group-hover:bg-sky-500 sm:h-8">
                        {++index}
                      </span>
                      {session.free > 0 ? (
                        <Link
                          to={`/courseplayer/${categoryname}/${coursename}/${session._id}`}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePlayer;
