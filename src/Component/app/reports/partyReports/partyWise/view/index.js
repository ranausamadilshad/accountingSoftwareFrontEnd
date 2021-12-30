/** @format */

import React from "react";
import PartyWiseScreen from "../../../../../ui/reports/partyReports/partyWise/view/layout";
import * as api from "../../../../../../apis/reports/partyWise";
import { useEffect } from "react";
import useApi from "../../../../../../hooks/useApi";

const PartyWise = () => {
  const partyWise = useApi(api.getAllPartyWiseReport);
  useEffect(() => {
    async function fetchData() {
      try {
        await partyWise.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Party Wise Report ", partyWise.data);
  return (
    <>
      {/* {partyWise.data && */}
      <PartyWiseScreen data={partyWise.data} />
      {/* } */}
    </>
  );
};

export default PartyWise;
