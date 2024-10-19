import BASE_URL from "../../config/config";

export type UserItemTableType = {
  createdAt: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  role: "ADMIN" | "USER";
  updatedAt: string;
  __v: number;
  _id: string;
};

export async function getAllUsers(
  token: string | null,
): Promise<UserItemTableType[]> {
  const response = await fetch(`${BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in users GET fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export type NewUser = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export async function postNewUser(newUser: NewUser): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `Error in new User POST fetch (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function removeUser(
  token: string | null,
  userID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/users/${userID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in DELETE User fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function BanUser(
  token: string | null,
  userID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/users/ban/${userID}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in banuser PUT fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function promoteUserToAdmin(
  token: string | null,
  userID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/users/role`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      role: "ADMIN",
      id: userID,
    }),
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in promoteUserToAdmin PUT fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
