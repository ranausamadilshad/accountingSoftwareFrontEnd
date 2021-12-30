/** @format */

import { api, config } from "../api";

export function createCompany(data) {
  console.log("data", data);
  return api.post("/company/register", { ...data }, config);
}

export function updateCompany(data) {
  console.log("data", data);
  return api.patch("/company/update/0", { ...data }, config);
}

export function getCompanyDetail(data) {
  console.log("getdetail", data);
  return api.get(`/company/get/${data.id}`, config);
}
export function login(data) {
  console.log("data", data);
  return api.post("/company/login", { ...data }, config);
}
