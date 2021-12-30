/** @format */

import React from "react";
// import "./profit_loss_page.css"
import "./balance_sheet.css";

function BalanceSheet() {
  return (
    <div>
      <div class="balance_sheet_section">
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
        <div class="balance_sheet_section_head">
          <h3>balance sheet an on sep 17 2021</h3>
        </div>
        <div class="balance_sheet_boxes">
          <div class="balance_sheet_report_box">
            <div class="balance_sheet_report_detail balance_sheet_report_detail_head balance_sheet_report_detail_border">
              <span>Assets</span>
              <span>Amount</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span class="balance_sheet_report_main_point">
                Current Assets
              </span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>credit note(-)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>purchase(-)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail balance_sheet_report_detail_head ">
              <span>Assets Total</span>
              <span>50000</span>
            </div>
          </div>

          <div class="balance_sheet_report_box">
            <div class="balance_sheet_report_detail balance_sheet_report_detail_head balance_sheet_report_detail_border">
              <span>Assets</span>
              <span>Amount</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span class="balance_sheet_report_main_point">
                Current Liabilites
              </span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>credit note(-)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>purchase(-)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail">
              <span>debit note(+)</span>
              <span>RS 1000,00</span>
            </div>
            <div class="balance_sheet_report_detail balance_sheet_report_detail_head">
              <span>Assets Total</span>
              <span>50000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceSheet;
