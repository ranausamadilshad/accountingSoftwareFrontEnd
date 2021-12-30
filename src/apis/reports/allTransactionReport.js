/** @format */

import { api, config } from "../api";

export function getAllTransaction() {
  return api.get("all-transactions-report/get-all", config);
}
