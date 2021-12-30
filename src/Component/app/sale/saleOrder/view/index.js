/** @format */

import React, { useEffect } from "react";
import SaleOrderScreen from "../../../../ui/sale/saleOrder/view/layout";
import * as api from "../../../../../apis/sale/saleorder";
import useApi from "../../../../../hooks/useApi";

const SaleOrder = () => {
  const { request, data } = useApi(api.getAllSaleOrder);

  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Sale Order Transaction", data);
  return (
    <>
      {/* {data && */}
      <SaleOrderScreen data={data} />
      {/* } */}
    </>
  );
};

export default SaleOrder;
