import BASE_URL from "../../config/config";
import { ArticleCart, CourseCart } from "../../types/global";

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

export async function fetchLatestArticles(): Promise<ArticleCart[]> {
  const response = await fetch(`${BASE_URL}/articles`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in Latest Courses fetch (status ${response.status})`,
    );
  }
  const data = await response.json();

  return data as ArticleCart[];
}
