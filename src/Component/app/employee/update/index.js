/** @format */

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import UpdateEmployeeScreen from "../../../ui/employee/update/layout";
import * as api from "../../../../apis/employee/employee";
import useApi from "../../../../hooks/useApi";

const initialValues = {
  empName: "",
  department: "",
  fatherName: "",
  phoneNo: "",
  jobTitle: "",
  qualification: "",
  bloodGroup: "",
  salary: "",
  address: "",
  emgContactName: "",
  emgContactNo: "",
  cnic: "",
};

const validationSchema = Yup.object({
  empName: Yup.string().required("Required"),
  fatherName: Yup.string().required("Required"),
  phoneNo: Yup.string().required("Required"),
  jobTitle: Yup.string().required("Required"),
  cnic: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const UpdateEmployee = ({ id }) => {
  const getSingleEmployee = useApi(api.getSingleEmployee);
  const { request, data, error, isLoading } = useApi(api.updateEmployee);
  const [values, setValues] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getSingleEmployee.request(id);
        console.log("dTAATS", data);
        initialValues.empName = data.employee.empName;
        initialValues.department = data.employee.department;
        initialValues.fatherName = data.employee.fatherName;
        initialValues.phoneNo = data.employee.phoneNo;
        initialValues.jobTitle = data.employee.jobTitle;
        initialValues.qualification = data.employee.qualification;
        initialValues.bloodGroup = data.employee.bloodGroup;
        initialValues.salary = data.employee.salary;
        initialValues.address = data.employee.address;
        initialValues.emgContactName = data.employee.emgContactName;
        initialValues.emgContactNo = data.employee.emgContactNo;
        initialValues.cnic = data.employee.cnic;

        setValues((prev) => ({ ...prev, ...data }));
      } catch (_) {}
    }
    fetchData();
  }, [id]);

  const onSubmit = async (values) => {
    try {
      const { data } = await request({ id, ...values });
      data &&
        setTimeout(() => {
          window.location.reload();
        }, 200);
    } catch (_) {}
  };
  return (
    <>
      <UpdateEmployeeScreen
        message={data && data}
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        error={error && error}
        isLoading={isLoading}
      />
    </>
  );
};

export default UpdateEmployee;
