/** @format */

import React, { useEffect } from "react";
import SaleReturnScreen from "../../../../ui/sale/saleReturn/view/layout";
import * as api from "../../../../../apis/sale/saleReturns";
import useApi from "../../../../../hooks/useApi";

const SaleReturn = () => {
  const { request, data } = useApi(api.getAllSaleReturn);
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
      <SaleReturnScreen data={data} />
      {/* } */}
    </>
  );
};

export default SaleReturn;
