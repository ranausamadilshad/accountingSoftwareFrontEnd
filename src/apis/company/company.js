/** @format */

import { api, config } from "../api";

export function getAllBusinessType() {
  return api.get("/bus-type/");
}

export function getAllBusinessCategory() {
  return api.get("/bus-categories/");
}

export function getCompany() {
  return api.get(`/company/single`);
}
