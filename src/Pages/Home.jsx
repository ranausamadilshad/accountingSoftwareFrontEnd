import React, { useState } from "react";
import Header from "../Component/Header/Header";
import SideBar from "../Component/SideBar/SideBar";
import BodyContent from "../Screen/Main_Body_Content/BodyContent";

const Home = () => {
  const [sideBar, setSideBar] = useState(true);
  const [reportSidebar, setReportSidebar] = useState(false);

  return (
    <>
      <Header
        sideBar={sideBar}
        reportSidebar={reportSidebar}
        setSideBar={setSideBar}
        setReportSidebar={setReportSidebar}
      />
      <BodyContent
        sideBar={sideBar}
        setSideBar={setSideBar}
        reportSidebar={reportSidebar}
        setReportSidebar={setReportSidebar}
      />
      <SideBar
        sideBar={sideBar}
        setSideBar={setSideBar}
        reportSidebar={reportSidebar}
        setReportSidebar={setReportSidebar}
      />
    </>
  );
};

export default Home;
