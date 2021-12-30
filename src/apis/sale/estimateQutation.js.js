/** @format */

import { api, config } from "../api";

export function createEstimate(data) {
  console.log("data", data);
  return api.post("/estimate-quotation/create", { ...data }, config);
}
export function getAllEstimate(data) {
  console.log("data", data);
  return api.get("/estimate-quotation/get-all", config);
}

export function getAllItems(data) {
  console.log("data", data);
  return api.get("/item/get-all", config);
}

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}
export function getSingleItem(data) {
  // console.log("data", data);
  return api.get(`/item/get/${data.id}`, config);
}
