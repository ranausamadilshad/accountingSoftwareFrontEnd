/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import PartiesPage from "../../Pages/PartiesPage";
import SettingPage from "../../Pages/SettingPage";
import Home from "../../Component/Home/Home";
import Items from "../../Component/app/item/view";
import SaleInvoices from "../../Component/app/sale/saleInvoice/index";
import Estimation from "../../Component/app/sale/estimation/view/index";
import PaymentIn from "../../Component/app/sale/paymentIn/view";
import SaleOrder from "../../Component/app/sale/saleOrder/view";
import DeliveryChallan from "../../Component/app/sale/deliveryChallan/view";
import SaleReturn from "../../Component/app/sale/saleReturn/view";
import PurchaseBills from "../../Component/app/purchase/purchaseBills/view";
import BankAccounts from "../../Component/BankAccounts/BankAccounts";
import CashInHands from "../../Component/app/cashANdBank/cashInHand/view";
import Cheque from "../../Component/app/cashANdBank/cheque/view/index";
import LoanInAccounts from "../../Component/LoanInAccounts/LoanInAccounts";
import Reports from "../../Component/Reports/Reports";
import Expense from "../../Component/app/expense/view";
import AddExpense from "../../Component/app/expense/create";
import CreateSaleInvoices from "../../Component/app/sale/saleInvoice/create";
import CreateEstimation from "../../Component/app/sale/estimation/create/index";
import CreateSaleOrder from "../../Component/app/sale/saleOrder/create";
import CreateDeliveryChallan from "../../Component/app/sale/deliveryChallan/create";
import CreateSaleReturn from "../../Component/app/sale/saleReturn/create";
import AddPurchase from "../../Component/app/purchase/purchaseBills/create";
import PaymentOut from "../../Component/app/purchase/paymentOut/view";
import PurchaseOrder from "../../Component/app/purchase/purchaseOrder/view";
import AddPurchaseOrder from "../../Component/app/purchase/purchaseOrder/create";
import PurchaseReturn from "../../Component/app/purchase/purchaseReturn/view";
import AddReturn from "../../Component/app/purchase/purchaseReturn/create";
import AddPaymentOut from "../../Component/app/purchase/paymentOut/create";
import AdjustCash from "../../Component/AdjustCash/AdjustCash";
import SalePurchaseByParty from "../../Component/SalePurchaseByParty/SalePurchaseByParty";
import SalePurchaseByPartyGroup from "../../Component/SalePurchaseByPartyGroup/SalePurchaseByPartyGroup";
import AllParties from "../../Component/AllParties/AllPartiesScreen";
import AllTransaction from "../../Component/app/reports/allTransaction/view/index";
import BillWiseProfit from "../../Component/Reports/transactionReport/billWiseProfit";
import ProfitANdLoss from "../../Component/Reports/transactionReport/profitANdLoss";
import BalanceSheet from "../../Component/Reports/transactionReport/balanceSheet";
import ReportPdfInvoice from "../../Component/ReportPdfInvoice/ReportPdfInvoice";
import StockSummary from "../../Component/StockSummary/StockSummary";
import ItemSerialReport from "../../Component/ItemSerialReport/ItemSerialReport";
import ItemBatchReport from "../../Component/ItemBatchReport/ItemBatchReport";
import ItemReportByParty from "../../Component/ItemReportByParty/ItemReportByParty";
import ItemWise from "../../Component/ItemWise/ItemWise";
import LowStockSummary from "../../Component/LowStockSummary/LowStockSummary";
import StockDetail from "../../Component/StockDetail/StockDetail";
import ItemDetail from "../../Component/ItemDetail/ItemDetail";
import ItemWiseDiscount from "../../Component/ItemWiseDiscount/ItemWiseDiscount";
import BankStatement from "../../Component/BankStatement/BankStatement";
import DiscountReport from "../../Component/DiscountReport/DiscountReport";
import TaxReport from "../../Component/TaxReport/TaxReport";
import TaxRateReport from "../../Component/TaxRateReport/TaxRateReport";
import ExpenseReport from "../../Component/ExpenseReport/ExpenseReport";
import ExpenseCategoryReport from "../../Component/ExpenseCategoryReport/ExpenseCategoryReport";
import ExpenseItemReport from "../../Component/ExpenseItemReport/ExpenseItemReport";
import SalePurchaseOrders from "../../SalePurchaseOrders/SalePurchaseOrders";
import SalePurchaseOrdersItem from "../../Component/SalePurchaseOrderItem/SalePurchaseOrdersItem";
import AddPurchaseReport from "../../Component/Reports/transactionReport/Purchase/addPurchase";
import PurchaseTransaction from "../../Component/Reports/transactionReport/Purchase/purchaseTransaction";
import Status from "../../Component/app/cashANdBank/cheque/updateStatus/index";
import SaleReport from "../../Component/app/reports/sale/view/index";
import DayBook from "../../Component/app/reports/dayBook/view/index";
import PreviewSaleInvoice from "../../Component/app/reports/sale/preview/index";
import PartyWise from "../../Component/app/reports/partyReports/partyWise/view/index";
import PartyStatement from "../../Component/app/reports/partyReports/partyStatement/view/index";
import CashFlow from "../../Component/app/reports/cashFlow/view/index";
import PartyReportsByItem from "../../Component/app/reports/partyReports/partyReportsByItem/view/index";
import CreateCompany from "../../Component/app/company/create/index";
import { CreateSaleInvoicesCredit } from "../../Component/app/sale/saleInvoice/create/index";
import ViewEmployee from "../../Component/app/employee/view/index";
import CreateItems from "../../Component/app/item/create/index";

