/** @format */

import React from "react";
import * as api from "../../../../apis/parties/parties";
import useApi from "../../../../hooks/useApi";
import DeletePartiesScreen from "../../../ui/party/delete/layout";
import Spinner from "../../../ui/spinner/Spinner";


const DeleteParties = ({ id }) => {
  const { request ,isLoading} = useApi(api.deleteParties);
  const handleDelete = async () => {
    try {
      const { data } = await request(id);
      data && window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      {isLoading ? <Spinner/>:
        <DeletePartiesScreen handleDelete={handleDelete} />
      }
      
    </>
  );
};

export default DeleteParties;
