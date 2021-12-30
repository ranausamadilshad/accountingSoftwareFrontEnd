/** @format */

import { api, config } from "../api";

export function getAllCashFlow() {
  return api.get("cashflow-report/get-all", config);
}
