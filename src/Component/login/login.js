/** @format */

import React from "react";
import LoginForm from "./loginForm";
import * as Yup from "yup";
import useApi from "../../hooks/useApi";
import * as api from "../../apis/createCompany/createCompany";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const login = useApi(api.login);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(8).required("Required"),
  });
  const onSubmit = async (initialValues) => {
    console.log("form", initialValues);

    try {
      const { data } = await login.request({ ...initialValues });
      console.log("update", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("data", JSON.stringify(data));
      history.push("/home");
      window.location.reload();
    } catch {}
  };

  return (
    <LoginForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // error={error}
    />
  );
}

export default Login;
