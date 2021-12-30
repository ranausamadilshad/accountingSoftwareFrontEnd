import { id } from "date-fns/locale";
import { api, config } from "../api";

export function getAllCheques(data) {
  console.log("data", data);
  return api.get("cheque/get-all", config);
}
export function changeStatus(data) {
  console.log("data", data);
  return api.patch(`cheque/change-status/${data.id}`, { ...data }, config);
}

// export function getAllCashTransaction(data) {
//   console.log("data", data);
//   return api.get("/cash-in-hand/get-all-transactions", config);
// }
// export function getAllCashBalance(data) {
//   console.log("data", data);
//   return api.get("/cash-in-hand/get-balance", config);
// }
