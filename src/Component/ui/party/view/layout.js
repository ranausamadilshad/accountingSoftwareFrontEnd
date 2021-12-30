/** @format */

import React, { useState } from "react";
import CreatePartiess from "../../../app/party/create";
import DeleteParties from "../../../app/party/delete/index";
import Update from "../../../app/party/update/index";

const PartiesScreen = ({
  data,
  id,
  setId,
  getSingleData,
  getSingleTransaction,
}) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  console.log("Show Dtaa", getSingleData);
  return (
    <>
      <section className="all_created_parties_section">
        <div className="all_created_parties_inner_section">
          <div className="single_part_detail">
            <div className="search_add_party_btn_section">
              <div className="search_add_party_btn">
                <div className="search_party_btn">
                  <i
                    className="far fa-search"
                    onClick={() =>
                      toggleSearch
                        ? setToggleSearch(false)
                        : setToggleSearch(true)
                    }></i>
                </div>
                <div className="">
                  <button
                    data-toggle="modal"
                    data-target="#CreatePartiess"
                    className="btn btn-primary btn-sm">
                    <i className="fal fa-plus"></i> Add party
                  </button>
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

            <div className="single_party_data_table">
              <table>
                <tbody>
                  <tr className="single_party_table_header">
                    <th className="party_filter_box">
                      <span>Party</span>
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
                    <th className="party_price_box">Amount</th>
                  </tr>
                  {data &&
                    data.parties.map((data) => (
                      <tr
                        className="single_party_table_body"
                        onClick={() => setId(data.partyId)}>
                        <td>{data.partyName}</td>
                        <td
                          style={{
                            color:
                              data.toReceive >= data.toPay ? "green" : "red",
                          }}>
                          {data.toReceive >= data.toPay
                            ? data.toReceive
                            : data.toPay}
                          <div className="single_party_crud_action">
                            <a
                              className="dropdown-toggle single_party_crud"
                              type="button"
                              id="PartyDropDownMenuTwo"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              <i
                                className="fas fa-ellipsis-v"
                                onClick={() => setId(data.partyId)}></i>{" "}
                            </a>
                            <div
                              className="single_party_crud_do_action dropdown-menu"
                              aria-labelledby="PartyDropDownMenuTwo">
                              <a
                                data-toggle="modal"
                                data-target="#UpdateParties">
                                <i className="fas fa-pen"></i>
                                <span>Edit</span>
                              </a>
                              <a data-toggle="modal" data-target="#DeleteParty">
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
        </div>
        <div className="all_created_parties_inner_section_two">
          <div className="parties_profile_data">
            <div className="parties_profile_name_field">
              <h3></h3>
            </div>
            <div className="parties_profile_data_all_other_field">
              <table>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>{getSingleData && getSingleData.party.partyName}</td>
                </tr>

                <tr>
                  <td>
                    <b>Address</b>
                  </td>
                  <td>{getSingleData && getSingleData.party.address}</td>
                </tr>
                <tr>
                  <td>
                    <b>Phone No</b>
                  </td>
                  <td>{getSingleData && getSingleData.party.phoneNo}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="parties_transaction_table">
            <div className="parties_transaction_table_header">
              <h4>Transaction</h4>
              <div className="parties_transaction_table_serarch">
                <i className="far fa-search"></i>
                <input type="search" placeholder="search.." />
              </div>
            </div>

            <div className="parties_transaction_table_box">
              <table>
                <tbody>
                  <tr className="table_header">
                    <th>
                      <div class="fields_with_filter">
                        <span>Type</span>
                        <i class="fas fa-filter"></i>
                      </div>
                    </th>
                    <th>
                      <div class="fields_with_filter">
                        <span>Number</span>
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
                        <span>Total</span>
                        <i class="fas fa-filter"></i>
                      </div>
                    </th>
                    <th>
                      <div class="fields_with_filter">
                        <span>Balance</span>
                        <i class="fas fa-filter"></i>
                      </div>
                    </th>
                    {/* <th className="view_department_action">Actions</th> */}
                  </tr>
                  {getSingleTransaction &&
                    getSingleTransaction.partyTransactionsArray.map((data) => (
                      <tr className="table_body">
                        <td>{data.type}</td>
                        <td>{data.number}</td>
                        <td>{data.date}</td>
                        <td>{data.total}</td>
                        <td>{data.balance}</td>
                        {/* <td>
                          <div className="view_department_action_btn view_department_action">
                            <button
                              className="dropdown-toggle"
                              type="button"
                              id="PartyDropDownMenu"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              {" "}
                              <i className="fas fa-ellipsis-v"></i>{" "}
                            </button>
                            <div
                              className="view_department_do_action dropdown-menu"
                              aria-labelledby="PartyDropDownMenu">
                              <a href="#">
                                <i className="fas fa-eye"></i>
                                <span>View</span>
                              </a>
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
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <CreatePartiess />
      <Update id={id} />
      <DeleteParties id={id} />
    </>
  );
};

export default PartiesScreen;
