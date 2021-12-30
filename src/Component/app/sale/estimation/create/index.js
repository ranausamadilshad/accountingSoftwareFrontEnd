/** @format */

import React, { useState, useEffect } from "react";
import CreateEstimationScreen from "../../../../ui/sale/estimation/create/layout";
import useApi from "../../../../../hooks/useApi";
import * as api from "../../../../../apis/sale/estimateQutation.js";
import { useHistory } from "react-router";
import * as Yup from "yup";

const initialValues = {
  invoiceDate: "",
  items: [
    {
      itemId: "",
      quantity: "",
      pricePerUnit: "",
      discount: 0,
    },
  ],
  tax: 0,
  discount: 0,
  totalamount: 0,
};
const CreateEstimation = () => {
  const history = useHistory();
  const [id, setId] = useState(0);
  const [rows, setRows] = useState([1]);
  const getAllItems = useApi(api.getAllItems);
  const createEstimate = useApi(api.createEstimate);
  const getAllIParties = useApi(api.getAllIParties);
  const getSingleItem = useApi(api.getSingleItem);

  function addRow() {
    setRows((prev) => [...prev, 1]);
  }
  useEffect(() => {
    async function getItem() {
      try {
        await getAllItems.request();
        await getAllIParties.request();
        await getSingleItem.request({ id: id });
        console.log("single", getSingleItem.data.salePrice);
      } catch {}
    }

    getItem();
  }, [id]);
  function calculateTotalItems(quantity, pricePerUnit, discount) {
    let total = 0;
    let discountitem = discount * 0.01;
    const price = pricePerUnit - pricePerUnit * discountitem;
    total = quantity * price;

    return +total.toFixed(2);
  }
  function calculateTotal(items, discount, tax) {
    let totalvalue = 0;
    items.forEach((item) => {
      totalvalue += calculateTotalItems(
        item.quantity,
        item.pricePerUnit,
        item.discount
      );
    });

    let totalDiscount = discount / 100;
    // console.log(totalDiscount);

    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;

    // console.log(totaltax);
    initialValues.totalamount = final;
    return +initialValues.totalamount.toFixed(2);
  }
  function getId(itemId) {
    setId((prev) => itemId);
    console.log("id", id);

    // try {
    //   await getSingleItem.request({ id: itemId });
    //   console.log(getSingleItem.data);
    // } catch {}
  }

  const onSubmit = async (values) => {
    console.log("values", values);

    let tempArr = [];
    for (let i = 0; i < values.items.length; i++) {
      const tempobj = {
        quantity: values.items[i].quantity,
        pricePerUnit: getSingleItem.data.salePrice,
        discount: values.items[i].discount,
        itemId: values.items[i].itemId,

        // itemId: id,
      };
      tempArr.push(tempobj);
    }

    const final = {
      partyId: values.partyId,
      invoiceDate: values.invoiceDate,
      items: [...tempArr],
      discount: values.discount,
      tax: values.tax,
      totalAmount: initialValues.totalamount,
    };
    console.log("final", final);

    try {
      await createEstimate.request({
        ...final,
      });
    } catch {}
    setTimeout(() => {
      history.push("/estimation");
    }, 2000);
  };

  const validationSchema = Yup.object({
    discount: Yup.number().test(
      "Is positive?",
      "Must be Positive Value",
      (value) => value >= 0
    ),
    // tax: Yup.number().test(
    //   "Is positive?",
    //   "Must be Positive Value",
    //   (value) => value >= 0
    // ),
    invoiceDate: Yup.string().required("Required"),
    // paymentType: Yup.string().required("Required"),
  });

  return (
    <>
      <CreateEstimationScreen
        rows={rows}
        addRow={addRow}
        onSubmit={onSubmit}
        setId={setId}
        calculateTotalItems={calculateTotalItems}
        calculateTotal={calculateTotal}
        getId={getId}
        pricePerUnit={getSingleItem.data}
        // salePrice={getSingleItem.data.salePrice}
        items={getAllItems.data}
        parties={getAllIParties.data && getAllIParties.data}
        initialValues={initialValues}
        message={createEstimate.data && createEstimate.data.message}
        validationSchema={validationSchema}
      />
    </>
  );
};

export default CreateEstimation;
