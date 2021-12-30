/** @format */

import React, { useState, useEffect } from "react";
import CreateSaleInvoicesScreen, {
  CreateSaleInvoicesCreditScreen,
} from "../../../../ui/sale/saleInvoice/create/layout";
import * as api from "../../../../../apis/sale/saleinvoices";
import useApi from "../../../../../hooks/useApi";
import { useHistory } from "react-router";
import * as Yup from "yup";

const todayDate = new Date().toLocaleDateString().split("/");

const initialValues = {
  invoiceDate: `${todayDate[2]}-0${todayDate[0]}-${todayDate[1]}`,
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
  receivedAmount: 0,
};

const CreateSaleInvoices = () => {
  const history = useHistory();
  const getAllItems = useApi(api.getAllItems);
  const createInvoices = useApi(api.createInvoices);
  const getAllIParties = useApi(api.getAllIParties);
  const getSingleItem = useApi(api.getSingleItem);

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
    console.log(quantity, pricePerUnit, itemDiscount);
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
    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;
    initialValues.totalamount = final;
    return initialValues.totalamount;
  }

  function calculateRemaining(items, discount, tax, receivedAmount) {
    let totalvalue = 0;
    items.forEach((item) => {
      totalvalue += calculateTotalItems(
        item.quantity,
        item.pricePerUnit,
        item.itemDiscount
      );
    });

    let totalDiscount = discount / 100;
    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;
    let remaining = final - receivedAmount;
    initialValues.remainingBalance = remaining;
    return initialValues.remainingBalance;
  }

  // async function handleChange(e) {
  //   setId(e.target.value);
  //   console.log(e.target.value);

  //   try {
  //     await getSingleItem.request({ id: e.target.value });
  //     console.log(getSingleItem.data);
  //   } catch {}
  // }

  const onSubmit = async (values) => {
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
      invoiceDate: values.invoiceDate,
      items: [...tempArr],
      discount: values.discount,
      tax: values.tax,
      totalAmount: initialValues.totalamount,
      saleType: values.saleType,
      paymentType: values.paymentType,
      remainingBalance: initialValues.remainingBalance,
      receivedAmount: values.receivedAmount,
      paymentDescription: values.paymentDescription,
    };
    try {
      await createInvoices.request({
        ...final,
      });
    } catch {}
    setTimeout(() => {
      history.push("/saleinvoices");
    }, 2000);
  };
  const validationSchema = Yup.object({
    receivedAmount: Yup.number()
      .required("Required")
      .test("Is positive?", "Must be Positive Value", (value) => value >= 0),
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
    invoiceNo: Yup.number()
      .required("Required")
      .test("Is positive?", "Must be Positive Value", (value) => value >= 0),
    invoiceDate: Yup.string().required("Required"),
    saleType: Yup.string().required("Required"),
    paymentType: Yup.string().required("Required"),
    partyId: Yup.string().required("Required"),
  });

  return (
    <>
      <CreateSaleInvoicesScreen
        onSubmit={onSubmit}
        calculateTotalItems={calculateTotalItems}
        calculateTotal={calculateTotal}
        calculateRemaining={calculateRemaining}
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

export default CreateSaleInvoices;

export const CreateSaleInvoicesCredit = () => {
  const history = useHistory();
  const getAllItems = useApi(api.getAllItems);
  const createInvoices = useApi(api.createInvoices);
  const getAllIParties = useApi(api.getAllIParties);
  const getSingleItem = useApi(api.getSingleItem);

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
    console.log(quantity, pricePerUnit, itemDiscount);
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
    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;
    initialValues.totalamount = final;
    return initialValues.totalamount;
  }

  function calculateRemaining(items, discount, tax, receivedAmount) {
    let totalvalue = 0;
    items.forEach((item) => {
      totalvalue += calculateTotalItems(
        item.quantity,
        item.pricePerUnit,
        item.itemDiscount
      );
    });

    let totalDiscount = discount / 100;
    let total = totalvalue - totalvalue * totalDiscount;
    let totaltax = tax / 100;
    let final = total + total * totaltax;
    let remaining = final - receivedAmount;
    initialValues.remainingBalance = remaining;
    return initialValues.remainingBalance;
  }

  // async function handleChange(e) {
  //   setId(e.target.value);
  //   console.log(e.target.value);

  //   try {
  //     await getSingleItem.request({ id: e.target.value });
  //     console.log(getSingleItem.data);
  //   } catch {}
  // }

  const onSubmit = async (values) => {
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
      invoiceDate: values.invoiceDate,
      items: [...tempArr],
      discount: values.discount,
      tax: values.tax,
      totalAmount: initialValues.totalamount,
      saleType: values.saleType,
      paymentType: values.paymentType,
      remainingBalance: initialValues.remainingBalance,
      receivedAmount: values.receivedAmount,
      paymentDescription: values.paymentDescription,
    };
    try {
      await createInvoices.request({
        ...final,
      });
    } catch {}
    setTimeout(() => {
      history.push("/saleinvoices");
    }, 2000);
  };
  const validationSchema = Yup.object({
    receivedAmount: Yup.number()
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
    invoiceNo: Yup.number()
      .required("Required")
      .test("Is positive?", "Must be Positive Value", (value) => value >= 0),
    invoiceDate: Yup.string().required("Required"),
    saleType: Yup.string().required("Required"),
    paymentType: Yup.string().required("Required"),
    partyId: Yup.string().required("Required"),
  });

  return (
    <>
      <CreateSaleInvoicesCreditScreen
        onSubmit={onSubmit}
        calculateTotalItems={calculateTotalItems}
        calculateTotal={calculateTotal}
        calculateRemaining={calculateRemaining}
        pricePerUnit={getSingleItem.data}
        items={getAllItems.data}
        parties={getAllIParties.data && getAllIParties.data}
        initialValues={initialValues}
        message={createInvoices.data && createInvoices.data.message}
        validationSchema={validationSchema}
      />
      {/* <CreateSaleInvoicesScreen
        onSubmit={onSubmit}
        calculateTotalItems={calculateTotalItems}
        calculateTotal={calculateTotal}
        calculateRemaining={calculateRemaining}
        pricePerUnit={getSingleItem.data}
        items={getAllItems.data}
        parties={getAllIParties.data && getAllIParties.data}
        initialValues={initialValues}
        message={createInvoices.data && createInvoices.data.message}
        validationSchema={validationSchema}
      /> */}
    </>
  );
};
