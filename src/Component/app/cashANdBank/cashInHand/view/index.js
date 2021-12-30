import React, { useEffect } from "react";
import CashInHandsScreen from "../../../../ui/cashAndBank/cashInHand/view/layout";
import useApi from "../../../../../hooks/useApi";
import * as api from "../../../../../apis/cashAndBank/cash";

const CashInHands = () => {
  const getAllCashTransaction = useApi(api.getAllCashTransaction);
  const getAllCashBalance = useApi(api.getAllCashBalance);
  useEffect(() => {
    async function fetchData() {
      try {
        await getAllCashTransaction.request();
        await getAllCashBalance.request();
      } catch (error) {}
    }
    fetchData();
  }, []);
  return (
    <>
      <CashInHandsScreen
        details={getAllCashTransaction.data && getAllCashTransaction.data}
        total={getAllCashBalance.data && getAllCashBalance.data}
      />
    </>
  );
};

export default CashInHands;
