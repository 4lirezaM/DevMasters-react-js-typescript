import BASE_URL from "../../config/config";

export async function fetchNewLetter(email: string) {
  const response = await fetch(`${BASE_URL}/newsletters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    console.log("error");
    throw new Error(
      `Network response was not ok in Newsletters fetch (status ${response.status})`,
    );
  }

  const data = await response.json();
  return data;
}
