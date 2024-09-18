const BASE_URL = "http://localhost:4000/v1";

type ReqObject = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export async function fetchLogUp(reqObject: ReqObject) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqObject),
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in logup fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
