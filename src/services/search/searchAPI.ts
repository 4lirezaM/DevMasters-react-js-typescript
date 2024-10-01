import { CourseCart } from "../../types/global";

const BASE_URL = "http://localhost:4000/v1";

export async function fetchsearchResult(value: string): Promise<CourseCart[]> {
  const response = await fetch(`${BASE_URL}/search/${value}`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in Latest Courses fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  const result = await data.allResultCourses;
  return result as CourseCart[];
}
