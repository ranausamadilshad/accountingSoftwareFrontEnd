import React from "react";
import { Form } from "formik";
import FormikControl from "../../Component/FormControl/FormikControl";

const PartyForm = ({ data }) => {
  return (
    <Form>
      <div className="create_company_form_fields">
        <div className="create_company_field">
          <div className="create_company_section">
            <div className="profile_name">
              <label>
                Party Name <span className="mandatory"> *</span>
              </label>
              <FormikControl control="input" type="text" name="partyName" />
            </div>
          </div>
          <div className="create_company_section">
            <div className="profile_name">
              <label>
                Phone No <span className="mandatory">*</span>
              </label>
              <FormikControl control="input" type="text" name="phone" />
            </div>
          </div>
        </div>

        <div className="nav create_part_detail_box" id="myTab" role="tablist">
          <a
            className="nav-link active"
            id="party-address-tab"
            data-toggle="tab"
            href="#update-party-address"
            role="tab"
            aria-controls="party-address"
            aria-selected="true">
            Address
          </a>

          <a
            className="nav-link"
            id="party-open-balance-tab"
            data-toggle="tab"
            href="#update-party-open-balance"
            role="tab"
            aria-controls="party-open-balance"
            aria-selected="false">
            Opening Balance
          </a>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="update-party-address"
            role="tabpanel"
            aria-labelledby="party-address-tab">
            <div className="create_company_field fade show active">
              <div className="create_company_section">
                <div className="profile_name">
                  <label>
                    Billing Address{" "}
                    <span className="Optional"> (Optional)</span>
                  </label>
                  <FormikControl control="textarea" name="billingAddress" />
                </div>
                <div className="profile_name">
                  <label>
                    Email Id <span className="Optional"> (Optional)</span>
                  </label>
                  <FormikControl control="input" type="email" name="email" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="update-party-open-balance"
            role="tabpanel"
            aria-labelledby="party-open-balance-tab">
            <div className="create_company_field">
              <div className="create_company_section">
                <div className="profile_name">
                  <label>
                    Opening Balance{" "}
                    <span className="Optional"> (Optional)</span>
                  </label>
                  <FormikControl control="input" type="number" name="balance" />
                </div>
              </div>
              <div className="create_company_section">
                <div className="profile_name">
                  <label>
                    As of Date <span className="Optional"> (Optional)</span>
                  </label>
                  <FormikControl control="input" type="date" name="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {data && (
          <p style={{ color: "green" }}>Party Data Successfully Updated</p>
        )}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal">
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </Form>
  );
};

export default PartyForm;
