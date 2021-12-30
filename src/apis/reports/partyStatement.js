/** @format */

import { api, config } from "../api";

export function getAllPartyStatement() {
  return api.get("party-wise-profit-loss-report/get-all", config);
}

export function getSinglePartyStatement(data) {
  return api.get(`party-wise-profit-loss-report/get/${data}`, config);
}
