import BASE_URL from "../../config/config";


export async function getAdminHomeInfo(token: string | null) {
  const response = await fetch(`${BASE_URL}/infos/p-admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in admin infos GET fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
