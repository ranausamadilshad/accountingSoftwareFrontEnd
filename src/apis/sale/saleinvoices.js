/** @format */

import { api, config } from "../api";

export function getAllItems() {
  return api.get("item/get-all", config);
}

export function getAllSaleInvoices() {
  return api.get("sale-invoice/get-all", config);
}

export function createInvoices(data) {
  console.log("data", data);
  return api.post("/sale-invoice/create", { ...data }, config);
}

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}

// export function getAllParties(data) {
//   console.log("data", data);
//   return api.get("/party/get-all", config);
// }

export function getSingleItem(data) {
  // console.log("data", data);
  return api.get(`/item/get/${data.id}`, config);
}
