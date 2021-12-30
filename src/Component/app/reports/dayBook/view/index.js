/** @format */

import React from "react";
import DayBookScreen from "../../../../ui/reports/dayBook/view/layout";
import * as api from "../../../../../apis/reports/dayBook";
import { useEffect } from "react";
import useApi from "../../../../../hooks/useApi";

const DayBook = () => {
  const getAllDayBook = useApi(api.getAllDayBook);
  useEffect(() => {
    async function fetchData() {
      try {
        await getAllDayBook.request();
      } catch (_) {}
    }
    fetchData();
  }, []);

  console.log("Day Book Report ", getAllDayBook.data);
  return (
    <>
      {/* {getAllDayBook.data &&  */}
      <DayBookScreen data={getAllDayBook.data} />
      {/* } */}
    </>
  );
};

export default DayBook;
