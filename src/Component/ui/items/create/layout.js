/** @format */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import login_profile_img from "../../../../Assets/image/login_img.png";
import FormikControl from "../../../FormControl/FormikControl";

const CreateItemsScreen = ({
  initialValues,
  onSubmit,
  validationSchema,
  handleImage,
  previewImage,
  error,
  itemCategories,
  itemUnits,
  response,
}) => {
  console.log(" error", error);
  console.log("responsnsse", response);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}>
        {() => (
          <div
            className="modal fade"
            id="CreateItems"
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
                  <Form>
                    <div className="create_company_form_fields">
                      <div className="create_company_field">
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Item Code <span className="mandatory"> </span>
                            </label>
                            <FormikControl
                              control="input"
                              type="number"
                              name="itemCode"
                            />
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Item Category<span className="mandatory"> *</span>
                            </label>{" "}
                            <Field
                              style={{ width: "100% !important" }}
                              className="customer_sale_body_select_field"
                              as="select"
                              name="itemCategoryId">
                              <option value="" disabled selected>
                                Select
                              </option>
                              {itemCategories &&
                                itemCategories.itemCategories.map((data) => (
                                  <option value={data.itemCategId}>
                                    {data.categName}
                                  </option>
                                ))}
                            </Field>
                            <ErrorMessage
                              name="itemCategoryId"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="create_company_field">
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Item Name <span className="mandatory"> *</span>
                            </label>
                            <FormikControl
                              control="input"
                              type="text"
                              name="itemName"
                            />
                          </div>
                        </div>
                        <div className="create_company_section">
                          <div className="profile_name">
                            <label>
                              Item Unit<span className="mandatory"> *</span>
                            </label>{" "}
                            <Field
                              style={{ width: "100% !important" }}
                              className="customer_sale_body_select_field"
                              as="select"
                              name="itemUnitId">
                              <option value="" disabled selected>
                                Select
                              </option>
                              {itemUnits &&
                                itemUnits.itemUnits.map((data) => (
                                  <option value={data.itemUnitId}>
                                    {data.unitName}
                                  </option>
                                ))}
                            </Field>
                            <ErrorMessage
                              name="itemUnitId"
                              component="div"
                              style={{ color: "red" }}
                            />
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
                          Pricing
                        </a>

                        <a
                          className="nav-link"
                          id="party-open-balance-tab"
                          data-toggle="tab"
                          href="#party-open-balance"
                          role="tab"
                          aria-controls="party-open-balance"
                          aria-selected="false">
                          Stock
                        </a>
                        <a
                          className="nav-link"
                          id="party-open-image-tab"
                          data-toggle="tab"
                          href="#party-open-image"
                          role="tab"
                          aria-controls="party-open-image"
                          aria-selected="false">
                          Items Image
                        </a>
                      </div>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="party-address"
                          role="tabpanel"
                          aria-labelledby="party-address-tab">
                          <div className="create_company_field fade show active">
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Sale Price
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  name="salePrice"
                                  type="number"
                                />
                              </div>
                              <div className="profile_name">
                                <label>
                                  Purchase Price
                                  <span className="mandatory"> *</span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="purchasePrice"
                                />
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
                                  Min Stock to maintain
                                  <span className="Optional"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="minStock"
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Location
                                  <span className="Optional"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  name="location"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Opening Stock{" "}
                                  <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="openingStock"
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Stock Price{" "}
                                  <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="input"
                                  type="number"
                                  name="stockPrice"
                                />
                              </div>
                            </div>
                            <div className="create_company_section">
                              <div className="profile_name">
                                <label>
                                  Stock Added Date{" "}
                                  <span className="mandatory"> </span>
                                </label>
                                <FormikControl
                                  control="date"
                                  type="date"
                                  name="stockAddedDate"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="party-open-image"
                          role="tabpanel"
                          aria-labelledby="party-open-image-tab">
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
                                  <input
                                    type="file"
                                    placeholder="change"
                                    name="itemImage"
                                    onChange={handleImage}
                                  />
                                </label>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                      {response && (
                        <span className="centered">
                          <p className="success">{response.data.message}</p>
                        </span>
                      )}
                      {error && error.data && (
                        <span className="centered">
                          <p className="unsuccessfull">{error.data.message}</p>
                        </span>
                      )}

                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </Form>{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CreateItemsScreen;
