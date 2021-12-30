/** @format */

import React from "react";
import useApi from "../../../../hooks/useApi";
import { useHistory } from "react-router";
import DeleteEmployeeScreen from "../../../ui/employee/delete/layout";
import * as api from "../../../../apis/employee/employee";

const DeleteEmployee = ({ id }) => {
  const history = useHistory();
  const { request, data, isLoading } = useApi(api.deleteEmployee);
  const handleDelete = async () => {
    try {
      const { data } = await request(id);
      data && window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      <DeleteEmployeeScreen
        handleDelete={handleDelete}
        data={data && data}
        isLoading={isLoading}
      />
    </>
  );
};

export default DeleteEmployee;
