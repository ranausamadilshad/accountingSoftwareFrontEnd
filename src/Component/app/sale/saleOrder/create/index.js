/** @format */

import React, { useState, useEffect } from "react";
import CreateSaleOrderScreen from "../../../../ui/sale/saleOrder/create/layout";
import * as api from "../../../../../apis/sale/saleorder";
import useApi from "../../../../../hooks/useApi";
import { useHistory } from "react-router";
import * as Yup from "yup";

const initialValues = {
  invoiceNumber: "",
  orderDate: "",
  dueDate: "",
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
  advanceAmount: 0,
};
const CreateSaleOrder = () => {
  const history = useHistory();
  const [id, setId] = useState();
  const [rows, setRows] = useState([1]);
  const getAllItems = useApi(api.getAllItems);
  const createInvoices = useApi(api.createInvoices);
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

  function calculateRemaining(items, discount, tax, advanceAmount) {
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
    let remaining = final - advanceAmount;
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
      };
      tempArr.push(tempobj);
    }

    const final = {
      partyId: values.partyId,
      orderDate: values.orderDate,
      items: [...tempArr],
      discount: values.discount,
      tax: values.tax,
      invoiceNumber: values.invoiceNumber,
      totalAmount: initialValues.totalamount,
      saleType: values.saleType,
      paymentType: values.paymentType,
      remainingBalance: initialValues.remainingBalance,
      advanceAmount: values.advanceAmount,
      paymentDescription: values.paymentDescription,
      dueDate: values.dueDate,
    };
    try {
      await createInvoices.request({
        ...final,
      });
    } catch {}
    setTimeout(() => {
      history.push("/saleorder");
    }, 2000);
  };
  // console.log("id", id);
  console.log("getALLparties", getAllItems.data);

  const validationSchema = Yup.object({
    advanceAmount: Yup.number()
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
      .test("Is positive?", "Must be Positive Value", (value) => value >= 0),
    orderDate: Yup.string().required("Required"),
    dueDate: Yup.string().required("Required"),
    paymentType: Yup.string().required("Required"),
    saleType: Yup.string().required("Required"),
    partyId: Yup.string().required("Required"),
  });

  return (
    <>
      <CreateSaleOrderScreen
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
        message={createInvoices.data && createInvoices.data.message}
        validationSchema={validationSchema}
      />
    </>
  );
};

export default CreateSaleOrder;
