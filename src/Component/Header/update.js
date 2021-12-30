/** @format */

import React, { useEffect, useState } from "react";
import "./CreateCompany.css";

// import CreateCompanyScreen from "./CreateCompanyScreen";
import CreateCompanyScreen from "./updateScreen";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/createCompany/createCompany";
import UpdateScreen from "./updateScreen";

const initialValues = {
  companyName: "",
  address: "",
  type: "",
  category: "",
  description: "",
  email: "",
  phone: "",
  password: "",
};

const Update = () => {
  const [value, setValue] = useState();
  const { request, data } = useApi(api.updateCompany);

  const getCompanyDetail = useApi(api.getCompanyDetail);

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    phone: Yup.number()
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required("Required"),

    email: Yup.string().email().required("Required"),
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCompanyDetail.request({ id: 0 });
        console.log("getdetail", data);
        initialValues.companyName = data.companyName;
        initialValues.address = data.address;
        initialValues.category = data.category;
        initialValues.description = data.description;
        initialValues.email = data.email;
        initialValues.phone = data.phone;
        initialValues.type = data.type;

        setValue((prev) => ({ ...prev, ...data }));
      } catch {}
    };
    getData();
    console.log("reinitialize", initialValues);
  }, []);

  const onSubmit = async (values) => {
    try {
      const { data } = await request({ ...values });
      // localStorage.setItem("token", data.token);
    } catch (_) {}
    // const data = localStorage.setItem("createCompany", JSON.stringify(values));
  };
  //   console.log("data", data);

  return (
    <>
      <UpdateScreen
        // onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Update;
