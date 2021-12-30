/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router";
import * as api from "../../../../../apis/reports/saleReport";
import PreviewSaleInvoicesScreen from "../../../../ui/reports/sale/preview/layout";
import useApi from "../../../../../hooks/useApi";

const PreviewSaleInvoice = () => {
  const { id } = useParams();
  const { request, data } = useApi(api.getSingleSaleReports);
  console.log("id", id);
  useEffect(() => {
    async function fetchData() {
      try {
        await request(id);
      } catch (_) {}
    }
    fetchData();
  }, []);
  console.log("data", data);
  return (
    <>
      {/* {data && */}
      <PreviewSaleInvoicesScreen data={data} />
      {/* } */}
    </>
  );
};

export default PreviewSaleInvoice;
