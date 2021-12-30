import React from "react";
import ReduceItemStockScreen from "../../../ui/items/adjust/reduceStock";
import * as Yup from "yup";
import * as itemsApi from "../../../../apis/items/items";
import useApi from "../../../../hooks/useApi";

const initialValues = {
  reduceQuantity: "",
  description: "",
  date: Date.now(),
};

const ReduceItemStock = ({ id }) => {
  const { request, data } = useApi(itemsApi.removeQuantityToExistingItems);
  const validationSchema = Yup.object({
    reduceQuantity: Yup.string().required("Required"),
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
  return (
    <ReduceItemStockScreen
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      data={data}
    />
  );
};

export default ReduceItemStock;
