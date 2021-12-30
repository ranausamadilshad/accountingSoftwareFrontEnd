/** @format */

import React from "react";
// import "../../Css/ViewDetailScreen.css";
import { Link } from "react-router-dom";
import AddPaymentOut from "../../../../app/purchase/paymentOut/create/index";

function PaymentOutScreen({ details }) {
  return (
    <div>
      <section className="view_customer_sale_section">
        <div className="view_customer_sale_body_detail_one">
          <div className="view_customer_sale_selection_fields">
            <div className="view_customer_sale_selection_box">
              <div className="customer_sale_single_selection_box">
                <select>
                  <option lable="paymentOut">payment Out</option>
                </select>
              </div>
              <div className="customer_sale_single_between_selection_box">
                <h6>Between</h6>
                <input type="date" />
                <span>To</span>
                <input type="date" />
              </div>
            </div>
            <div className="view_customer_sale_reports_box">
              <a>
                <i className="fas fa-chart-line"></i>
                <span>Graph</span>
              </a>
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

          {/* <div className="view_customer_sale_counting_field">
                        <div className="view_customer_sale_counting_field_box">
                            <span>Paid</span>
                            <span>RS 4000</span>
                        </div>
                        <div className="view_customer_sale_counting_field_plus_box">
                            <i className="fal fa-plus"></i>
                        </div>
                        <div className="view_customer_sale_counting_field_box">
                            <span>Un Paid</span>
                            <span>RS 4000</span>
                        </div>
                        <div className="view_customer_sale_counting_field_plus_box">
                            <i className="fal fa-equals"></i>
                        </div>
                        <div className="view_customer_sale_counting_field_box">
                            <span>Total</span>
                            <span>RS 4000</span>
                        </div>
                    </div> */}
        </div>

        <div className="view_customer_sale_product_invoice_list">
          <div className="view_customer_sale_product_invoice_table_header">
            <span>TRANSACTIONS</span>
          </div>
          <div className="view_customer_sale_product_invoice_detail">
            <div className="view_customer_sale_product_invoice_search_filter">
              <div className="product_invoice_search_filter">
                <i className="fal fa-search"></i>
                <input type="search" />
              </div>
            </div>
            <div className="view_customer_sale_product_invoice_add_sale">
              <button
                data-toggle="modal"
                data-target="#paymentout"
                className="btn btn-primary">
                Add Payment Out
              </button>
            </div>
          </div>

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
                      <span>REF No</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Part Name</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Category name</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>type</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Total</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>paidAmount</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Balance</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Print/Screen</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                </tr>
                {/* {details &&
                  details.paymentOutArray.map((data, index) => ( */}
                <tr className="table_body">
                  <td>92939</td>
                  <td>5000</td>
                  <td>shery</td>
                  <td>q91</td>
                  <td>iq1991</td>
                  <td>5000</td>
                  <td>jq919</td>
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
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <AddPaymentOut />
      {/* <CreatePaymentOut /> */}
    </div>
  );
}

export default PaymentOutScreen;
