/** @format */

import React from "react";
import { Link } from "react-router-dom";

const PartyStatementScreen = ({ data }) => {
  return (
    <>
      <section className="view_customer_sale_section">
        <div className="view_customer_sale_body_detail_one">
          <div className="view_customer_sale_selection_fields">
            <div className="view_customer_sale_selection_box">
              <div className="customer_sale_single_selection_box">
                <select>
                  <option></option>
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
                <i className="fas fa-file-excel"></i>
                <span>Excel Report</span>
              </a>
              <a>
                <i className="fas fa-print"></i>
                <span>Print</span>
              </a>
            </div>
          </div>
        </div>

        <div className="view_customer_sale_product_invoice_list">
          <div className="view_customer_sale_product_invoice_table">
            <table>
              <tbody>
                <tr className="table_header">
                  {/* <th>
                    <div class="fields_with_filter">
                      <span>Date</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th> */}
                  <th>
                    <div class="fields_with_filter">
                      <span>TXN Type</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  {/* <th>
                    <div class="fields_with_filter">
                      <span>Ref No</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Payment Type</span>
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
                      <span>Received /Paid</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span> TXN Balance</span>
                    </div>
                  </th> */}
                  <th>
                    <div class="fields_with_filter">
                      <span> Receiveable Balance</span>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span> Payable Balance</span>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span> Print</span>
                    </div>
                  </th>
                </tr>
                {data &&
                  data.map((data) => (
                    <tr className="table_body">
                      {/* <td>12/3/2020</td> */}
                      <td>{data.partyId}</td>
                      {/* <td>shery</td>
                      <td>cash</td>
                      <td>5000</td>
                      <td>5000</td>
                      <td>5000</td> */}
                      <td>{data.totalSaleAmount}</td>
                      <td>{data.profitLossAmount}</td>
                      <td>Print</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <hr style={{ marginTop: "10%" }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h4>
                  <b>Party Statement Summary</b>
                </h4>
              </div>
              {/* <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div> */}
            </div>
            {/* <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <p>
                    <b>Party Statement Summary</b>
                  </p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
              </div> */}
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>
                  <b>Total Sale:Rs 1000</b>
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>
                  <b>Total Purchase:Rs 2000</b>
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>
                  <b>Total Expense:Rs 500</b>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>
                  <b>Total Money In:Rs 100</b>
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>
                  <b>Total Money Out:Rs 200</b>
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>
                  <b>Total Receiveable:Rs 1500</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyStatementScreen;
