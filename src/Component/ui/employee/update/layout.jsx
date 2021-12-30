/** @format */

import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../../../FormControl/FormikControl";
import Spinner from "../../spinner/Spinner";

const UpdateEmployeeScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  data,
  message,
  error,
  isLoading,
}) => {
  return (
    <>
      {isLoading == true ? (
        <Spinner />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={onSubmit}>
          {/* enableReinitialize={true} */}
          {() => (
            <div
              className="modal fade"
              id="UpdateEmployee"
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
                      Update Employee
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
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                Employee Name{" "}
                                <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                type="text"
                                name="empName"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Father Name{" "}
                                <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                name="fatherName"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Job Title <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                name="jobTitle"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                CNIC <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                name="cnic"
                                type="number"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Department <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                name="department"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Phone No <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                name="phoneNo"
                                type="number"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Qualification{" "}
                                <span className="mandatory"> </span>
                              </label>
                              <FormikControl
                                control="input"
                                name="qualification"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Blood Group <span className="mandatory"> </span>
                              </label>
                              <FormikControl
                                control="input"
                                name="bloodGroup"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Salary <span className="mandatory"> </span>
                              </label>
                              <FormikControl
                                control="input"
                                name="salary"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Address <span className="mandatory"> *</span>
                              </label>
                              <FormikControl
                                control="input"
                                name="address"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Emergency Person Contact Name{" "}
                                <span className="mandatory"> </span>
                              </label>
                              <FormikControl
                                control="input"
                                name="emgContactName"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="create_company_section">
                            <div className="profile_name">
                              <label>
                                {" "}
                                Emergency Person Contact No{" "}
                                <span className="mandatory"> </span>
                              </label>
                              <FormikControl
                                control="input"
                                name="emgContactNo"
                                type="text"
                              />
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
                            <p className="unsuccessfull">
                              {error.data.message}
                            </p>
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
      )}
    </>
  );
};

export default UpdateEmployeeScreen;
