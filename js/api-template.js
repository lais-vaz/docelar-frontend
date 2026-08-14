/* Template opcional para quando o backend estiver disponível.
   Exemplo de base para substituir o mock/localStorage. */

const API_URL = "http://localhost:3000/api";

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `HTTP ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}

// Exemplos:
// apiRequest("/produtos");
// apiRequest("/produtos", { method: "POST", body: JSON.stringify(produto) });
// apiRequest(`/produtos/${id}`, { method: "PUT", body: JSON.stringify(produto) });
// apiRequest(`/produtos/${id}`, { method: "DELETE" });
