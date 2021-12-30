/** @format */

import React from "react";

const CashInHandsScreen = ({ details, total }) => {
  return (
    <>
      <div className="sale-title">Cash In Hand</div>
      <br />
      <section className="view_customer_sale_section">
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
                      <span>Date</span>
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
                      <span>Action</span>
                    </div>
                  </th>
                </tr>
                {details &&
                  details.map((data, index) => (
                    <tr className="table_body">
                      <td>{data.date}</td>
                      <td>{data.name}</td>
                      <td>{data.type}</td>
                      <td>{data.amount}</td>
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
        </div>
        <label>Total</label>
        <span>:{total && total.totatBalance}</span>
      </section>
    </>
  );
};

export default CashInHandsScreen;
