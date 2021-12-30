import React, { useEffect } from "react";
import { useParams } from "react-router";
import useApi from "../../hooks/useApi";
import ReportPdfInvoiceScreen from "./ReportPdfInvoiceScreen";
import * as challanApi from "../../apis/deliveryChallan/deliveryChallan";

const ReportPdfInvoice = () => {
  const { id } = useParams();
  const { request, data } = useApi(challanApi.getSingleChallan);
  console.log("id", id);
  useEffect(() => {
    async function fetchData() {
      try {
        await request(id);
      } catch (_) {}
    }
    fetchData();
  }, []);

  return <>{data && <ReportPdfInvoiceScreen data={data} />}</>;
};

export default ReportPdfInvoice;
