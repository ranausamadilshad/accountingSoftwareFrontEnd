/** @format */

import { api, config } from "../api";

export function getAllPartyWiseReport() {
  return api.get("party-wise-profit-loss-report/get-all", config);
}
