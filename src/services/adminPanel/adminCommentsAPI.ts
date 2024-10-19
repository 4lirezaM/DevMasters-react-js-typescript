import BASE_URL from "../../config/config";


export type CommentItemTableType = {
  _id: string;
  body: string;
  course: string;
  creator: {
    _id: string;
    username: string;
    email: string;
    name: string;
    role: "ADMIN" | "USER";
    createdAt: string;
    updatedAt: string;
    __v: number;
    profile: string;
    phone: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  answer: number;
  isAnswer: number;
  score: number;
  answerContent?: {
    _id: string;
    body: string;
    course: {
      _id: string;
      name: string;
      description: string;
      cover: string;
      shortName: string;
      categoryID: string;
      creator: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
      isComplete: number;
      support: string;
      price: number;
      status: string;
    };
    creator: {
      _id: string;
      username: string;
      email: string;
      name: string;
      role: "ADMIN" | "USER";
      createdAt: string;
      updatedAt: string;
      __v: number;
      profile: string;
      phone: string;
    };
    answer: number;
    isAnswer: number;
    mainCommendID: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    score: number;
  };
};

export async function getAllComments(): Promise<CommentItemTableType[]> {
  const response = await fetch(`${BASE_URL}/comments`);
  if (!response.ok) {
    const error = new Error(
      `there is an error in Comments GET fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function postNewAnswerComment(
  token: string | null,
  commentId: string,
  answer: { body: string },
): Promise<unknown> {
  console.log(answer);
  const response = await fetch(`${BASE_URL}/comments/answer/${commentId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(answer),
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `Error in Comments POST fetch (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function removeComment(
  token: string | null,
  commentID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/comments/${commentID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in DELETE Comment fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function acceptComment(
  token: string | null,
  commentID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/comments/accept/${commentID}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in PUT Comment Accept fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function rejectComment(
  token: string | null,
  commentID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/comments/reject/${commentID}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in PUT Comment reject fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
