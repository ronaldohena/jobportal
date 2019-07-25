const local = true;
const url = local
  ? "http://localhost:5001"
  : "https://test-backend.islacode.com";

const api = {
  baseUrl: `${url}`,
  headers: {
    "Content-Type": "application/json"
  }
};

export default api;
