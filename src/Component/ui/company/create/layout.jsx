/** @format */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikControl from "../../../FormControl/FormikControl";
import "../../../../common/company/style.css";
import signature from "../../../../Assets/image/download.png";
import login_profile_img from "../../../../Assets/image/login_img.png";
import Spinner from "../../../ui/spinner/Spinner";


const CreateCompanyScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  businessType,
  businessCategories,
  handleLogo,
  handleSignature,
  previewImage,
  previewSig,
  isLoading,
  response,
  error,
}) => {

  return (
    <>
      {isLoading == true ? (
        <Spinner />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}>
          {() => (
            <div className="advance_container">
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                  marginTop: "5px",
                }}>
                Company Details
              </h2>

              <Form>
                <div className="create_company_form_fields">
                  <div className="create_company_field">
                    <div className="create_company_figure">
                      <figure>
                        {previewImage && previewImage ? (
                          <img src={previewImage} alt="Logo snns" />
                        ) : (
                          <img src={login_profile_img} alt="ddkk" />
                        )}
                        <div className="change_pic">
                          <label>
                            {" "}
                            upload
                            <input
                              type="file"
                              placeholder="change"
                              name="logo"
                              onChange={handleLogo}
                            />
                          </label>
                        </div>
                      </figure>
                    </div>
                    <div className="create_company_section">
                      <div className="profile_name">
                        <label>
                          Business Name <span className="mandatory"> *</span>
                        </label>
                        <FormikControl
                          control="input"
                          type="text"
                          name="busName"
                        />
                      </div>
                      <div className="profile_name">
                        <label>
                          Phone No <span className="mandatory"> *</span>
                        </label>
                        <FormikControl
                          control="input"
                          type="number"
                          name="phoneNo"
                        />
                      </div>
                      <div className="profile_name">
                        <label>
                          Email <span className="mandatory"> </span>
                        </label>
                        <FormikControl
                          control="input"
                          type="input"
                          name="email"
                        />
                      </div>
                      <div className="profile_name">
                        <label>
                          GST<span className="mandatory"> </span>
                        </label>
                        <FormikControl
                          control="input"
                          type="text"
                          name="saleTaxNo"
                        />
                      </div>
                      <div className="profile_name">
                        <label>
                          Income Tax Number<span className="mandatory"> </span>
                        </label>
                        <FormikControl
                          control="input"
                          type="text"
                          name="incomeTaxNo"
                        />
                      </div>
                      <div className="profile_name">
                        <label>
                          Professional Sales Tax(PRA)
                          <span className="mandatory"> </span>
                        </label>
                        <FormikControl
                          control="input"
                          type="text"
                          name="dnndnd"
                        />
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
                          Business Address <span className="Optional"> </span>
                        </label>
                        <FormikControl control="input" name="busAddress" />
                      </div>
                      <div className="profile_name">
                        <label>
                          Mailing Address <span className="Optional"> </span>
                        </label>
                        <FormikControl control="input" name="snms" />
                      </div>
                      <div className="profile_name">
                        <label>
                          Business Description{" "}
                          <span className="Optional"> </span>
                        </label>
                        <FormikControl
                          control="textarea"
                          name="busDescription"
                        />
                      </div>
                    </div>
                    <div className="create_company_section">
                      <div className="profile_name">
                        <label>
                          Business Type <span className="mandatory"> *</span>
                        </label>{" "}
                        <Field
                          className="customer_sale_body_select_field"
                          as="select"
                          name="busTypeId">
                          <option value="" disabled selected>
                            Select
                          </option>
                          {businessType &&
                            businessType.busTypes.map((data) => (
                              <option value={data.busTypeId}>
                                {data.name}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage
                          name="busTypeId"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>

                      <div className="profile_name">
                        <label>
                          Business Category{" "}
                          <span className="mandatory"> *</span>
                        </label>{" "}
                        <Field
                          className="customer_sale_body_select_field"
                          as="select"
                          name="busCategoryId">
                          <option value="" disabled selected>
                            Select
                          </option>
                          {businessCategories &&
                            businessCategories.busCategories.map((data) => (
                              <option value={data.busCategoryId}>
                                {data.name}
                              </option>
                            ))}
                        </Field>
                      </div>
                      <div className="profile_name">
                        <figure className="signature_img">
                          {previewSig && previewSig ? (
                            <img src={previewSig} alt="Sig snns" />
                          ) : (
                            <img src={signature} alt="ddkk" />
                          )}
                          <div className="upload_signature">
                            <label>
                              {" "}
                              Add signature
                              <input
                                type="file"
                                name="signature"
                                placeholder="change"
                                onChange={handleSignature}
                              />
                            </label>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                  {response && (
                    <span className="centered">
                      <p className="success">{response.message}</p>
                    </span>
                  )}

                  {error && error.data && (
                    <span className="centered">
                      <p className="unsuccessfull">{error.data.message}</p>
                    </span>
                  )}

                  <div className="modal-footer">
                    <button
                      onClick={onsubmit}
                      type="submit"
                      className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};

export default CreateCompanyScreen;
