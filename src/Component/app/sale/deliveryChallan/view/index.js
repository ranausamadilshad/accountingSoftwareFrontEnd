/** @format */

import React, { useEffect } from "react";
import DeliveryChallanScreen from "../../../../ui/sale/deliveryChallan/view/layout";
import * as deliveryChallanApi from "../../../../../apis/deliveryChallan/deliveryChallan";
import useApi from "../../../../../hooks/useApi";

const DeliveryChallan = () => {
  const { request, data } = useApi(deliveryChallanApi.getAllDeliveryChallan);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  return (
    <>
      {/* {data && */}
      <DeliveryChallanScreen data={data} />
      {/* } */}
    </>
  );
};

export default DeliveryChallan;
