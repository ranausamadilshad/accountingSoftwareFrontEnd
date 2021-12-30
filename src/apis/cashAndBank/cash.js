import { api, config } from "../api";

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}

export function getAllCashTransaction(data) {
  console.log("data", data);
  return api.get("/cash-in-hand/get-all-transactions", config);
}
export function getAllCashBalance(data) {
  console.log("data", data);
  return api.get("/cash-in-hand/get-balance", config);
}
