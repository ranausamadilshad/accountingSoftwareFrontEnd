/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExpenseScreen() {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div>
      <div>
        <section class="all_created_parties_section">
          <div class="all_created_parties_inner_section">
            <div class="single_part_detail">
              <div class="search_add_party_btn_section">
                <div class="search_add_party_btn">
                  <div className="search_party_btn">
                    <i
                      className="far fa-search"
                      onClick={() =>
                        toggleSearch
                          ? setToggleSearch(false)
                          : setToggleSearch(true)
                      }></i>
                  </div>
                  <div class="add_party_btn">
                    <Link to="/add-expense">
                      <div
                        data-toggle="modal"
                        data-target="#CreateParties"
                        className="btn btn-primary btn-sm">
                        <i class="fal fa-plus"></i> Add Expense
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="add_party_search_field"
                  style={{ display: toggleSearch ? "block" : "none" }}>
                  <span>
                    {" "}
                    <input type="search" id="search" placeholder="Search..." />
                    <i
                      className="fal fa-times"
                      onClick={() => setToggleSearch(false)}></i>
                  </span>
                </div>
              </div>

              <div class="single_party_data_table">
                <table>
                  <tbody>
                    <tr class="single_party_table_header">
                      <th class="party_filter_box">
                        <span>Category</span>
                        <div class="party_filter_box_action">
                          <a
                            className="dropdown-toggle single_party_filter"
                            type="button"
                            id="singlepartyfilter"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fas fa-filter"></i>
                          </a>
                          <div
                            className="single_party_filter_do_action dropdown-menu"
                            aria-labelledby="singlepartyfilter">
                            <form>
                              <div className="party_filter_checkboxs">
                                <div className="party_filter_checkbox">
                                  <input type="radio" name="filter" />
                                  <label>All</label>
                                </div>
                                <div className="party_filter_checkbox">
                                  <input type="radio" name="filter" />
                                  <label>To Receive</label>
                                </div>
                                <div className="party_filter_checkbox">
                                  <input type="radio" name="filter" />
                                  <label>To Pay</label>
                                </div>
                                <div className="party_filter_btns">
                                  <button className="btn btn secondary mr-1">
                                    clear
                                  </button>
                                  <button className="btn btn secondary">
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </th>
                      <th class="party_price_box">Amount</th>
                    </tr>

                    <tr class="single_party_table_body">
                      <td>Health Care Center</td>
                      <td>
                        100000$
                        <div className="single_party_crud_action">
                          <a
                            className="dropdown-toggle single_party_crud"
                            type="button"
                            id="PartyDropDownMenuTwo"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fas fa-ellipsis-v"></i>{" "}
                          </a>
                          <div
                            className="single_party_crud_do_action dropdown-menu"
                            aria-labelledby="PartyDropDownMenuTwo">
                            {/* <a href="#"><i className="fas fa-eye"></i><span>View</span></a> */}
                            <a data-toggle="modal" data-target="#UpdateParties">
                              <i className="fas fa-pen"></i>
                              <span>Edit</span>
                            </a>
                            <a data-toggle="modal" data-target="#DeleteItems">
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
            </div>
          </div>
          <div class="all_created_parties_inner_section_two">
            <div class="parties_profile_data">
              <div class="parties_profile_name_field">
                <h3>Charges on Loan</h3>
              </div>
              <div class="parties_profile_data_all_other_field">
                <table>
                  <tr>
                    <td></td>
                    <td>
                      Total : <span className="expense">Rs 0.00</span>
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      Balance : <span className="expense">Rs 0.00</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="parties_transaction_table">
              <div class="parties_transaction_table_header">
                <h4>Transaction</h4>
                <div class="parties_transaction_table_serarch">
                  <i class="far fa-search"></i>
                  <input type="search" placeholder="search.." />
                </div>
              </div>

              <div class="parties_transaction_table_box">
                <table>
                  <tbody>
                    <tr class="table_header">
                      <th>Payment Type</th>
                      <th>Expense No.</th>
                      <th>Party</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Balance</th>
                      <th class="view_department_action">Actions</th>
                    </tr>

                    <tr class="table_body">
                      <td>Health Care Center</td>
                      <td>567</td>
                      <td>Party</td>
                      <td>09/09/2002</td>
                      <td>50000</td>
                      <td>50000</td>
                      <td>
                        <div class="view_department_action_btn view_department_action">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            id="PartyDropDownMenu"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            {" "}
                            <i class="fas fa-ellipsis-v"></i>{" "}
                          </button>
                          <div
                            class=" dropdown-menu view_department_do_action"
                            aria-labelledby="PartyDropDownMenu">
                            <a>
                              <i
                                class="fas fa-pen"
                                data-toggle="modal"
                                data-target="#EditItems"></i>
                              <span>Edit</span>
                            </a>
                            <a>
                              <i class="fas fa-trash-alt"></i>
                              <span>Delete</span>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExpenseScreen;
