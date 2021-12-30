/** @format */

import React from "react";
// import "../../Css/ViewDetailsScreen.css";
import { Link } from "react-router-dom";
import Status from "../../../../app/cashANdBank/cheque/updateStatus/index";
// import Status from "./status";

const ChequeScreen = ({ details }) => {
  return (
    <>
      <div className="sale-title">Cheque</div>
      <br />
      <section className="view_customer_sale_section">
        <div className="view_customer_sale_product_invoice_list">
          <div className="view_customer_sale_product_invoice_table_header">
            <span>TRANSACTIONS</span>
          </div>
          <div className="view_customer_sale_product_invoice_detail">
            <div className="view_customer_sale_product_invoice_search_filter"></div>
            <div className="view_customer_sale_product_invoice_add_sale">
              <div className="product_invoice_search_filter">
                <i className="fal fa-search"></i>
                <input type="search" />
              </div>
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
                      <span>Name</span>
                      <i class="fas fa-filter"></i>
                    </div>
                  </th>
                  <th>
                    <div class="fields_with_filter">
                      <span>Ref No</span>
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
                      <span>Amount</span>
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
                {details &&
                  details.map((data, index) => (
                    <tr className="table_body">
                      <td>{data.date}</td>
                      <td>5000</td>
                      <td>{data.refNo}</td>
                      <td>{data.type}</td>
                      <td>{data.amount}</td>
                      <td>{data.status}</td>
                      {/* <td>Deposit</td> */}
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
                            <Link to={`/Status/${index}`}>
                              <i
                                data-toggle="modal"
                                data-target="#exampleModal"
                                className="fas fa-pen">
                                {data.status === 0 ? (
                                  <p>deposite</p>
                                ) : (
                                  <p>reopen</p>
                                )}
                              </i>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Status />
      {/* <Status /> */}
    </>
  );
};

export default ChequeScreen;
