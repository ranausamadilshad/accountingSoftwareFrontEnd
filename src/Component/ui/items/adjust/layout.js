/** @format */

import React from "react";

import AddItemStock from "../../../app/item/adjust/addStock";
import ReduceItemStock from "../../../app/item/adjust/reduceStock";

const AdjustItems = ({ id }) => {
  console.log("id", id);
  return (
    <>
      <div
        className="modal fade"
        id="adjustItem"
        tabindex="-1"
        role="dialog"
        aria-labelledby="CreatePartiesTitle"
        aria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered create_company_container"
          role="document">
          <div className="modal-content create_company_modal_content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Item
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="create_company_form_fields">
                <div className="create_company_field">
                  <div className="create_company_section">
                    <div className="profile_name">
                      <label>Item Name</label>
                      <p>Name</p>
                    </div>
                  </div>
                  {/* <div className="create_company_section">
                    <div className="profile_name">
                      <label>Adjustment Date</label>
                      <input type="date" />
                    </div>
                  </div> */}
                </div>

                <div
                  className="nav create_part_detail_box"
                  id="myTab"
                  role="tablist">
                  <a
                    className="nav-link active"
                    id="party-address-tab"
                    data-toggle="tab"
                    href="#addStock"
                    role="tab"
                    aria-controls="party-address"
                    aria-selected="true">
                    Add Stock
                  </a>

                  <a
                    className="nav-link"
                    id="party-open-balance-tab"
                    data-toggle="tab"
                    href="#reduceStock"
                    role="tab"
                    aria-controls="party-open-balance"
                    aria-selected="false">
                    Reduce Stock
                  </a>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="addStock"
                    role="tabpanel"
                    aria-labelledby="party-address-tab">
                    <AddItemStock id={id} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reduceStock"
                    role="tabpanel"
                    aria-labelledby="party-open-balance-tab">
                    <ReduceItemStock id={id} />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdjustItems;
