/** @format */

import { api, config } from "../api";

export function createParties(data) {
  return api.post("/party/", { ...data }, config);
}

export function getAllParties() {
  return api.get("/party/", config);
}

export function getSingleParty(data) {
  console.log("id", data);
  return api.get(`/party/${data}`);
}

// export function getSinglePartyTransaction(data) {
//   return api.get(`/party/${data}`, config);
// }

export function updateParties(data) {
  return api.patch(`/party/${data.id}`, { ...data }, config);
}

export function deleteParties(data) {
  return api.delete(`/party/${data}`, config);
}
