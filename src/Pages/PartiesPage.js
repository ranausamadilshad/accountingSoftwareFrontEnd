import React from "react";
import PageNavigationTabs from "../common/PageNavigationTabs";
import Parties from "../Component/app/party/view/index";
import "../Css/all_created_parties_section.css";

const PartiesPage = () => {
  return (
    <>
      <PageNavigationTabs
        tabs={[
          {
            title: "NAME",
            render: () => (
              <span>
                <Parties />
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

export default PartiesPage;
