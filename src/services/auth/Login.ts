const BASE_URL = "http://localhost:4000/v1";

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

export type UserInfo = {
  courses: [];
  createdAt: string;
  email: string;
  name: string;
  notifications: [];
  phone: string;
  role: "ADMIN" | "USER";
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
};

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
