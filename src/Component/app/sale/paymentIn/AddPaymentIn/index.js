/** @format */

import React from "react";
import CreatePaymentInScreen from "../../../../ui/sale/paymentIn/addPaymentIn/layout";
import * as api from "../../../../../apis/sale/paymentIn";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";
import * as Yup from "yup";

const initialValues = {
  partyId: "",
  date: "",
  paymentType: "",
  paymentDescription: "",
  receivedAmount: 0,
};
const CreatePaymentIn = () => {
  const getAllIParties = useApi(api.getAllIParties);
  const createPaymentIn = useApi(api.createPaymentIn);
  useEffect(() => {
    async function getfetchData() {
      try {
        await getAllIParties.request();
      } catch {}
    }
    getfetchData();
  }, []);
  const onSubmit = async (values) => {
    try {
      await createPaymentIn.request(values);
    } catch {}
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <CreatePaymentInScreen
        initialValues={initialValues}
        onSubmit={onSubmit}
        message={createPaymentIn.data && createPaymentIn.data.message}
        parties={getAllIParties.data}
      />
    </>
  );
};

export default CreatePaymentIn;
