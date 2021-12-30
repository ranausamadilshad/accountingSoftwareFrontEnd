import { api, config } from "../api";

export function createDeliveryChallan(data) {
  return api.post("/delivery-challan/create", { ...data }, config);
}

export function getAllDeliveryChallan() {
  return api.get("/delivery-challan/get-all", config);
}

export function getSingleChallan(data) {
  return api.get(`delivery-challan/get/${data}`, config);
}

// export function getSinglePartyTransaction(data) {
//   return api.get(`party/transactions/${data}`, config);
// }

// export function updateParties(data) {
//   return api.patch(`party/update/${data.id}`, { ...data }, config);
// }

// export function deleteParties(data) {
//   return api.delete(`party/delete/${data}`, config);
// }
