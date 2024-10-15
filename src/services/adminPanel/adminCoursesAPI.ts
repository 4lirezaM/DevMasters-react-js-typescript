const BASE_URL = "http://localhost:4000/v1";

export type CourseItemTableType = {
  categoryID: string;
  courseAverageScore: number;
  cover: string;
  createdAt: string;
  creator: string;
  description: string;
  isComplete: 0 | 1;
  name: string;
  price: number;
  registers: number;
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export async function fetchCourses(
  token: string | null,
): Promise<CourseItemTableType[]> {
  const response = await fetch(`${BASE_URL}/courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in courses GET fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function postNewCourse(
  token: string | null,
  course: FormData,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: course,
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `Error in courses POST fetch (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function removeCourse(
  token: string | null,
  courseID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/courses/${courseID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in DELETE course fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
