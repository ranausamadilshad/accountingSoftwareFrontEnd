/** @format */

import React from "react";
import { Link } from "react-router-dom";

function BillWiseProfit() {
  return (
    <section className="view_customer_sale_section">
      <div className="view_customer_sale_body_detail_one">
        <div className="view_customer_sale_selection_fields">
          <div className="view_customer_sale_selection_box">
            <div className="customer_sale_single_between_selection_box">
              <h6>Between</h6>
              <input type="date" />
              <span>To</span>
              <input type="date" />
            </div>
          </div>
          <div className="view_customer_sale_reports_box">
            <a>
              <i className="fas fa-file-excel"></i>
              <span>Excel Report</span>
            </a>
            <a>
              <i className="fas fa-print"></i>
              <span>Print</span>
            </a>
          </div>
        </div>

        <div className="view_customer_sale_product_invoice_table_header">
          <span>Profit On Sale Invoices</span>
        </div>
        <div className="view_customer_sale_product_invoice_detail">
          <div className="view_customer_sale_product_invoice_search_filter">
            <div className="product_invoice_search_filter">
              <i className="fal fa-search"></i>
              <input type="search" />
            </div>
          </div>
        </div>
      </div>

      <div className="view_customer_sale_product_invoice_list">
        <div className="view_customer_sale_product_invoice_table">
          <table>
            <tbody>
              <tr className="table_header">
                <th>
                  <div class="fields_with_filter">
                    <span>Date</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Invoice No</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Party</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Total Sale Amout</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Profit/Loss</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Details</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
              </tr>

              <tr className="table_body">
                <td>12/3/2020</td>
                <td>5000</td>
                <td>shery</td>
                <td>cash</td>
                <td>5000</td>

                <td>
                  <div className="sale_invoice_action_btn">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="Sale_invoice"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div
                      className="sale_invoice_do_action dropdown-menu"
                      aria-labelledby="Sale_invoice">
                      <a>
                        <i className="fas fa-pen"></i>
                        <span>Edit</span>
                      </a>
                      <a>
                        <i className="fas fa-trash-alt"></i>
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="table_body">
                <td>12/3/2020</td>
                <td>5000</td>
                <td>shery</td>
                <td>cash</td>
                <td>5000</td>

                <td>
                  <div className="sale_invoice_action_btn">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="Sale_invoice"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div
                      className="sale_invoice_do_action dropdown-menu"
                      aria-labelledby="Sale_invoice">
                      <a>
                        <i className="fas fa-pen"></i>
                        <span>Edit</span>
                      </a>
                      <a>
                        <i className="fas fa-trash-alt"></i>
                        <span>Delete</span>
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: "10px" }}>
          <b>Summary</b>
        </p>
        <p>Total Sale Amount: ₨ 0.00</p>
        <p>Total Profit(+)/Loss(-): ₨ 0.00</p>
      </div>
    </section>
  );
}

export default BillWiseProfit;
