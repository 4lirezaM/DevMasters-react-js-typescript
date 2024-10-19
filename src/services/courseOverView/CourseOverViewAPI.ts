import BASE_URL from "../../config/config";
import { CourseCart, CourseData } from "../../types/global";

export async function fetchRelatedCourses(
  shortName: string,
): Promise<CourseCart[]> {
  const response = await fetch(`${BASE_URL}/courses/related/${shortName}`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in top bar fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data as CourseCart[];
}
export async function fetchCourseData(
  shortName: string,
  token: string | null,
): Promise<CourseData> {
  const res = await fetch(`${BASE_URL}/courses/${shortName}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("there is an error with fetching course");
  const data = await res.json();
  return data;
}
