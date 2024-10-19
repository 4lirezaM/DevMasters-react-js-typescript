import BASE_URL from "../../config/config";
import { Session } from "../../types/global";

export async function fetchCoursePlayer(
  coursename?: string,
  sessionid?: string,
  token?: string | null,
): Promise<{ session: Session; sessions: Session[] }> {
  const res = await fetch(`${BASE_URL}/courses/${coursename}/${sessionid}`, {
    headers: {
      Authorization: `Bearer ${token ? token : null}`,
    },
  });
  if (!res.ok) throw new Error("there is an Error with fetching session video");
  const data = await res.json();
  return data;
}
