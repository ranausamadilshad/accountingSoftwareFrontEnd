/** @format */

import React from "react";
import "./CreateCompany.css";

import login_profile_img from "../../Assets/image/login_img.png";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";

const UpdateScreen = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}>
        {() => (
          <div
            className="modal fade"
            id="CreateCompany"
            tabindex="-1"
            role="dialog"
            aria-labelledby="CreateCompanyTitle"
            aria-hidden="true">
            <div
              className="modal-dialog modal-dialog-centered create_company_container"
              role="document">
              <div className="modal-content create_company_modal_content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Firm Detail
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
                      <div className="create_company_field">
                        <div className="create_company_figure">
                          <figure>
                            <img src={login_profile_img} />
                            <div className="change_pic">
                              <label>
                                {" "}
                                upload
                                <input type="file" placeholder="change" />
                              </label>
                            </div>
                          </figure>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Business Name{" "}
                              <span className="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="text"
                              name="companyName"
                            />
                            {/* <input type="text" placeholder=""/> */}
                          </div>
                          <div className="profile_name">
                            <label>
                              Phone No <span className="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="text"
                              name="phone"
                            />
                            {/* <input type="number" placeholder=""/> */}
                          </div>
                          <div className="profile_name">
                            <label>
                              Email <span className="mandatory">* </span>
                            </label>
                            <FormikControl
                              control="input"
                              type="email"
                              name="email"
                            />
                            {/* <input type="email" placeholder=""/> */}
                          </div>
                          <div className="profile_name">
                            <label>
                              password<span className="mandatory">* </span>
                            </label>
                            <FormikControl
                              control="input"
                              type="password"
                              name="password"
                            />
                            {/* <input type="email" placeholder=""/> */}
                          </div>
                        </div>
                      </div>

                      <div className="create_company_detail_box">
                        <h5>Business Details</h5>
                      </div>

                      <div className="create_company_field">
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Business Address{" "}
                              <span className="Optional"> (Optional)</span>
                            </label>
                            <FormikControl control="textarea" name="address" />
                            {/* <textarea></textarea> */}
                          </div>
                          <div className="profile_name">
                            <label>
                              Business Description{" "}
                              <span className="Optional"> (Optional)</span>
                            </label>
                            <FormikControl
                              control="textarea"
                              name="description"
                            />
                            {/* <textarea></textarea> */}
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Business Type{" "}
                              <span className="Optional"> (Optional)</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="text"
                              name="type"
                            />
                            {/* <input type="text" placeholder=""/> */}
                          </div>
                          <div className="profile_name">
                            <label>
                              Business category{" "}
                              <span className="Optional"> (Optional)</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="text"
                              name="category"
                            />
                            {/* <input type="number" placeholder=""/> */}
                          </div>
                          <div className="profile_name">
                            <figure className="signature_img">
                              <img src="image/download.png" />
                              <div className="upload_signature">
                                <label>
                                  {" "}
                                  Add signature
                                  <input type="file" placeholder="change" />
                                </label>
                              </div>
                            </figure>
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
                        <button
                          onClick={onsubmit}
                          type="submit"
                          className="btn btn-primary">
                          update
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

export default UpdateScreen;
