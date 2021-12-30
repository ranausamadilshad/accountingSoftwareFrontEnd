/** @format */

import { api, config } from "../api";

export function getAllSaleReports() {
  return api.get("sale-report/get-all", config);
}

export function getSingleSaleReports(data) {
  return api.get(`sale-report/get/${data}`, config);
}
