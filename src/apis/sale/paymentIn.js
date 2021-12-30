import { api, config } from "../api";

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}

export function createPaymentIn(data) {
  console.log("data", data);
  return api.post("/payment-in/create", { ...data }, config);
}
export function getAllPaymentIn(data) {
  console.log("data", data);
  return api.get("/payment-in/get-all", config);
}
