import BASE_URL from "../../config/config";

export async function fetchNotification(id: string, token: string | null) {
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
