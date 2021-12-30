import React, { useEffect } from "react";
import EstimationScreen from "../../../../ui/sale/estimation/view/layout";
import * as api from "../../../../../apis/sale/estimateQutation.js";
import useApi from "../../../../../hooks/useApi";

const Estimation = () => {
  const getAllEstimate = useApi(api.getAllEstimate);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getAllEstimate.request();
      } catch {}
    }
    getData();
  }, []);
  // console.log("estimatedata", getAllEstimate.data.estimateQuotationArray);

  return (
    <>
      <EstimationScreen
        data={getAllEstimate.data && getAllEstimate.data.estimateQuotationArray}
      />
    </>
  );
};

export default Estimation;
