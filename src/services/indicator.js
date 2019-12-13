import { API_SAVE_INDICATOR, TOKEN } from '../utils/constants';

export default function fetchPostIndicator(nameProject, nameComponent, newIndicator) {
  return fetch(`${API_SAVE_INDICATOR}?primaryCategory=${nameProject}&secondaryCategory=${nameComponent}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem(TOKEN),
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newIndicator)
  })
  .then(result => result);
}
