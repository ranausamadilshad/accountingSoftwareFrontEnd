/** @format */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikControl from "../../../FormControl/FormikControl";

const CreatePartiesScreens = ({
  initialValues,
  onSubmit,
  validationSchema,
  data,
  message,
  error,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {() => (
          <div
            className="modal fade"
            id="CreatePartiess"
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
                    Add Party
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
                  <Form>
                    <div className="create_company_form_fields">
                      <div className="">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Party Name{" "}
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="partyName"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Phone No <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="phoneNo"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Contact Person{" "}
                                  <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="contactPersonName"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>{" "}
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Contact Person No{" "}
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="contactPersonNo"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Email <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="snnasna"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Income Tax Number{" "}
                                  <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="incomeTax"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  GST <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="gst"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>{" "}
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginTop: "2%" }}>
                                <label>
                                  Credit Limit{" "}
                                  <span className="mandatory"> *</span>
                                </label>{" "}
                              </div>
                              <div
                                role="group"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}>
                                <label style={{ marginRight: "20%" }}>
                                  <Field
                                    type="radio"
                                    name="isCreditLimitEnable"
                                    value="true"
                                  />{" "}
                                  Yes
                                </label>
                                <br />
                                <label>
                                  <Field
                                    type="radio"
                                    name="isCreditLimitEnable"
                                    value="false"
                                  />{" "}
                                  No
                                </label>
                                <ErrorMessage
                                  name="isCreditLimitEnable"
                                  component="div"
                                  style={{ color: "red" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="create_company_section">
                              <div
                                className="profile_name"
                                style={{ marginBottom: "2%" }}>
                                <label>
                                  Credit Limit Amount{" "}
                                  <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="creditLimitAmount"
                                />
                                {/* <input type="text" placeholder=""/> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="nav create_part_detail_box"
                        id="myTab"
                        role="tablist">
                        <a
                          className="nav-link active"
                          id="party-address-tab"
                          data-toggle="tab"
                          href="#party-address"
                          role="tab"
                          aria-controls="party-address"
                          aria-selected="true">
                          Address
                        </a>

                        <a
                          className="nav-link"
                          id="party-open-balance-tab"
                          data-toggle="tab"
                          href="#party-open-balance"
                          role="tab"
                          aria-controls="party-open-balance"
                          aria-selected="false">
                          Opening Balance
                        </a>
                      </div>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="party-address"
                          role="tabpanel"
                          aria-labelledby="party-address-tab">
                          <div className=" fade show active">
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="create_company_section">
                                  <div
                                    className="profile_name"
                                    style={{ marginBottom: "2%" }}>
                                    <label>
                                      Country{" "}
                                      <span className="mandatory">* </span>
                                    </label>
                                    <FormikControl
                                      control="input"
                                      type="text"
                                      name="country"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="create_company_section">
                                  <div className="profile_name">
                                    <label>
                                      City <span className="mandatory">*</span>
                                    </label>
                                    <FormikControl
                                      control="input"
                                      type="text"
                                      name="city"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="create_company_section">
                                  <div className="profile_name">
                                    <label>
                                      Postal Code{" "}
                                      <span className="mandatory">*</span>
                                    </label>
                                    <FormikControl
                                      control="input"
                                      name="postalCode"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="create_company_section">
                                  <div className="profile_name">
                                    <label>
                                      Address{" "}
                                      <span className="mandatory">*</span>
                                    </label>
                                    <FormikControl
                                      control="input"
                                      type="input"
                                      name="address"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="party-open-balance"
                          role="tabpanel"
                          aria-labelledby="party-open-balance-tab">
                          <div className="create_company_field">
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Opening Balance{" "}
                                  <span className="Optional"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="balanceAmount"
                                />
                              </div>
                              <div className=""></div>
                              <div
                                role="group"
                                style={{
                                  display: "flex",
                                  marginTop: "-30px",
                                }}>
                                <label
                                  style={{
                                    marginRight: "20%",
                                    color: "red",
                                  }}>
                                  <Field
                                    type="radio"
                                    name="openingBalance"
                                    value="one"
                                  />{" "}
                                  <b>
                                    <i>To Pay</i>
                                  </b>
                                </label>
                                <br />
                                <label style={{ color: "green" }}>
                                  <Field
                                    type="radio"
                                    name="openingBalance"
                                    value="two"
                                  />{" "}
                                  <b>
                                    {" "}
                                    <i>To Receive</i>
                                  </b>
                                </label>
                                <ErrorMessage
                                  name="openingBalance"
                                  component="div"
                                  style={{ color: "red" }}
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  As of Date{" "}
                                  <span className="mandatory">* </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="date"
                                  name="date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {message && (
                        <span className="centered">
                          <p className="success">{message.message}</p>
                        </span>
                      )}
                      {error && error.data && (
                        <span className="centered">
                          <p className="unsuccessfull">{error.data.message}</p>
                        </span>
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
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CreatePartiesScreens;
