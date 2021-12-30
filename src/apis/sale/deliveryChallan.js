/** @format */

import { api, config } from "../api";

// export function getAllSaleOrder() {
//   return api.get("sale-order/get-all", config);
// }

export function getAllItems() {
  return api.get("item/get-all", config);
}

export function createDeliveryChallan(data) {
  console.log("data", data);
  return api.post("delivery-challan/create", { ...data }, config);
}

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}
export function getSingleItem(data) {
  // console.log("data", data);
  return api.get(`/item/get/${data.id}`, config);
}
