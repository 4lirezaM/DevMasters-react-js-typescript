const BASE_URL = "http://localhost:4000/v1";

export async function fetchAddComment(
  commentText: string,
  token: string,
  courseName: string,
  rate: number,
) {
  const res = await fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      body: commentText,
      courseShortName: courseName,
      score: rate,
    }),
  });
  if (!res.ok) throw new Error("there is an error in PUSTing new comment");
  const data = await res.json();
  return data;
}
