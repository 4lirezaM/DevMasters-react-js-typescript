const BASE_URL = "http://localhost:4000/v1";

export async function fetchNotifssication(id: string, token: string | null) {
  const response = await fetch(`${BASE_URL}/notifications/see/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in notification PUT fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
