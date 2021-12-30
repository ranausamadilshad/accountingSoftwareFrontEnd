/** @format */

import React from "react";

const PartyWiseScreen = ({ data }) => {
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
        </div>

        <div className="view_customer_sale_product_invoice_list">
          <div className="view_customer_sale_product_invoice_table">
            <table>
              <tbody>
                <tr className="table_header">
                  <th>
                    <div className="fields_with_filter">
                      <span>Party</span>
                    </div>
                  </th>
                  {/* <th>
                    <div className="fields_with_filter">
                      <span>Phone No</span>
                    </div>
                  </th> */}
                  <th>
                    <div className="fields_with_filter">
                      <span>Total Sale Amount</span>
                    </div>
                  </th>
                  <th>
                    <div className="fields_with_filter">
                      <span>Profit(+) / Loss(-)</span>
                    </div>
                  </th>
                </tr>
                {data &&
                  data.map((data) => (
                    <tr className="table_body">
                      <td>{data.partyId}</td>
                      {/* <td>{data.partyId}</td> */}
                      <td>{data.totalSaleAmount}</td>
                      <td>{data.profitLossAmount}</td>
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
                  <b>Summary</b>
                </p>
                <p>
                  <b>Total Sale Amount</b> : Rs:1000
                </p>
                <p>
                  <b>Total Profit(+)/Lose(-)</b> : Rs:200
                </p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5"></div>
              <div className="col-lg-2 col-md-2 col-sm-2"></div>
              <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyWiseScreen;
