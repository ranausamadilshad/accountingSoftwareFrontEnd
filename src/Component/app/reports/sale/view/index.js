/** @format */

import React from "react";
import SaleReportScreen from "../../../../ui/reports/sale/view/layout";
import * as api from "../../../../../apis/reports/saleReport";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const SaleReport = () => {
  const getAllSales = useApi(api.getAllSaleReports);
  useEffect(() => {
    async function fetchData() {
      try {
        await getAllSales.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Sale Report ", getAllSales.data);
  return (
    <>
      {/* {getAllSales.data &&  */}
      <SaleReportScreen data={getAllSales.data} />
      {/*  } */}
    </>
  );
};

export default SaleReport;
