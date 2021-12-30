/** @format */

import { api, config } from "../api";

export function getItemCategories() {
  return api.get("/item-category/", config);
}

export function getItemUnits() {
  return api.get("/item-unit/", config);
}

export function createItem(data) {
  return api.post("/item/", { ...data }, config);
}

export function getItems() {
  return api.get("/item/", config);
}

export function getSingleItem(id) {
  return api.get(`/item/${id}`, config);
}

export function deleteItems(id) {
  console.log("Item Id", id);
  return api.delete(`/item/${id}`);
}
export function updateItems(data) {
  return api.patch(`/item/${data.id}`, { ...data });
}

export function getItemTransactions(id) {
  return api.get(`/item/${id}`, config);
}
export function addQuantityToExistingItems(data) {
  return api.patch(`item/add-quantity/${data.id}`, { ...data }, config);
}
export function removeQuantityToExistingItems(data) {
  return api.patch(`item/reduce-quantity/${data.id}`, { ...data }, config);
}
