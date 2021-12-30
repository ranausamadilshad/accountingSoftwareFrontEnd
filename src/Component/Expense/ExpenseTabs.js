import React from "react";
import PageNavigationTabs from "../../common/PageNavigationTabs";
import ExpenseScreen from "./ExpenseScreen";
// import ItemsTable from "./itemsTable";

const ExpenseTabs = () => {
  return (
    <>
      <PageNavigationTabs
        tabs={[
          {
            title: "CATEGORY",
            render: () => (
              <span>
                <ExpenseScreen />
              </span>
            ),
          },
          {
            title: "ITEMS",
            render: () => (
              <span>
                <ExpenseScreen />
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

export default ExpenseTabs;
