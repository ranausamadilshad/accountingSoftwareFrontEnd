/** @format */

import React from "react";
import PurchaseBillsScreen from "../../../../ui/purchase/purchaseBills/view/layout";
import * as api from "../../../../../apis/purchase/purchaseBills";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const PurchaseBills = () => {
  const { request, data } = useApi(api.getAllPurchaseInvoices);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Purchase Bills Transaction", data);
  return (
    <>
      {/* {data && */}
      <PurchaseBillsScreen data={data} />
      {/* } */}
    </>
  );
};

export default PurchaseBills;
