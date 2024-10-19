import BASE_URL from "../../config/config";
import { CourseCart } from "../../types/global";

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
