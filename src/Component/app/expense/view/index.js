import React from "react";
import PageNavigationTabs from "../../../../common/PageNavigationTabs";
import ExpenseScreen from "../../../ui/expense/view/layout";

const Expense = () => {
  return (
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
  );
};

export default Expense;
