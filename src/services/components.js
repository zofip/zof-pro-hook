import { TOKEN, API_COMPONENTS, API_COMPONENT_BY_ID } from "../utils/constants";

export function fetchComponentsByProject(project) {
  return fetch(`${API_COMPONENTS}?projectId=${project.value}`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(TOKEN),
      "Content-Type": "application/json"
    }
  })
    .then(result => result.json());
}

export function fetchComponentsById(id) {
  return fetch(`${API_COMPONENT_BY_ID}&componentId=${id}`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(TOKEN),
      "Content-Type": "application/json"
    }
  })
    .then(result => result.json());
}