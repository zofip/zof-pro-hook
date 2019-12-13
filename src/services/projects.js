import { API_PROJECTS, TOKEN } from "../utils/constants";

export default function fetchProjectsByClient(client) {
  return fetch(`${API_PROJECTS}?clientId=${client.value}`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(TOKEN),
      "Content-Type": "application/json"
    }
  })
  .then(result => result.json());
}