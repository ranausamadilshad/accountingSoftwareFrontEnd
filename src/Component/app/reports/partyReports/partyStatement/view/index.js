/** @format */

import React from "react";
import PartyStatementScreen from "../../../../../ui/reports/partyReports/partyStatement/view/layout";
import * as api from "../../../../../../apis/reports/partyStatement";
import { useEffect } from "react";
import useApi from "../../../../../../hooks/useApi";

const PartyStatement = () => {
  const partyStatement = useApi(api.getAllPartyStatement);
  useEffect(() => {
    async function fetchData() {
      try {
        await partyStatement.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Party Statement Report ", partyStatement.data);
  return (
    <>
      {/* {partyStatement.data && ( */}
      <PartyStatementScreen data={partyStatement.data} />
      {/* )} */}
    </>
  );
};

export default PartyStatement;
