/** @format */

import React from "react";

const PartyReportsByItemScreen = ({ data }) => {
  return (
    <>
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
              </a>
              <a>
                <i className="fas fa-print"></i>
              </a>
            </div>
          </div>
          <div
            className="customer_sale_single_selection_box"
            style={{ display: "column" }}>
            <h6>Details</h6>
            <div>
              <label className="mr-1">
                <small>Filters</small>
              </label>
              <input type="text" placeholder="Party name" />
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
                      <span>Party Name</span>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Sale Quantity</span>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Sale Amount</span>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Purchase Quantity</span>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Purchase Amount</span>
                    </div>
                  </th>
                </tr>
                {data &&
                  data.map((data) => (
                    <tr className="table_body">
                      <td>{data.partyId}</td>
                      <td>{data.saleQuantity}</td>
                      <td>{data.saleAmount}</td>
                      <td>{data.purchaseQuantity}</td>
                      <td>{data.purchaseAmount}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <hr style={{ marginTop: "10%" }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <p>
                  <b>Total</b>
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">0</div>
              <div className="col-lg-2 col-md-2 col-sm-2">Rs :00</div>
              <div className="col-lg-2 col-md-2 col-sm-2">0</div>
              <div className="col-lg-2 col-md-2 col-sm-2">Rs :00</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyReportsByItemScreen;
