import { api, config } from "../api";

export function getAllIParties(data) {
  console.log("data", data);
  return api.get("/party/get-all", config);
}

export function createPaymentOut(data) {
  console.log("data", data);
  return api.post("/payment-out/create", { ...data }, config);
}
export function getAllPaymentOut(data) {
  console.log("data", data);
  return api.get("/payment-out/get-all", config);
}
