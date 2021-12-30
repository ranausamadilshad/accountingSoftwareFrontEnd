/** @format */

import { api, config } from "../api";

export function getAllDayBook() {
  return api.get("daybook-report/get-all", config);
}
