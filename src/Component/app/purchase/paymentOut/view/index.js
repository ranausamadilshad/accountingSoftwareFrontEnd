import React, { useState, useEffect } from "react";
import PaymentOutScreen from "../../../../ui/purchase/paymentOut/view/layout";
import useApi from "../../../../../hooks/useApi";
import * as api from "../../../../../apis/purchase/paymentOut";
const PaymentOut = () => {
  const getAllPaymentOut = useApi(api.getAllPaymentOut);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllPaymentOut.request();
      } catch (error) {}
    }
    fetchData();
  }, []);
  return (
    <div>
      <PaymentOutScreen
        details={getAllPaymentOut.data && getAllPaymentOut.data}
      />
    </div>
  );
};

export default PaymentOut;