const BodyContent = ({ sideBar, reportSidebar, setReportSidebar }) => {
  return (
    <>
      <section
        class={
          sideBar
            ? "content_body_wrapper"
            : "content_body_wrapper responsive_content_body"
        }>
        <div class="content_body_wrapper_container">
          <div class="content_body_wrapper_main">
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/viewEmployee">
                <ViewEmployee />
              </Route>
              <Route path="/parties">
                <PartiesPage />
              </Route>
              <Route path="/items">
                <Items />
              </Route>
              <Route path="/createCompany">
                <CreateCompany />
              </Route>
              <Route path="/saleinvoices">
                <SaleInvoices />
              </Route>

              <Route path="/estimation">
                <Estimation />
              </Route>
              <Route path="/paymentin">
                <PaymentIn />
              </Route>
              <Route path="/saleorder">
                <SaleOrder />
              </Route>
              <Route path="/deliverychallan">
                <DeliveryChallan />
              </Route>

              <Route path="/salereturn">
                <SaleReturn />
              </Route>
              <Route path="/createsaleinvoices">
                <CreateSaleInvoices />
              </Route>
              <Route path="/createSaleCredit">
                <CreateSaleInvoicesCredit />
              </Route>
              <Route path="/createestimation">
                <CreateEstimation />
              </Route>
              <Route path="/createsaleorder">
                <CreateSaleOrder />
              </Route>
              <Route path="/createdeliverychallan">
                <CreateDeliveryChallan />
              </Route>
              <Route path="/createsalereturn">
                <CreateSaleReturn />
              </Route>
              <Route path="/purchasebills">
                <PurchaseBills />
              </Route>
              <Route path="/addPurchase">
                <AddPurchase />
              </Route>
              <Route path="/purchaseout">
                <PaymentOut />
              </Route>
              <Route path="/addPayment">
                <AddPaymentOut />
              </Route>
              <Route path="/purchaseorder">
                <PurchaseOrder />
              </Route>
              <Route path="/addPurchaseOrder">
                <AddPurchaseOrder />
              </Route>
              <Route path="/purchasereturn">
                <PurchaseReturn />
              </Route>
              <Route path="/addReturn">
                <AddReturn />
              </Route>
              <Route path="/Status/:id">
                <Status />
              </Route>
              <Route path="/expenses">
                <Expense />
              </Route>
              <Route path="/add-expense">
                <AddExpense />
              </Route>
              <Route path="/bankaccounts">
                <BankAccounts />
              </Route>
              <Route path="/cashinhands">
                <CashInHands />
              </Route>
              <Route path="/adjustcash">
                <AdjustCash />
              </Route>
              <Route path="/cheque">
                <Cheque />
              </Route>
              <Route path="/loaninaccounts">
                <LoanInAccounts />
              </Route>

              <Route path="/daybook">
                <DayBook />
              </Route>
              <Route path="/reportSale">
                {/* <SaleTransaction /> */}
                <SaleReport />
              </Route>
              <Route path="/reportAddSale">{/* <AddSale /> */}</Route>
              <Route path="/reportAddPurchase">
                <AddPurchaseReport />
              </Route>
              <Route path="/reportPurchase">
                <PurchaseTransaction />
              </Route>
              <Route path="/allTransaction">
                <AllTransaction />
              </Route>
              <Route path="/billWiseProfit">
                <BillWiseProfit />
              </Route>
              <Route path="/cashFlow">
                <CashFlow />
              </Route>
              <Route path="/profitAndLoss">
                <ProfitANdLoss />
              </Route>
              <Route path="/balanceSheet">
                <BalanceSheet />
              </Route>
              <Route path="/setting">
                <SettingPage />
              </Route>
              <Route path="/partyStatement">
                <PartyStatement />
              </Route>
              <Route path="/partyWise">
                <PartyWise />
              </Route>
              <Route path="/allParties">
                <AllParties />
              </Route>
              <Route path="/partyReportByItem">
                <PartyReportsByItem />
              </Route>
              <Route path="/previewSaleInvoices/:id">
                <PreviewSaleInvoice />
              </Route>
              <Route exact path="/salePurchaseByParty">
                <SalePurchaseByParty />
              </Route>
              <Route exact path="/salePurchaseBypartyGroup">
                <SalePurchaseByPartyGroup />
              </Route>
              <Route path="/invoice/:id">
                <ReportPdfInvoice />
              </Route>
              <Route path="/stockSummary">
                <StockSummary />
              </Route>
              <Route path="/itemSerialReport">
                <ItemSerialReport />
              </Route>
              <Route path="/itemBatchReport">
                <ItemBatchReport />
              </Route>
              <Route path="/itemReportByParty">
                <ItemReportByParty />
              </Route>
              <Route exact path="/itemWiseProfitLose">
                <ItemWise />
              </Route>
              <Route path="/lowStockSummary">
                <LowStockSummary />
              </Route>
              <Route path="/stockDetail">
                <StockDetail />
              </Route>
              <Route exact path="/itemDetail">
                <ItemDetail />
              </Route>
              <Route exact path="/itemWiseDiscount">
                <ItemWiseDiscount />
              </Route>
              <Route path="/bankStatement">
                <BankStatement />
              </Route>
              <Route exact path="/discountReport">
                <DiscountReport />
              </Route>
              <Route exact path="/taxReport">
                <TaxReport />
              </Route>
              <Route exact path="/taxRateReport">
                <TaxRateReport />
              </Route>
              <Route exact path="/expenseReport">
                <ExpenseReport />
              </Route>
              <Route exact path="/expenseCategoryReport">
                <ExpenseCategoryReport />
              </Route>
              <Route exact path="/expenseItemReport">
                <ExpenseItemReport />
              </Route>
              <Route exact path="/salePurchaseOrders">
                <SalePurchaseOrders />
              </Route>
              <Route exact path="/salePurchaseOrderItem">
                <SalePurchaseOrdersItem />
              </Route>
            </Switch>
            <Reports
              reportSidebar={reportSidebar}
              setReportSidebar={setReportSidebar}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyContent;
