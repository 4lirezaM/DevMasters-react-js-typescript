import { CourseCart } from "../../types/global";
const BASE_URL = "http://localhost:4000/v1";

export async function fetchCoursesByCategory(
  categoryname: string,
): Promise<CourseCart[]> {
  const response = await fetch(`${BASE_URL}/courses`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in Latest Courses fetch (status ${response.status})`,
    );
  }
  const data: CourseCart[] = await response.json();
  const newdata = data.filter(
    (item) =>
      item.categoryID.toLocaleLowerCase() === categoryname.toLocaleLowerCase(),
  );
  return newdata as CourseCart[];
}
