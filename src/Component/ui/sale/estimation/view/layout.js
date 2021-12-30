/** @format */

import React from "react";
import { Link } from "react-router-dom";
// import "../../Css/ViewDetailsScreen.css";

const EstimationScreen = ({ data }) => {
  return (
    <>
      <div className="sale-title">Estimation/Quotation</div>
      <br />
      <section className="view_customer_sale_section">
        <div className="view_customer_sale_product_invoice_list">
          <div className="view_customer_sale_product_invoice_table_header">
            <span>TRANSACTIONS</span>
          </div>
          <div className="view_customer_sale_product_invoice_detail">
            <div className="view_customer_sale_product_invoice_search_filter"></div>
            <div className="view_customer_sale_product_invoice_add_sale">
              <Link to="/createestimation" className="btn btn-primary">
                Add Estimation
              </Link>
            </div>
          </div>

          <div className="view_customer_sale_product_invoice_table">
            <table>
              <tbody>
                <>
                  <tr className="table_header">
                    <th>
                      <div class="fields_with_filter">
                        <span>Name</span>
                        <i class="fas fa-filter"></i>
                      </div>
                    </th>
                    <th>
                      <div class="fields_with_filter">
                        <span>data</span>
                        <i class="fas fa-filter"></i>
                      </div>
                    </th>
                    <th>
                      <div class="fields_with_filter">
                        <span>Total Amount</span>
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
                        <span>Status</span>
                        <i class="fas fa-filter"></i>
                      </div>
                    </th>
                    <th>
                      <div class="fields_with_filter">
                        <span>Action</span>
                      </div>
                    </th>
                  </tr>
                </>
                {data &&
                  data.map((data) => (
                    <>
                      <tr className="table_body">
                        <td>Usama</td>
                        <td>{data.invoiceDate}</td>
                        <td>{data.totalAmount}</td>
                        <td>{data.totalAmount}</td>
                        <td>checked</td>
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
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstimationScreen;
