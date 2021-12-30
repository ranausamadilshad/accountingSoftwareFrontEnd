/** @format */

import React from "react";
import { Link } from "react-router-dom";

function CashFlowScreen({ data }) {
  return (
    <section className="view_customer_sale_section">
      <div className="view_customer_sale_body_detail_one">
        <div className="view_customer_sale_selection_fields">
          <div className="view_customer_sale_selection_box">
            <div className="customer_sale_single_selection_box">
              <select>
                <option lable="paymentOut">Month</option>
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
        <div className="view_customer_sale_product_invoice_table_header">
          <span>Cash In Hand RS :00</span>
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
                    <span>REF No</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span> Name</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Category</span>
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
                    <span>Cash in</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Cash out</span>
                    <i class="fas fa-filter"></i>
                  </div>
                </th>
                <th>
                  <div class="fields_with_filter">
                    <span>Runing</span>
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
              {data &&
                data.map((data) => (
                  <tr className="table_body">
                    <td>{data.date}</td>
                    <td>{data.referenceNo}</td>
                    <td>{data.partyId}</td>
                    <td>{data.transactionType}</td>
                    <td>{data.partyId}</td>
                    <td>{data.cashIn}</td>
                    <td>{data.cashOut}</td>
                    <td>{data.runningCashInHand}</td>

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
                ))}
            </tbody>
          </table>
        </div>
        <hr style={{ marginTop: "10%" }} />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p>
                <b>Total Cash-in :Rs 1000</b>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p>
                <b>Total Cash-out:Rs 2000</b>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p>
                <b>Total Cash-in-Hand:Rs 500</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CashFlowScreen;
