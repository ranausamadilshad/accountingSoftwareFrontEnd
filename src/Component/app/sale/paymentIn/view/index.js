import React from "react";
import PaymentInScreen from "../../../../ui/sale/paymentIn/view/layout";
import * as api from "../../../../../apis/sale/paymentIn";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const PaymentIn = () => {
  const getAllPaymentIn = useApi(api.getAllPaymentIn);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllPaymentIn.request();
      } catch (error) {}
    }
    fetchData();
  }, []);

  return (
    <>
      <PaymentInScreen details={getAllPaymentIn.data && getAllPaymentIn.data} />
    </>
  );
};

export default PaymentIn;
