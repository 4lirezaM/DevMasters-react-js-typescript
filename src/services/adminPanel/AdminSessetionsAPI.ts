const BASE_URL = "http://localhost:4000/v1";

export type SessionItemTableType = {
  course: { name: string; _id: string };
  video?: string;
  createdAt: string;
  free: number;
  time: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export async function getAdminSessions(): Promise<SessionItemTableType[]> {
  const response = await fetch(`${BASE_URL}/Courses/sessions`);
  if (!response.ok) {
    const error = new Error(
      `there is an error in Sessions GET fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function postNewSession(
  token: string | null,
  session: FormData,
  courseId: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/courses/${courseId}/sessions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: session,
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `Error in new Session POST fetch (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function removeSession(
  token: string | null,
  sessionID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/courses/sessions/${sessionID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in DELETE Sesstion fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
