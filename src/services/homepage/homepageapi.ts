import { CourseCart } from "../../types/global";

const BASE_URL = "http://localhost:4000/v1";

export async function fetchLastestCourses(): Promise<CourseCart[]> {
  const response = await fetch(`${BASE_URL}/courses`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in Latest Courses fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data as CourseCart[];
}

export async function fetchPopularCourses(): Promise<CourseCart[]> {
  const response = await fetch(`${BASE_URL}/courses/popular`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in Latest Courses fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data as CourseCart[];
}

export async function fetchUpcomingCourses(): Promise<CourseCart[]> {
  const response = await fetch(`${BASE_URL}/courses/presell`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in Latest Courses fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data as CourseCart[];
}
