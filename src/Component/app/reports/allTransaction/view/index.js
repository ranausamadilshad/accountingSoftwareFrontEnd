/** @format */

import React from "react";
import AllTransactionScreen from "../../../../ui/reports/allTransaction/view/layout";
import * as api from "../../../../../apis/reports/allTransactionReport";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const AllTransaction = () => {
  const getAllTransaction = useApi(api.getAllTransaction);
  useEffect(() => {
    async function fetchData() {
      try {
        await getAllTransaction.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("All Transaction Report ", getAllTransaction.data);
  return (
    <>
      {/* {getAllTransaction.data && ( */}
      <AllTransactionScreen data={getAllTransaction.data} />
      {/* )} */}
    </>
  );
};

export default AllTransaction;
