/** @format */

import { api, config } from "../api";

export function createEmployee(data) {
  return api.post("/employee/", { ...data });
}

export function getAllEmplyees() {
  return api.get("/employee/");
}

export function deleteEmployee(id) {
  return api.delete(`/employee/${id}`);
}
export function getSingleEmployee(id) {
  console.log("shdhag", id);
  return api.get(`/employee/${id}`);
}

export function updateEmployee(data) {
  return api.patch(`/employee/${data.id}`, { ...data });
}
// export function getItemTransactions(id) {
//   return api.get(`item/transactions/${id}`, config);
// }
// export function deleteItems(id) {
//   return api.delete(`item/delete/${id}`, config);
// }

// export function addQuantityToExistingItems(data) {
//   return api.patch(`item/add-quantity/${data.id}`, { ...data }, config);
// }
// export function removeQuantityToExistingItems(data) {
//   return api.patch(`item/reduce-quantity/${data.id}`, { ...data }, config);
// }
