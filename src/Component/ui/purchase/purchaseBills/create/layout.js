/** @format */

import React, { useState } from "react";
import { Form, Formik, Field, FieldArray } from "formik";
import CreatePartiess from "../../../../app/party/create/index";
import login_profile_img from "../../../../../Assets/image/cheque.png";
const AddPurchase = ({
  items,
  onSubmit,
  calculateTotal,
  calculateTotalItems,
  calculateTotalTaxRs,
  initialValues,
  parties,
  message,
  calculateRemaining,
  validationSchema,
}) => {
  const [toggleCheque, settoggleCheque] = useState(true);
  console.log("toggle", toggleCheque);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ values, errors, touched }) => (
          <>
            <Form>
              <section className="add_customer_sale_section">
                {/* <div
                  class="parties_profile_name_field"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: "20px",
                  }}>
                  <div className="view_heading">
                    <b>Purchase Bills</b>
                  </div>
                </div> */}
                <div className="add_customer_sale_body_detail_one">
                  <div
                    className="customer_sale_body_detail_box tab-content"
                    id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="party-credit"
                      role="tabpanel"
                      aria-labelledby="party-credit-tab">
                      <div className="search_customer_in_sale">
                        <div className="create_company_section">
                          <button
                            className="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#CreatePartiess">
                            Add Party
                          </button>
                          <div className="profile_name">
                            <Field
                              className="customer_sale_body_select_field"
                              as="select"
                              name="partyId">
                              <option value="" disabled selected>
                                Select Party
                              </option>
                              {/* <option
                                value=""
                                data-toggle="modal"
                                data-target="#CreatePartiess">
                                Add Party
                              </option> */}
                              {parties &&
                                parties.partyArray.map((data, index) => (
                                  <>
                                    <option value={index}>
                                      {data.partyName}
                                    </option>
                                  </>
                                ))}
                            </Field>
                            {touched.partyId && errors.partyId && (
                              <div style={{ color: "red" }}>
                                {errors.partyId}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer_sale_body_detail_box">
                    <div className="create_company_section">
                      <div className="profile_name">
                        <label>
                          Bill No <span style={{ color: "red" }}> *</span>{" "}
                          <span></span>
                        </label>
                        <Field type="number" name="invoiceNo" />
                        {touched.invoiceNo && errors.invoiceNo && (
                          <div style={{ color: "red" }}>{errors.invoiceNo}</div>
                        )}
                      </div>
                      <div className="profile_name">
                        <label>
                          Bill Date <span style={{ color: "red" }}>*</span>{" "}
                          <span></span>
                        </label>
                        <Field control="input" name="invoiceDate" type="date" />
                        {touched.invoiceDate && errors.invoiceDate && (
                          <div style={{ color: "red" }}>
                            {errors.invoiceDate}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="parties_transaction_table_box customer_sale_product_list">
                  <FieldArray
                    name="items"
                    render={(arrayHelpers) => (
                      <div>
                        <div className="parties_transaction_table_field">
                          <table>
                            <tbody>
                              <tr className="table_header">
                                <th>
                                  Item <span style={{ color: "red" }}>*</span>
                                </th>
                                <th>
                                  Qty <span style={{ color: "red" }}>*</span>
                                </th>
                                <th>
                                  Price/Unit{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </th>
                                <th>Tax %</th>
                                <th>Tax Amount</th>
                                <th>Total</th>
                                <th>Delete</th>
                              </tr>
                              {values.items &&
                                values.items.map((item, i) => (
                                  <>
                                    <tr className="table_body">
                                      <td>
                                        <Field as="select" name={`item${i}`}>
                                          <option value="" disabled selected>
                                            Select
                                          </option>
                                          {items &&
                                            items.map((data, index) => (
                                              <>
                                                <option value={index}>
                                                  {data.itemName}
                                                </option>
                                              </>
                                            ))}
                                        </Field>
                                      </td>
                                      <td>
                                        <Field
                                          control="input"
                                          name={`items[${i}].quantity`}
                                          type="number"
                                          required
                                        />
                                      </td>

                                      <td>
                                        <Field
                                          control="input"
                                          name={`items[${i}].pricePerUnit`}
                                          type="number"
                                          required
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          control="input"
                                          name={`items[${i}.itemtax]`}
                                          type="number"
                                          required
                                        />
                                      </td>
                                      <td>
                                        <Field
                                          name="singletaxrs"
                                          value={calculateTotalTaxRs(
                                            item.quantity,
                                            item.pricePerUnit,
                                            item.itemtax
                                          )}
                                        />
                                      </td>
                                      <td>
                                        {/* <p>
                                          {calculateTotalItems(
                                            item.quantity,
                                            item.pricePerUnit,
                                            item.itemtax
                                          )}
                                        </p> */}
                                        <Field
                                          name="singletotal"
                                          value={calculateTotalItems(
                                            item.quantity,
                                            item.pricePerUnit,
                                            item.itemtax
                                          )}
                                        />
                                      </td>

                                      <td>
                                        <span
                                          style={{
                                            alignItems: "center !important",
                                            marginLeft: "20%",
                                          }}>
                                          <i
                                            onClick={() =>
                                              arrayHelpers.remove(i)
                                            }
                                            className="fas fa-trash-alt"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              <div className="">
                                <button
                                  style={{ marginTop: "3%" }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() =>
                                    arrayHelpers.push({
                                      ...initialValues.items[0],
                                    })
                                  }
                                  type="button">
                                  <i className="fal fa-plus"></i> Add row
                                </button>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  />

                  <div className="">
                    <div className="customer_sale_total_calculation_box">
                      <div className="create_company_section">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="profile_name">
                              <label>
                                Payment Type{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Field as="select" name="paymentType">
                                <option diabaled selected>
                                  Select
                                </option>
                                <option value="1">Cash In Hand</option>
                                <option
                                  value="0"
                                  onClick={() => settoggleCheque(true)}>
                                  Cheque
                                </option>
                              </Field>
                              {touched.paymentType && errors.paymentType && (
                                <div style={{ color: "red" }}>
                                  {errors.paymentType}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="profile_name">
                              <label>
                                Sale Type{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Field as="select" name="saleType">
                                <option diabaled selected>
                                  Select
                                </option>
                                <option value="0">Credit</option>
                                <option value="1">Cash</option>
                              </Field>
                              {touched.saleType && errors.saleType && (
                                <div style={{ color: "red" }}>
                                  {errors.saleType}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <label>
                              <b>Discount(%)</b>
                            </label>

                            <div className="profile_name">
                              <Field
                                control="input"
                                name="discount"
                                type="number"
                              />
                              {touched.discount && errors.discount && (
                                <div style={{ color: "red" }}>
                                  {errors.discount}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div
                              style={{
                                display: toggleCheque ? "block" : "none",
                              }}>
                              <div className="profile_name">
                                <label>
                                  Reference No <span></span>
                                </label>
                                <div className="profile_name">
                                  <Field
                                    control="input"
                                    name="referenceno"
                                    type="text"
                                  />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="profile_name">
                              <label>
                                Add Description <span></span>
                              </label>
                              <div className="profile_name">
                                <Field
                                  control="textarea"
                                  name="paymentDescription"
                                  type="text"
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <label>
                              <b>Total</b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <div className="profile_name">
                              <Field
                                name="total"
                                value={calculateTotal(
                                  values.items,
                                  values.discount,
                                  values.tax
                                )}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div>
                              <div className="create_company_figure">
                                <figure>
                                  {/* {previewImage && previewImage ? (
                                <img src={previewImage} alt="Logo snns" />
                              ) : ( */}
                                  <img src={login_profile_img} alt="ddkk" />
                                  {/* )} */}
                                  <div className="change_pic">
                                    <label>
                                      {" "}
                                      <input
                                        type="file"
                                        placeholder="change"
                                        name="itemImage"
                                        // onChange={handleImage}
                                      />
                                    </label>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <p style={{ color: "green" }}>{message && message}</p>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </section>
            </Form>
          </>
        )}
      </Formik>
      <CreatePartiess />
    </>
  );
};

export default AddPurchase;
