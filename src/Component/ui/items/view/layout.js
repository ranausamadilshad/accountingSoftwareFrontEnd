/** @format */

import React, { useState } from "react";

import CreateItems from "../../../app/item/create";

import EditItems from "../../../app/item/update";
import "./style.css";
import DeleteItem from "../../../app/item/delete/index";
import DeleteItems from "../adjust/delete";

function ItemsTable({ data, singleItem, transactions, itemId, setItemId }) {
  const [toggleSearch, setToggleSearch] = useState(false);

  console.log("Itenmsmms", data);
  return (
    <div>
      <div>
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
                  <div>
                    <button
                      data-toggle="modal"
                      data-target="#CreateItems"
                      className="btn btn-primary btn-sm">
                      <i className="fal fa-plus"></i> Add Item
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
                        <span>Item</span>
                        <div className="party_filter_box_action">
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
                      <th className="party_price_box">Quantity</th>
                    </tr>
                    {data &&
                      data.items.map((item) => (
                        <tr
                          className="single_party_table_body"
                          onClick={() => setItemId(item.itemId)}>
                          <td style={{ cursor: "pointer" }}>{item.itemName}</td>
                          <td>
                            {item.openingStock}
                            <div className="single_party_crud_action">
                              <a
                                className="dropdown-toggle single_party_crud"
                                type="button"
                                id="PartyDropDownMenuTwo"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                              </a>
                              <div
                                className="single_party_crud_do_action dropdown-menu"
                                aria-labelledby="PartyDropDownMenuTwo">
                                <a
                                  data-toggle="modal"
                                  data-target="#UpdateItems">
                                  <i
                                    className="fas fa-pen"
                                    onClick={() => setItemId(item.itemId)}></i>
                                  <span>Edit</span>
                                </a>
                                <a
                                  data-toggle="modal"
                                  data-target="#DeleteItems">
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
            <div className="item_profile_data">
              <div className="item_profile_name_field">
                <h3>{/* {singleItem && singleItem.itemName} */}</h3>
                {/* <div
                  data-toggle="modal"
                  data-target="#adjustItem"
                  className="btn btn-primary btn-sm">
                  Adjust Item
                </div> */}
              </div>
              <div className="item_profile_data_all_other_field">
                <div className="item_profile_data_all_other_field_detail">
                  <div className="item_profile_data_all_other_field_detail_box">
                    <p>
                      <b>Item Name</b>:
                    </p>
                    <span>{singleItem && singleItem.item.itemName}</span>
                  </div>
                  <div className="item_profile_data_all_other_field_detail_box">
                    <p>
                      <b>Minimum Stock</b>:
                    </p>
                    <span>{singleItem && singleItem.item.minStock}</span>
                  </div>
                </div>
                <div className="item_profile_data_all_other_field_detail">
                  <div className="item_profile_data_all_other_field_detail_box">
                    <p>
                      <b>Purchase price</b>:
                    </p>
                    <span>
                      Rs :{singleItem && singleItem.item.purchasePrice}
                    </span>
                  </div>
                  <div className="item_profile_data_all_other_field_detail_box">
                    <p>
                      <b>Sale Price</b>:
                    </p>
                    Rs :<span>{singleItem && singleItem.item.salePrice}</span>
                  </div>
                </div>

                {/* <div className="item_profile_data_all_other_field_detail">
                  <div className="item_profile_data_all_other_field_detail_box">
                    <p>Purchase price:</p>
                    <span>
                      Rs
                      {singleItem && singleItem.item.purchasePrice}
                    </span>
                  </div>
                </div> */}
                {/* <div className="item_profile_data_all_other_field_detail">
                  <div className="item_profile_data_all_other_field_detail_box">
                    <p>Sale Price:</p>
                    <span>{singleItem && singleItem.item.salePrice}</span>
                  </div>
                </div> */}
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
                        <div className="fields_with_filter">
                          <span>Type</span>
                          <i className="fas fa-filter"></i>
                        </div>
                      </th>
                      <th>
                        <div className="fields_with_filter">
                          <span>Name</span>
                          <i className="fas fa-filter"></i>
                        </div>
                      </th>
                      <th>
                        <div className="fields_with_filter">
                          <span>Date</span>
                          <i className="fas fa-filter"></i>
                        </div>
                      </th>
                      <th>
                        <div className="fields_with_filter">
                          <span>Quantity</span>
                          <i className="fas fa-filter"></i>
                        </div>
                      </th>
                      <th>
                        <div className="fields_with_filter">
                          <span>Price/Unit</span>
                          <i className="fas fa-filter"></i>
                        </div>
                      </th>
                      <th>
                        <div className="fields_with_filter">
                          <span>Status</span>
                          <i className="fas fa-filter"></i>
                        </div>
                      </th>
                    </tr>
                    {/* {transactions &&
                      transactions.itemTransactionsArray.map((transaction) => (
                        <tr className="table_body">
                          <td>{transaction.type}</td>
                          <td>{transaction.name}</td>
                          <td>{transaction.date}</td>
                          <td>{transaction.quantity}</td>
                          <td>{transaction.pricePerUnit}</td>
                          <td>{transaction.status}</td>
                        </tr>
                      ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <CreateItems />
          <DeleteItem id={itemId && itemId} />
          <EditItems id={itemId && itemId} />
        </section>
      </div>
    </div>
  );
}

export default ItemsTable;
