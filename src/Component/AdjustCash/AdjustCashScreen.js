import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const AdjustCashScreen = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {() => (
          <div
            className="modal fade"
            id="AdjustCash"
            tabindex="-1"
            role="dialog"
            aria-labelledby="AdjustCashTitle"
            aria-hidden="true">
            <div
              className="modal-dialog modal-dialog-centered create_company_container"
              role="document">
              <div className="modal-content create_company_modal_content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Adjust Cash
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
                      <div
                        className="nav create_part_detail_box"
                        id="myTab"
                        role="tablist">
                        <a
                          className="nav-link active"
                          id="party-address-tab"
                          data-toggle="tab"
                          href="#cash"
                          role="tab"
                          aria-controls="cash"
                          aria-selected="true">
                          Add Cash
                        </a>

                        <a
                          className="nav-link"
                          id="party-open-balance-tab"
                          data-toggle="tab"
                          href="#ReduceCash"
                          role="tab"
                          aria-controls="ReduceCash"
                          aria-selected="false">
                          Reduce Cash
                        </a>
                      </div>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="cash"
                          role="tabpanel"
                          aria-labelledby="party-address-tab">
                          <div className="create_company_field fade show active">
                          <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Enter Adjustment Date{" "}
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="date"
                                  name="adjustmentdatecash"
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Enter Amount{" "}
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="enteramountcash"
                                />
                              </div>  
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Enter Description{" "}
                                  <span className="Optional"> (Optional)</span>
                                </label>
                                <FormikControl
                                  control="textarea"
                                  name="enterdescriptioncash"
                                />
                              </div>  
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="ReduceCash"
                          role="tabpanel"
                          aria-labelledby="party-open-balance-tab">
                          <div className="create_company_field">
                          <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Enter Adjustment Date{" "}
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="date"
                                  name="adjustmentdatereduce"
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Enter Amount{" "}
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="enteramountreduce"
                                />
                              </div>  
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Enter Description{" "}
                                  <span className="Optional"> (Optional)</span>
                                </label>
                                <FormikControl
                                  control="textarea"
                                  name="enterdescriptionreduce"
                                />
                              </div>  
                            </div>
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

export default AdjustCashScreen;

