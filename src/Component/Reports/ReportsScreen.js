/** @format */

import React from "react";
import "./Reports.css";
import { Link } from "react-router-dom";
// import CreatePartiess from '../Parties/CreateParties'

const ReportsScreen = ({ reportSidebar, setReportSidebar }) => {
  console.log("report sidebar", reportSidebar);
  const handleSidebar = () => {
    setReportSidebar(false);
  };
  return (
    <>
      <section class="reports_body_section">
        <section
          class={`reports_inner_sidebar_section report_responsive_nav_bar ${
            reportSidebar ? "report_sidebar_control" : ""
          }`}>
          <div class="reports_inner_sidebar">
            <h2>Transction Report</h2>
            <div class="reports_inner_sidebar_list">
              <Link to="/reportSale" onClick={handleSidebar}>
                {" "}
                Sale
              </Link>
              <Link to="/reportPurchase" onClick={handleSidebar}>
                {" "}
                Purchase
              </Link>
              <Link to="/daybook" onClick={handleSidebar}>
                {" "}
                Day Book
              </Link>
              <Link to="/allTransaction" onClick={handleSidebar}>
                All Transactions
              </Link>
              <Link to="/profitAndLoss" onClick={handleSidebar}>
                {" "}
                Profit And Loss
              </Link>
              <Link to="/billWiseProfit" onClick={handleSidebar}>
                {" "}
                Bill Wise Profit
              </Link>
              <Link to="/cashFlow" onClick={handleSidebar}>
                {" "}
                Cash Flow
              </Link>
              <Link to="/balanceSheet" onClick={handleSidebar}>
                {" "}
                Balance Sheet
              </Link>
            </div>

            <h2>party Report</h2>
            <div class="reports_inner_sidebar_list">
              <Link to="/partyStatement" onClick={handleSidebar}>
                Party statement
              </Link>
              <Link to="/partyWise" onClick={handleSidebar}>
                party wise profit & loss
              </Link>
              <Link to="/allParties" onClick={handleSidebar}>
                all parties
              </Link>
              <Link to="/partyReportByItem" onClick={handleSidebar}>
                party report by item
              </Link>
              <Link to="/salePurchaseByParty" onClick={handleSidebar}>
                sale purchase by party
              </Link>
              <Link to="/salePurchaseByPartyGroup" onClick={handleSidebar}>
                sale purchase by party group
              </Link>
            </div>

            <h2>Item/Stock Report</h2>
            <div class="reports_inner_sidebar_list">
              <Link to="/stockSummary" onClick={handleSidebar}>
                Stock Summary
              </Link>
              <Link to="/itemSerialReport" onClick={handleSidebar}>
                Item Serial Report
              </Link>
              <Link to="/itemBatchReport" onClick={handleSidebar}>
                Item Batch Report
              </Link>
              <Link to="/itemReportByParty" onClick={handleSidebar}>
                Item Report By Party
              </Link>
              <Link to="/itemWiseProfitLose" onClick={handleSidebar}>
                Item Wise Profit and Lose
              </Link>
              <Link to="/lowStockSummary" onClick={handleSidebar}>
                Low Stock Summary
              </Link>
              <Link to="/stockDetail" onClick={handleSidebar}>
                Stock Detail
              </Link>
              <Link to="/itemDetail" onClick={handleSidebar}>
                Item detail
              </Link>
              <Link to="/itemWiseDiscount" onClick={handleSidebar}>
                Item Wise Discount
              </Link>
            </div>
            <h2>Business Status</h2>
            <div class="reports_inner_sidebar_list">
              <Link to="/bankStatement" onClick={handleSidebar}>
                Bank Statement
              </Link>
              <Link to="/discountReport" onClick={handleSidebar}>
                Discount Report
              </Link>
              <Link to="/taxReport" onClick={handleSidebar}>
                Tax Report
              </Link>
              <Link to="/taxRateReport" onClick={handleSidebar}>
                Tax Rate Report
              </Link>
            </div>
            <h2>Expense Report</h2>
            <div class="reports_inner_sidebar_list">
              <Link to="/expenseReport" onClick={handleSidebar}>
                Expense
              </Link>
              <Link to="/expenseCategoryReport" onClick={handleSidebar}>
                Expense Category Report
              </Link>
              <Link to="/expenseItemReport" onClick={handleSidebar}>
                Expense Item Report
              </Link>
            </div>
            <h2>Sale/Purchase Order Report</h2>
            <div class="reports_inner_sidebar_list">
              <Link to="/salePurchaseOrders" onClick={handleSidebar}>
                Sale/Purchase Orders
              </Link>
              <Link to="/salePurchaseOrderItem" onClick={handleSidebar}>
                Sale/Purchase Order Item
              </Link>
            </div>
          </div>

          {/* <div class="reports_body" >
             
                </div> */}
        </section>
      </section>
    </>
  );
};

export default ReportsScreen;
