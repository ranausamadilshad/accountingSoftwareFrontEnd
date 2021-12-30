/** @format */

import React from "react";
import CashFlowScreen from "../../../../ui/reports/cashFlow/view/layout";
import * as api from "../../../../../apis/reports/cashFlow";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const CashFlow = () => {
  const getAllCashFlow = useApi(api.getAllCashFlow);
  useEffect(() => {
    async function fetchData() {
      try {
        await getAllCashFlow.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Cash Flow Report ", getAllCashFlow.data);
  return (
    <>
      {/* {getAllCashFlow.data &&  */}
      <CashFlowScreen data={getAllCashFlow.data} />
      {/* } */}
    </>
  );
};

export default CashFlow;
