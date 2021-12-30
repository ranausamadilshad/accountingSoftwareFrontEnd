/** @format */

import { api, config } from "../api";

export function getAllPartyByItemReports() {
  return api.get("party-by-item-report/get-all", config);
}
