import React from "react";
import PageNavigationTabs from "../../common/PageNavigationTabs";
import "./Expenses.css";

const ExpensesScreen = () => {
  return (
    <>
      <PageNavigationTabs
        tabs={[
          {
            title: "Cateogry",
            render: () => (
              <span>
                <p>categories </p>
              </span>
            ),
          },
          {
            title: "Items",
            render: () => (
              <span>
                <p>items data </p>
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

export default ExpensesScreen;
