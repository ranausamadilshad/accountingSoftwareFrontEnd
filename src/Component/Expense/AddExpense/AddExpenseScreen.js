import React from "react";

const AddExpenseScreen = () => {
  return (
    <section className="add_customer_sale_section">
      <div className="add_customer_sale_header">
        <h5>Expense</h5>
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
                  <label>
                    Expense <span className="mandatory"> *</span>
                  </label>
                  <select className="customer_sale_body_select_field">
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer_sale_body_detail_box">
          <div className="create_company_section">
            <div className="profile_name">
              <label>
                Expense Number <span></span>
              </label>
              <input type="number" />
            </div>
            <div className="profile_name">
              <label>
                Date <span></span>
              </label>
              <input type="date" />
            </div>
          </div>
        </div>
      </div>

      <div className="parties_transaction_table_box customer_sale_product_list">
        <form>
          <div className="parties_transaction_table_field">
            <table>
              <tbody>
                <tr className="table_header">
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price/Unit</th>
                  <th>Amount</th>
                </tr>

                <tr className="table_body">
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>

                  <td>
                    <span>5000</span>
                  </td>
                  <td>
                    <span>5000</span>
                  </td>
                </tr>
                <tr className="table_body">
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="number" />
                  </td>

                  <td>
                    <span>5000</span>
                  </td>
                  <td>
                    <span>5000</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="add_party_btn add_party_cash_btn">
            <button>
              <i className="fal fa-plus"></i> Add row
            </button>
          </div>

          <div className="customer_sale_total_calculation">
            <div className="customer_sale_total_calculation_box">
              <div className="create_company_section">
                <div className="profile_name">
                  <label>
                    Payment Type <span> </span>
                  </label>
                  <select>
                    <option>Cash</option>
                    <option>Cash</option>
                  </select>
                </div>
                <div className="profile_name">
                  <label>
                    Add Description <span></span>
                  </label>
                  <textarea></textarea>
                </div>
              </div>
            </div>
            <div className="customer_sale_total_calculation_box">
              <div className="create_company_section">
                <div className="customer_sale_total_calculation_discount_box"></div>
                <div className="customer_sale_total_calculation_price_box">
                  <div className="profile_name total_calculation_price_box"></div>
                </div>
                <div className="customer_sale_total_calculation_price_box">
                  <div className="profile_name total_calculation_price_box">
                    <label>
                      Total <span> </span>
                    </label>
                    <input type="number" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
    //   <CreateParties />
  );
};

export default AddExpenseScreen;
