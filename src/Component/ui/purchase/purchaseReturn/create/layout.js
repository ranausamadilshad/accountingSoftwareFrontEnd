/** @format */

import React from "react";
// import "../../Css/CreateDetailsScreen.css";
import { Field, FieldArray } from "formik";
import { Form, Formik } from "formik";
import CreatePartiess from "../../../../app/party/create/index";

const AddPurchaseReturnScreen = ({
  items,
  handleChange,
  onSubmit,
  calculateTotal,
  calculateTotalItems,
  initialValues,
  parties,
  rows,
  addRow,
  message,
  calculateRemaining,
  validationSchema,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // addRow={addRow}
        // enableReinitialize={true}
      >
        {({ values, errors, touched }) => (
          <Form>
            <section className="add_customer_sale_section">
              <div className="add_customer_sale_header">
                <h5>Sale</h5>

                <div
                  className="nav add_customer_sale_header_property"
                  id="myTab"
                  role="tablist">
                  {/* <a
                    className="nav-link active"
                    id="party-credit-tab"
                    data-toggle="tab"
                    href="#party-credit"
                    role="tab"
                    aria-controls="party-credit"
                    aria-selected="true">
                    Credit
                  </a>
                  <a
                    className="nav-link"
                    id="party-cash-tab"
                    data-toggle="tab"
                    href="#party-cash"
                    role="tab"
                    aria-controls="party-cash"
                    aria-selected="false">
                    Cash
                  </a> */}
                </div>
              </div>

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
                        <div className="profile_name">
                          <button
                            className="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#CreatePartiess"
                            type="button">
                            Add Party
                          </button>
                        </div>
                        <div className="profile_name">
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
                          {touched.partyId && errors.partyId && (
                            <div style={{ color: "red" }}>{errors.partyId}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div
                    className="tab-pane fade"
                    id="party-cash"
                    role="tabpanel"
                    aria-labelledby="party-cash-tab">
                    <div className="search_customer_in_sale">
                      <div className="create_company_section">
                        <div className="profile_name">
                          <label>
                            Customer{" "}
                            <span className="Optional"> (Optional)</span>
                          </label>
                          <select>
                            <option></option>
                          </select>
                        </div>
                      </div>
                      <div className="create_company_section">
                        <div className="profile_name">
                          <label>
                            Billing Name{" "}
                            <span className="Optional"> (Optional)</span>
                          </label>
                          <Field name="" type="text" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="customer_sale_body_detail_box">
                  <div className="create_company_section">
                    <div className="profile_name">
                      <label>
                        Invoice No <span style={{ color: "red" }}>*</span>
                      </label>
                      <Field
                        control="input"
                        name="invoiceNumber"
                        type="text"
                        required
                      />
                      {touched.invoiceNumber && errors.invoiceNumber && (
                        <div style={{ color: "red" }}>
                          {errors.invoiceNumber}
                        </div>
                      )}
                    </div>
                    <div className="profile_name">
                      <label>
                        Invoice Date <span style={{ color: "red" }}>*</span>
                      </label>
                      <Field
                        control="input"
                        name="invoiceDate"
                        type="date"
                        required
                      />
                      {touched.invoiceDate && errors.invoiceDate && (
                        <div style={{ color: "red" }}>{errors.invoiceDate}</div>
                      )}
                    </div>
                    <div className="profile_name">
                      <label>
                        Return Date <span style={{ color: "red" }}>*</span>
                      </label>
                      <Field
                        control="input"
                        name="returnDate"
                        type="date"
                        required
                      />
                      {touched.returnDate && errors.returnDate && (
                        <div style={{ color: "red" }}>{errors.returnDate}</div>
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
                              {/* <th>Unit</th> */}
                              <th>
                                Price/Unit{" "}
                                <span style={{ color: "red" }}>*</span>
                              </th>
                              <th>discount</th>
                              <th>
                                Total <span style={{ color: "red" }}>*</span>
                              </th>
                              <th>Delete</th>
                            </tr>
                            {values.items &&
                              values.items.map((item, i) => (
                                <>
                                  <tr className="table_body">
                                    <td>
                                      <Field
                                        as="select"
                                        name={`item${i}`}
                                        onClick={handleChange}
                                        required>
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
                                        name={`items[${i}.itemDiscount]`}
                                        type="number"
                                      />
                                    </td>
                                    <td>
                                      <p>
                                        {calculateTotalItems(
                                          item.quantity,
                                          item.pricePerUnit,
                                          item.itemDiscount
                                        )}
                                      </p>
                                    </td>
                                    <td>
                                      <span
                                        style={{
                                          alignItems: "center !important",
                                          marginLeft: "20%",
                                        }}>
                                        <i
                                          onClick={() => arrayHelpers.remove(i)}
                                          className="fas fa-trash-alt"></i>
                                      </span>
                                    </td>
                                  </tr>
                                </>
                              ))}
                            <div className="add_party_btn add_party_cash_btn">
                              <button
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

                <div className="customer_sale_total_calculation">
                  <div className="customer_sale_total_calculation_box">
                    <div className="create_company_section">
                      <div className="profile_name">
                        <label>
                          Payment Type <span style={{ color: "red" }}>*</span>
                        </label>
                        <Field as="select" name="paymentType" required>
                          <option diabaled selected>
                            Select
                          </option>
                          <option value="1">Cash In Hand</option>
                          <option value="0">Cheque</option>
                        </Field>
                        {touched.paymentType && errors.paymentType && (
                          <div style={{ color: "red" }}>
                            {errors.paymentType}
                          </div>
                        )}
                      </div>
                      <div className="profile_name">
                        <label>
                          Sale Type <span style={{ color: "red" }}>*</span>
                        </label>
                        <Field as="select" name="saleType" required>
                          <option diabaled selected>
                            Select
                          </option>
                          <option value="0">Credit</option>
                          <option value="1">Cash</option>
                        </Field>
                        {touched.saleType && errors.saleType && (
                          <div style={{ color: "red" }}>{errors.saleType}</div>
                        )}
                      </div>
                      {/* <div className="profile_name">
                        <label>
                          Sale Type <span> </span>
                        </label>
                        <Field
                          // onChange={onFormChange}
                          control="input"
                          name="saleType"
                          type="number"
                          required
                        />
                      </div> */}
                      <div className="profile_name">
                        <label>
                          Add Description <span></span>
                        </label>
                        <Field
                          // onChange={onFormChange}
                          control="textarea"
                          name="paymentDescription"
                          type="text"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="customer_sale_total_calculation_box">
                    <div className="create_company_section">
                      <div className="customer_sale_total_calculation_discount_box">
                        <label>Discount(%)</label>

                        <div className="profile_name total_calculation_price_box">
                          <Field
                            // onChange={onFormChange}
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
                        <label>Tax</label>
                        <div className="profile_name total_calculation_price_box">
                          <Field
                            control="input"
                            name="tax"
                            label="tax"
                            type="number"
                          />
                          {touched.tax && errors.tax && (
                            <div style={{ color: "red" }}>{errors.tax}</div>
                          )}
                        </div>
                      </div>

                      {/* <div className="customer_sale_total_calculation_price_box"> */}
                      <div className="profile_name total_calculation_price_box">
                        <label>
                          Total <span style={{ color: "red" }}>*</span>
                        </label>
                        <p name="totalAmount">
                          {calculateTotal(
                            values.items,
                            values.discount,
                            values.tax
                          )}
                        </p>
                      </div>
                      {/* </div> */}
                      <div className="customer_sale_total_calculation_price_box">
                        <div className="profile_name total_calculation_price_box">
                          <label>
                            Paid <span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            control="input"
                            name="receivedAmount"
                            type="number"
                            required
                          />
                          {touched.receivedAmount && errors.receivedAmount && (
                            <div style={{ color: "red" }}>
                              {errors.receivedAmount}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="customer_sale_total_calculation_price_box"> */}
                      <div className="profile_name total_calculation_price_box">
                        <label>
                          Remaining <span style={{ color: "red" }}>*</span>
                        </label>
                        <p name="remainingBalance">
                          {calculateRemaining(
                            values.items,
                            values.discount,
                            values.tax,
                            values.receivedAmount
                          )}
                        </p>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <p style={{ color: "green" }}>{message && message}</p>
                  <button
                    type="submit"
                    //   type="button"
                    className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
      <CreatePartiess />
    </>
  );
};

export default AddPurchaseReturnScreen;
