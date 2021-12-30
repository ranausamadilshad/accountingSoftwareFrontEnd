/** @format */

import React from "react";
import "./profit_loss_page.css";
function ProfitANdLoss() {
  return (
    <div>
      <div class="profit_loss_section">
        <div class="view_customer_sale_selection_fields">
          <div class="view_customer_sale_selection_box">
            <div class="customer_sale_single_between_selection_box">
              <h6>Between</h6>
              <input type="date" />
              <span>To</span>
              <input type="date" />
            </div>
          </div>
          <div class="view_customer_sale_reports_box">
            <a></a>
            <a>
              <i class="fas fa-file-excel"></i>
              <span>Excel Report</span>
            </a>
            <a>
              <i class="fas fa-print"></i>

              <span>Print</span>
            </a>
          </div>
        </div>
        <div class="profit_loss_section_head">
          <h3>Profit and loss report</h3>
        </div>
        <div class="profit_loss_report_box">
          <div class="profit_loss_report_detail">
            <span>Particulars</span>
            <span>Amount</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>sale(+)</span>
            <span class="profit_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>credit note(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>purchase(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>debit note(+)</span>
            <span class="profit_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>direct expenses(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail profit_loss_report_detail_child">
            <span>other direct expenses(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail profit_loss_report_detail_child">
            <span>payment-in discount(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>tax</span>
            <span>RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail profit_loss_report_detail_child">
            <span>tax payable(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail profit_loss_report_detail_child">
            <span>tax receivable(+)</span>
            <span class="profit_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>opening stock(-)</span>
            <span class="loss_report">RS 1000,00</span>
          </div>
          <div class="profit_loss_report_detail">
            <span>closing stock(+)</span>
            <span class="profit_report">RS 1000,00</span>
          </div>
        </div>
        <div class="profit_loss_report_gross_profit">
          <span>gross profit</span>
          <span>RS 1000,00</span>
        </div>
      </div>
      {/* <!-- profit_and_loss_page start -->/ */}

      {/* <!-- profit_and_loss_page end --> */}
    </div>
  );
}

export default ProfitANdLoss;
