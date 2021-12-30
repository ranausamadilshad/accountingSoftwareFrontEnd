/** @format */

import React from "react";
import { Field } from "formik";
import { Form, Formik } from "formik";

const CreatePaymentInScreen = ({
  initialValues,
  onSubmit,
  parties,
  message,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // addRow={addRow}
        // enableReinitialize={true}
      >
        {() => (
          <Form>
            <div
              className="modal fade"
              id="paymentin"
              tabindex="-1"
              role="dialog"
              aria-labelledby="paymentinTitle"
              aria-hidden="true">
              <div
                className="modal-dialog modal-dialog-centered create_company_container"
                role="document">
                <div className="modal-content create_company_modal_content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Payment In
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
                            <label>
                              Party <span className="mandatory">* </span>
                            </label>
                            <Field
                              className="customer_sale_body_select_field"
                              as="select"
                              name="partyId"
                              required>
                              <option value="" disabled selected>
                                Select
                              </option>
                              {parties &&
                                parties.partyArray.map((data, index) => (
                                  <>
                                    <option value={index}>
                                      {data.partyName}
                                    </option>
                                  </>
                                ))}
                            </Field>
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Receipt No <span className="mandatory">* </span>
                            </label>
                            <Field name="receipt" type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Payment Type <span className="mandatory">* </span>
                            </label>
                            <Field
                              className="customer_sale_body_select_field"
                              as="select"
                              name="paymentType">
                              <option disabled value="">
                                select
                              </option>

                              <option value="cash">Cash</option>

                              <option value="credit">Credit</option>
                            </Field>
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Invoice Date <span></span>
                            </label>
                            <Field control="input" name="date" type="date" />
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Add Description{" "}
                              <span className="mandatory">* </span>
                            </label>
                            <Field name="paymentDescription" type="textarea" />
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Received <span className="mandatory">* </span>
                            </label>
                            {/* <FormikControl
                              control="input"
                              type="number"
                              name="itemCode"
                            /> */}
                            <Field name="receivedAmount" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal">
                          Close
                        </button>
                        <button type="s ubmit" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                      {message && message ? (
                        <div class="alert alert-success" role="alert">
                          {message}
                        </div>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreatePaymentInScreen;
