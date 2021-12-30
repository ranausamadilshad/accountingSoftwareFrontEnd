/** @format */

import React, { useState, useEffect } from "react";
import CreateSaleReturnScreen from "../../../../ui/sale/saleReturn/create/layout";
import * as api from "../../../../../apis/sale/saleReturns";
import useApi from "../../../../../hooks/useApi";
import { useHistory } from "react-router";
import * as Yup from "yup";

const initialValues = {
  invoiceDate: "",
  invoiceNumber: "",
  returnDate: "",
  items: [
    {
      quantity: "",
      pricePerUnit: "",
      itemDiscount: 0,
    },
  ],

  tax: 0,
  discount: 0,
  totalamount: 0,
  remainingBalance: 0,
  paidAmount: 0,
};
const CreateSaleReturn = () => {
  const history = useHistory();
  const [id, setId] = useState();
  const [rows, setRows] = useState([1]);
  const getAllItems = useApi(api.getAllItems);
  const createSaleReturn = useApi(api.createSaleReturn);
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
      } catch {}
    }
    getItem();
  }, []);
  function calculateTotalItems(quantity, pricePerUnit, itemDiscount) {
    let total = 0;
    // console.log(quantity, pricePerUnit, itemDiscount);
    let discountitem = itemDiscount * 0.01;
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
        item.itemDiscount
      );
    });

    let totalDiscount = discount / 100;
    // console.log(totalDiscount);

    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;

    // console.log(totaltax);
    initialValues.totalamount = final;
    return initialValues.totalamount.toFixed(2);
  }

  function calculateRemaining(items, discount, tax, paidAmount) {
    let totalvalue = 0;
    items.forEach((item) => {
      totalvalue += calculateTotalItems(
        item.quantity,
        item.pricePerUnit,
        item.itemDiscount
      );
    });

    let totalDiscount = discount / 100;
    // console.log(totalDiscount);

    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;
    let remaining = final - paidAmount;
    // console.log(totaltax);
    initialValues.remainingBalance = remaining;
    return initialValues.remainingBalance.toFixed(2);
  }

  async function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.value);

    try {
      await getSingleItem.request({ id: e.target.value });
      console.log(getSingleItem.data);
    } catch {}
  }

  const onSubmit = async (values) => {
    console.log("values", values);

    let tempArr = [];
    for (let i = 0; i < values.items.length; i++) {
      const tempobj = {
        quantity: values.items[i].quantity,
        pricePerUnit: values.items[i].pricePerUnit,
        itemDiscount: values.items[i].itemDiscount,
        itemId: values[`item${i}`],

        // itemId: id,
      };
      tempArr.push(tempobj);
    }

    const final = {
      partyId: values.partyId,
      invoiceNumber: values.invoiceNumber,
      invoiceDate: values.invoiceDate,
      items: [...tempArr],
      discount: values.discount,
      tax: values.tax,
      totalAmount: initialValues.totalamount,
      saleType: values.saleType,
      paymentType: values.paymentType,
      remainingBalance: initialValues.remainingBalance,
      paidAmount: values.paidAmount,
      paymentDescription: values.paymentDescription,
      returnDate: values.returnDate,
    };
    // console.log("final", final);

    try {
      await createSaleReturn.request({
        ...final,
      });
    } catch {}
    setTimeout(() => {
      history.push("/salereturn");
    }, 2000);
  };
  // console.log("id", id);
  // console.log("getALLparties", getAllItems.data);
  const validationSchema = Yup.object({
    paidAmount: Yup.number()
      .required("Required")
      .test("Is positive?", "Must be Positive Value", (value) => value >= 0),
    discount: Yup.number().test(
      "Is positive?",
      "Must be Positive Value",
      (value) => value >= 0
    ),
    tax: Yup.number().test(
      "Is positive?",
      "Must be Positive Value",
      (value) => value >= 0
    ),
    invoiceNumber: Yup.number()
      .required("Required")
      .test("Is positive?", " Must be Positive Value", (value) => value >= 0),
    invoiceDate: Yup.string().required("Required"),
    returnDate: Yup.string().required("Required"),
    saleType: Yup.string().required("Required"),
    paymentType: Yup.string().required("Required"),
    partyId: Yup.string().required("Required"),
  });
  return (
    <>
      <CreateSaleReturnScreen
        rows={rows}
        addRow={addRow}
        onSubmit={onSubmit}
        setId={setId}
        calculateTotalItems={calculateTotalItems}
        calculateTotal={calculateTotal}
        calculateRemaining={calculateRemaining}
        handleChange={handleChange}
        pricePerUnit={getSingleItem.data}
        items={getAllItems.data}
        parties={getAllIParties.data && getAllIParties.data}
        initialValues={initialValues}
        message={createSaleReturn.data && createSaleReturn.data.message}
        validationSchema={validationSchema}
      />
    </>
  );
};

export default CreateSaleReturn;
