/** @format */

import React from "react";
import PurchaseReturnScreen from "../../../../ui/purchase/purchaseReturn/view/layout";
import * as api from "../../../../../apis/purchase/purchaseReturn";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const PurchaseReturn = () => {
  const { request, data } = useApi(api.getAllPurchaseReturns);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Sale Return Transaction", data);
  return (
    <>
      {/* {data &&  */}
      <PurchaseReturnScreen data={data} />
      {/* } */}
    </>
  );
};

export default PurchaseReturn;
