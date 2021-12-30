/** @format */

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import UpdateParty from "../../../ui/party/update/layout";
import * as api from "../../../../apis/parties/parties";
import useApi from "../../../../hooks/useApi";
import Spinner from "../../../ui/spinner/Spinner";


const initialValues = {
  partyName: "",
  phoneNo: "",
  country: "",
  city: "",
  postalCode: "",
  address: "",
  isBillingAddress: "",
  contactPersonName: "",
  contactPersonNo: "",
  incomeTax: 0,
  gst: "",
  isCreditLimitEnable: "",
  creditLimitAmount: 0,
  balanceAmount: "",
  openingBalance: "",
  toPay: 0,
  toReceive: 0,
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
});

const Update = ({ id }) => {
  const [, setValues] = useState({});
  const getSingleParty = useApi(api.getSingleParty);
  const { request, data, error,isLoading } = useApi(api.updateParties);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getSingleParty.request(id);
        console.log("Singles data", data);
        initialValues.partyName = data.party.partyName;
        initialValues.phoneNo = data.party.phoneNo;
        initialValues.country = data.party.country;
        initialValues.city = data.party.city;
        initialValues.postalCode = data.party.postalCode;
        initialValues.address = data.party.address;
        initialValues.contactPersonName = data.party.contactPersonName;
        initialValues.contactPersonNo = data.party.contactPersonNo;
        initialValues.incomeTax = data.party.incomeTax;
        initialValues.gst = data.party.gst;
        initialValues.creditLimitAmount = data.party.creditLimitAmount;
        initialValues.isCreditLimitEnable = data.party.isCreditLimitEnable
          ? "true"
          : "false";
        initialValues.date = new Date(data.party.date).toString();
        initialValues.balanceAmount =
          data.party.toReceive >= data.party.toPay
            ? data.party.toReceive
            : data.party.toPay;
        initialValues.openingBalance =
          data.party.toReceive >= data.party.toPay ? "two" : "one";

        setValues((prev) => ({ ...prev, ...data }));
      } catch (_) {}
    }
    fetchData();
  }, [id]);

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
      const { data } = await request({ id, ...sendValues });
      data && window.location.reload();
    } catch (_) {}
  };
  return (
    <div>
      {isLoading ? <Spinner /> :
        <UpdateParty
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          message={data}
          error={error}
        />
      }
    </div>
  );
};

export default Update;
