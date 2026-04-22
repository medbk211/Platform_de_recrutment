const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000/api";

export async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {})
    },
    ...options
  });

  if (!response.ok) {
    const errorPayload = await response
      .json()
      .catch(() => ({ message: "Une erreur est survenue." }));

    throw new Error(errorPayload.message ?? "Request failed.");
  }

  return response.json();
}

export { API_BASE_URL };
