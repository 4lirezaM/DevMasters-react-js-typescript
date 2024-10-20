import BASE_URL from "../../config/config";
import { UserInfo } from "../../types/global";


export async function fetchLogIn(
  userName: string,
  password: string,
): Promise<{ accessToken: string }> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: userName,
      password: password,
    }),
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in login fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function fetchMe(userToken: string): Promise<UserInfo> {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (!res.ok) throw new Error("there is an error in fetchMe api.");
  const data = await res.json();
  return data;
}
