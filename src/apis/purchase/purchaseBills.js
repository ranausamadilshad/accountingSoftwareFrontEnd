/** @format */

import { api, config } from "../api";

export function getAllPurchaseInvoices() {
  return api.get("purchase-invoice/get-all ", config);
}

export function getAllItems() {
  return api.get("item/get-all", config);
}

export function createPurchaseBills(data) {
  console.log("data", data);
  return api.post("purchase-invoice/create", { ...data }, config);
}

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}
export function getSingleItem(data) {
  // console.log("data", data);
  return api.get(`/item/get/${data.id}`, config);
}
