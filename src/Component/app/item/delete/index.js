/** @format */

import React from "react";
import DeleteItemScreen from "../../../ui/items/delete/layout";
import useApi from "../../../../hooks/useApi";
import * as api from "../../../../apis/items/items";
import Spinner from "../../../ui/spinner/Spinner";


const DeleteItem = ({ id }) => {
  const { request,isLoading } = useApi(api.deleteItems);
  const handleDelete = async () => {
    try {
      const { data } = await request(id);
      data && window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      {isLoading ? <Spinner /> :

        <DeleteItemScreen handleDelete={handleDelete} />
      }
    </>
  );
};

export default DeleteItem;
