import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../../../hooks/useApi";
import * as api from "../../../../../apis/cashAndBank/cheques";
import { Field } from "formik";
import { Form, Formik } from "formik";
import StatusScreen from "../../../../ui/cashAndBank/cheque/updateStatus/layout";
import { useHistory } from "react-router";
const initialValues = { status: "" };
function Status() {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const changeStatus = useApi(api.changeStatus);
  async function onSubmit(value) {
    try {
      const { data } = await changeStatus.request({ id, ...value });
      console.log(data);
    } catch {}
    history.push("/cheque");
    window.location.reload();
  }

  return <StatusScreen initialValues={initialValues} onSubmit={onSubmit} />;
}

export default Status;
