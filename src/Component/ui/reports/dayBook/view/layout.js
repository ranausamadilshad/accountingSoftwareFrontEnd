/** @format */

import React from "react";
import { Link } from "react-router-dom";
function DayBookScreen({ data }) {
  return (
    <div>
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
          <div className="product_invoice_search_filter">
            <i className="fal fa-search"></i>
            <input type="search" />
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
          <div className="view_customer_sale_product_invoice_detail">
            <div className="view_customer_sale_product_invoice_search_filter"></div>
          </div>

          <div className="view_customer_sale_product_invoice_table">
            <table>
              <tbody>
                <tr className="table_header">
                  <th>
                    <div class="fields_with_filter">
                      <span>Name</span>
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
                      <span>Type</span>
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
                      <span>Money in</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Money Out</span>
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
                {/* {data &&
                  data.map((data) => ( */}
                <tr className="table_body">
                  <td>jsjsj</td>
                  <td>jsjsj</td>
                  <td>jsjsj</td>
                  <td>jsjsj</td>
                  <td>jsjsj</td>
                  <td>jsjsj</td>

                  {/* <td>{data.partyId}</td>
                      <td>{data.referenceNo}</td>
                      <td>{data.transactionType}</td>
                      <td>{data.totalAmount}</td>
                      <td>{data.moneyIn}</td>
                      <td>{data.moneyOut}</td> */}
                  <td>
                    Print
                    {/* <button className="btn btn-success btn-sm">
                          Print Screen{" "}
                        </button> */}
                  </td>

                  {/* <td>
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
                  </td> */}
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
          <hr style={{ marginTop: "10%" }} />
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <p>
                  <b>Total Amount: </b>1800
                </p>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2"></div>
              <div class="col-lg-3 col-md-3 col-sm-3">
                <p>
                  {" "}
                  <b>Money In:</b> 1001
                </p>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3">
                <p>
                  {" "}
                  <b>Money Out:</b>1099
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DayBookScreen;
