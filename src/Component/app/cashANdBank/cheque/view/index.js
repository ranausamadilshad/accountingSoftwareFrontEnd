import React, { useEffect } from "react";
import ChequeScreen from "../../../../ui/cashAndBank/cheque/view/layout";
import useApi from "../../../../../hooks/useApi";
import * as api from "../../../../../apis/cashAndBank/cheques";

const Cheque = () => {
  const getAllCheques = useApi(api.getAllCheques);
  // const getAllCashBalance = useApi(api.getAllCashBalance);
  useEffect(() => {
    async function fetchData() {
      try {
        //   await getAllCashTransaction.request();
        const { data } = await getAllCheques.request();
        console.log("data2", data);
      } catch (error) {}
    }
    fetchData();
  }, []);
  return (
    <>
      <ChequeScreen details={getAllCheques.data && getAllCheques.data} />
    </>
  );
};

export default Cheque;
