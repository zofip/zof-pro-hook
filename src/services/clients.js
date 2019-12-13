import { TOKEN, API_CLIENTS } from '../utils/constants';

export default function fetchClients() {
  return fetch(`${API_CLIENTS}`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(TOKEN),
      "Content-Type": "application/json"
    }
  })
  .then(result => result.json());
}
