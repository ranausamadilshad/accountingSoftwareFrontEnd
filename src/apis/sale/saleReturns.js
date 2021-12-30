/** @format */

import { api, config } from "../api";

export function getAllSaleReturn() {
  return api.get("sale-return/get-all ", config);
}

export function getAllItems() {
  return api.get("item/get-all", config);
}

export function createSaleReturn(data) {
  console.log("data", data);
  return api.post("sale-return/create", { ...data }, config);
}

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}
export function getSingleItem(data) {
  // console.log("data", data);
  return api.get(`/item/get/${data.id}`, config);
}
