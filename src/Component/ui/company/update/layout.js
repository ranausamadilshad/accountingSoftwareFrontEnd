/** @format */

import React from "react";
import "../../../../common/company/style.css";
import { Formik } from "formik";
import CompanyForm from "../../../../common/company/form";

const UpdateScreen = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <>
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
              Firm Details
            </h2>

            <Form>
              <div className="create_company_form_fields">
                <div className="create_company_field">
                  <div className="create_company_figure">
                    <figure>
                      <img src={login_profile_img} alt="" />
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
                        Business Name <span className="mandatory"> *</span>
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
                      <FormikControl control="input" type="text" name="phone" />
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
                        Sale Tax Number<span className="mandatory">* </span>
                      </label>
                      <FormikControl control="input" type="text" name="text" />
                    </div>
                    <div className="profile_name">
                      <label>
                        Income Tax Number<span className="mandatory">* </span>
                      </label>
                      <FormikControl control="input" type="text" name="text" />
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
                      <FormikControl control="textarea" name="description" />
                      {/* <textarea></textarea> */}
                    </div>
                  </div>
                  <div className="create_company_section">
                    {/* <div className="profile_name">
                    <label>
                      Business Type{" "}
                      <span className="Optional"> (Optional)</span>
                    </label>
                    <FormikControl control="input" type="text" name="type" />
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
                  </div> */}

                    <div className="profile_name">
                      <label>
                        Business Type <span className="mandatory"> *</span>
                      </label>{" "}
                      <Field
                        className="customer_sale_body_select_field"
                        as="select"
                        name="unitInId">
                        <option value="" disabled selected>
                          Select
                        </option>
                        {/* {units &&
                            units.measuringUnit.map((data) => ( */}

                        <option value="">Retail</option>
                        <option value="">WholeSale</option>
                        <option value="">Distributer</option>
                        <option value="">Service</option>
                        <option value="">Manufacturing</option>
                        <option value="">Other</option>

                        {/* ))} */}
                      </Field>
                      {/* <ErrorMessage
                          name="unitInId"
                          component="div"
                          style={{ color: "red" }}
                        /> */}
                    </div>

                    <div className="profile_name">
                      <label>
                        Business Category <span className="mandatory"> *</span>
                      </label>{" "}
                      <Field
                        className="customer_sale_body_select_field"
                        as="select"
                        name="type">
                        <option value="" disabled selected>
                          Select
                        </option>
                        {/* {units &&
                            units.measuringUnit.map((data) => ( */}

                        <option value="">Accounting & CA</option>
                        <option value="">Interior Design</option>
                        <option value="">AutoMobile/AutoPart</option>
                        <option value="">Saloon</option>
                        <option value="">Stationary Store</option>
                        <option value="">Construction Material & Equip</option>
                        <option value="">Repairing and ELectrician</option>
                        <option value="">Chemical & Fertilizer</option>
                        <option value="">Computer & Fertilizer</option>
                        <option value="">Electronics Equip</option>
                        <option value="">Fashion Accessories</option>
                        <option value="">Cosmetics</option>
                        <option value="">Tailoring and Boutique</option>
                        <option value="">Fruit and Vegetable</option>
                        <option value="">Resturant & Hotel</option>
                        <option value="">Footwear</option>
                        <option value="">Paper Products</option>
                        <option value="">Footwear</option>
                        <option value="">Paper Products</option>
                        <option value="">General Store /Kariyana</option>
                        <option value="">Dairy Form Production</option>
                        <option value="">Poultry</option>
                        <option value="">Furniture</option>
                        <option value="">Garments</option>
                        <option value="">Jeweleery</option>
                        <option value="">Pharmacy & Medical</option>
                        <option value="">Hardware Store</option>
                        <option value="">Industrial Machinery</option>
                        <option value="">Mobile & Accessories</option>
                        <option value="">Nursery & Plants </option>
                        <option value="">Petrol Terminal</option>
                        <option value="">Sweet Shop & Bakery</option>
                        <option value="">Laundry/Washing/DryClean</option>
                        <option value="">Coaching & Training</option>
                        <option value="">Renting & Learning</option>
                        <option value="">Fitness Center</option>
                        <option value="">Oil & Gas</option>
                        <option value="">Real Estate</option>
                        <option value="">NGO & Charity Trust</option>
                        <option value="">Tours & Travels</option>

                        {/* ))} */}
                      </Field>
                      {/* <ErrorMessage
                          name="unitInId"
                          component="div"
                          style={{ color: "red" }}
                        /> */}
                    </div>
                    <div className="profile_name">
                      <figure className="signature_img">
                        <img src={signature} alt="" />
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
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal">
                    Close
                  </button> */}
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
    </>
  );
};

export default UpdateScreen;
