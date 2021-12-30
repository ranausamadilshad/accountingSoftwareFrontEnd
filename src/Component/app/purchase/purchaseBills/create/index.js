/** @format */

import React, { useState, useEffect } from "react";
import AddPurchase from "../../../../ui/purchase/purchaseBills/create/layout";
import * as api from "../../../../../apis/purchase/purchaseBills";
import useApi from "../../../../../hooks/useApi";
import { useHistory } from "react-router";
import * as Yup from "yup";

const initialValues = {
  invoiceDate: "",
  items: [
    {
      quantity: "",
      pricePerUnit: "",
      itemtax: 0,
    },
  ],
  paidAmount: 0,
  tax: 0,
  discount: 0,
  totalamount: 0,
  remainingBalance: 0,
};
const Index = () => {
  const history = useHistory();
  const [id, setId] = useState();
  const getAllItems = useApi(api.getAllItems);
  const createPurchaseBills = useApi(api.createPurchaseBills);
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
  function calculateTotalItems(quantity, pricePerUnit, itemtax) {
    let total = 0;
    // console.log(quantity, pricePerUnit, itemtax);
    let taxsingleitem = itemtax /100;
    const price = pricePerUnit + pricePerUnit * taxsingleitem;
    total = quantity * price;

    return +total;
  }

  function calculateTotalTaxRs(quantity, pricePerUnit, itemtax) {
    let total = 0;
    let taxrs = 0;
    let exacttotal = 0;
    // console.log(quantity, pricePerUnit, itemtax);
    let taxsingleitem = itemtax / 100;
    const price = pricePerUnit + pricePerUnit * taxsingleitem;
    console.log("price", price);
    total = quantity * price;
    exacttotal = pricePerUnit * quantity;
    taxrs = total - exacttotal;
    return +taxrs;
  }

  function calculateTotal(items, discount, tax) {
    let totalvalue = 0;
    items.forEach((item) => {
      totalvalue += calculateTotalItems(
        item.quantity,
        item.pricePerUnit,
        item.itemtax
      );
    });

    let totalDiscount = discount / 100;
    // console.log(totalDiscount);

    let total = totalvalue - totalvalue * totalDiscount;
    // let totaltax = tax / 100;
    // let final = total + total * totaltax;

    // console.log(totaltax);
    initialValues.totalamount = total;
    return initialValues.totalamount;
  }

  function calculateRemaining(items, discount, tax, paidAmount) {
    let totalvalue = 0;
    items.forEach((item) => {
      totalvalue += calculateTotalItems(
        item.quantity,
        item.pricePerUnit,
        item.itemtax
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
    return initialValues.remainingBalance;
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
        itemtax: values.items[i].itemtax,
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
      // saleType: values.saleType,
      paymentType: values.paymentType,
      remainingBalance: initialValues.remainingBalance,
      paidAmount: values.paidAmount,
      paymentDescription: values.paymentDescription,
      // dueDate: values.dueDate,
    };
    // console.log("final", final);

    try {
      await createPurchaseBills.request({
        ...final,
      });
    } catch {}
    setTimeout(() => {
      history.push("/purchasebills");
    }, 2000);
  };
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
    saleType: Yup.string().required("Required"),
    invoiceDate: Yup.string().required("Required"),
    paymentType: Yup.string().required("Required"),
    partyId: Yup.string().required("Required"),
  });
  return (
    <>
      <AddPurchase
        onSubmit={onSubmit}
        setId={setId}
        calculateTotalItems={calculateTotalItems}
        calculateTotal={calculateTotal}
        calculateRemaining={calculateRemaining}
        calculateTotalTaxRs={calculateTotalTaxRs}
        handleChange={handleChange}
        pricePerUnit={getSingleItem.data}
        items={getAllItems.data}
        parties={getAllIParties.data && getAllIParties.data}
        initialValues={initialValues}
        message={createPurchaseBills.data && createPurchaseBills.data.message}
        validationSchema={validationSchema}
      />
    </>
  );
};

export default Index;
