import React, { useEffect } from "react";
import AddPaymentOutScreen from "../../../../ui/purchase/paymentOut/create/layout";
import useApi from "../../../../../hooks/useApi";
import * as api from "../../../../../apis/purchase/paymentOut";
import * as Yup from "yup";

const initialValues = {
  partyId: "",
  date: "",
  paymentType: "",
  paymentDescription: "",
  paidAmount: "",
  receipt: "",
};

const validationSchema = Yup.object({
  partyId: Yup.string().required("Required"),
  date: Yup.date().required("Required"),
  paymentType: Yup.string().required("Required"),
  paymentDescription: Yup.string().required("Required"),
  paidAmount: Yup.number().required("Required"),
});
const AddPaymentOut = () => {
  const getAllIParties = useApi(api.getAllIParties);
  const createPaymentOut = useApi(api.createPaymentOut);
  useEffect(() => {
    async function getfetchData() {
      try {
        await getAllIParties.request();
      } catch {}
    }
    getfetchData();
  }, []);

  const onSubmit = async (values) => {
    console.log("formpayment", "values");
    try {
      await createPaymentOut.request(values);
      window.location.reload();
    } catch {}
  };
  return (
    <div>
      <AddPaymentOutScreen
        initialValues={initialValues}
        onSubmit={onSubmit}
        message={createPaymentOut.data && createPaymentOut.data.message}
        parties={getAllIParties.data}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default AddPaymentOut;
