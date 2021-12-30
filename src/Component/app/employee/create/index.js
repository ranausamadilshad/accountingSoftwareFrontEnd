/** @format */

import React, { useState } from "react";
import CreateEmployeesScreen from "../../../ui/employee/create/layout";
import * as Yup from "yup";
import useApi from "../../../../hooks/useApi";
import * as api from "../../../../apis/employee/employee";
import "nprogress/nprogress.css";
import Spinner from "../../../ui/spinner/Spinner";

const initialValues = {
  empName: "",
  department: "",
  fatherName: "",
  phoneNo: "",
  jobTitle: "",
  qualification: "",
  cnic: "",
  bloodGroup: "",
  salary: 0,
  address: "",
  emgContactName: "",
  emgContactNo: "",
};

const validationSchema = Yup.object({
  empName: Yup.string().required("Required"),
  fatherName: Yup.string().required("Required"),
  phoneNo: Yup.number().required("Required"),
  jobTitle: Yup.string().required("Required"),
  cnic: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
});

const CreateEmployee = () => {
  const { request, data, error, isLoading } = useApi(api.createEmployee);

  const onSubmit = async (values) => {
    try {
      const { data } = await request(values);
      data && window.location.reload();
    } catch (_) {}
  };
  return (
    <>
     <CreateEmployeesScreen
        isLoading={isLoading}
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        message={data && data}
        error={error}
      />
     
    </>
  );
};

export default CreateEmployee;
