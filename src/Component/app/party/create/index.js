/** @format */

import React from "react";

import * as Yup from "yup";
import * as api from "../../../../apis/parties/parties";
import useApi from "../../../../hooks/useApi";
import CreatePartiesScreens from "../../../ui/party/create/layout";
import Spinner from "../../../ui/spinner/Spinner";

const initialValues = {
  partyName: "",
  phoneNo: "",
  country: "",
  city: "",
  postalCode: "",
  address: "",
  isBillingAddress: "",
  toPay: 0,
  toReceive: 0,
  contactPersonName: "",
  contactPersonNo: "",
  incomeTax: 0,
  gst: "",
  isCreditLimitEnable: "",
  creditLimitAmount: 0,
  balanceAmount: "",
  openingBalance: "",
  date: "",
};

const validationSchema = Yup.object({
  partyName: Yup.string().required("Required"),
  phoneNo: Yup.number().required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postalCode: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  // creditLimitAmount: Yup.number()
  //   .required("Required")
  //   .when(["isCreditLimitEnable"], (isCreditLimitEnable, schema) => {
  //     return isCreditLimitEnable == true
  //       ? schema.required("Required")
  //       : schema.notRequired("0");
  //   }),

  creditLimitAmount: Yup.number().when("isCreditLimitEnable", {
    is: true,
    then: Yup.number().required(),
  }),
});

const CreatePartiess = () => {
  const { request, data, error, isLoading } = useApi(api.createParties);

  const onSubmit = async (values) => {
    if (values.openingBalance === "one") {
      values.toPay = values.balanceAmount;
    } else {
      values.toReceive = values.balanceAmount;
    }

    const sendValues = {
      partyName: values.partyName,
      phoneNo: values.phoneNo,
      country: values.country,
      city: values.city,
      postalCode: values.postalCode,
      address: values.address,
      isBillingAddress: false,
      contactPersonName: values.contactPersonName,
      contactPersonNo: values.contactPersonNo,
      incomeTax: values.incomeTax,
      gst: values.gst,
      date: values.date,
      isCreditLimitEnable: values.isCreditLimitEnable,
      creditLimitAmount: values.creditLimitAmount,
      toPay: values.toPay,
      toReceive: values.toReceive,
    };

    try {
      const { data } = await request({ ...sendValues });
      data &&
        setTimeout(() => {
          window.location.reload();
        }, 1000);
    } catch (_) {}
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
      <CreatePartiesScreens
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        message={data}
        error={error}
      />
       )}
    </>
  );
};

export default CreatePartiess;
