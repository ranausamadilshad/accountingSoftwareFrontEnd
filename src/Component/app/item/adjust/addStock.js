import React from "react";
import AddItemStockScreen from "../../../ui/items/adjust/addStock";
import * as Yup from "yup";
import useApi from "../../../../hooks/useApi";
import * as itemsApi from "../../../../apis/items/items";

const initialValues = {
  addQuantity: "",
  description: "",
  date: "",
};

const AddItemStock = ({ id }) => {
  const { request, data } = useApi(itemsApi.addQuantityToExistingItems);
  const validationSchema = Yup.object({
    addQuantity: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
  });
  const handleSubmit = async (values) => {
    try {
      await request({ id, ...values });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (_) {}
  };
  console.log("data", data);
  return (
    <AddItemStockScreen
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      data={data}
    />
  );
};

export default AddItemStock;
