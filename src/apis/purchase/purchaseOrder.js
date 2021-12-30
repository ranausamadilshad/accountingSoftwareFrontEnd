/** @format */

import { api, config } from "../api";

export function getAllPurchaseOrder() {
  return api.get("purchase-order/get-all ", config);
}

export function getAllItems() {
  return api.get("item/get-all", config);
}

export function createPurchaseBills(data) {
  console.log("data", data);
  return api.post("purchase-order/create", { ...data }, config);
}

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}
export function getSingleItem(data) {
  // console.log("data", data);
  return api.get(`/item/get/${data.id}`, config);
}
