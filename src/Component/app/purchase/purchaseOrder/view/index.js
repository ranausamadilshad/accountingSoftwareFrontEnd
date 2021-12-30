/** @format */

import React from "react";
import PageNavigationTabs from "../../../../../common/PageNavigationTabs";
import PurcahseOrderDetail from "../../../../ui/purchase/purchaseOrder/view/layout";
import * as api from "../../../../../apis/purchase/purchaseOrder";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const PurchaseOrder = () => {
  const { request, data } = useApi(api.getAllPurchaseOrder);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Purchase Order Transaction", data);

  return (
    <>
      <PageNavigationTabs
        tabs={[
          {
            title: "Orders",
            render: () => (
              //  data &&
              <PurcahseOrderDetail data={data} />
            ),
          },
        ]}
      />
    </>
  );
};

export default PurchaseOrder;
