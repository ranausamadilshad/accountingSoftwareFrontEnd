/** @format */

import React from "react";
import * as api from "../../../../../../apis/reports/partyReportsByItem";
import { useEffect } from "react";
import useApi from "../../../../../../hooks/useApi";
import PartyReportsByItemScreen from "../../../../../ui/reports/partyReports/partyReportsByItem/view/layout";

const PartyReportsByItem = () => {
  const getAllPartyByItem = useApi(api.getAllPartyByItemReports);
  useEffect(() => {
    async function fetchData() {
      try {
        await getAllPartyByItem.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Party By Item Report ", getAllPartyByItem.data);
  return (
    <>
      {/* {getAllPartyByItem.data && ( */}
      <PartyReportsByItemScreen data={getAllPartyByItem.data} />
      {/* )} */}
    </>
  );
};

export default PartyReportsByItem;
