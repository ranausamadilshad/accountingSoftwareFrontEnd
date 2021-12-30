/** @format */

import React from "react";
import SaleInvoicesScreen from "../../../ui/sale/saleInvoice/view/layout";
import * as api from "../../../../apis/sale/saleinvoices";
import { useEffect } from "react";
import useApi from "../../../../hooks/useApi";

const SaleInvoices = () => {
  const { request, data } = useApi(api.getAllSaleInvoices);

  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  // console.log("Sale Invoices Transaction", data);

  return (
    <>
      {/* {data &&  */}
      <SaleInvoicesScreen data={data && data} />
      {/* } */}
    </>
  );
};

export default SaleInvoices;
