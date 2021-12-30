/** @format */

import React from "react";
import "./ReportPdfInvoice.css";

const PreviewSaleInvoicesScreen = ({ data }) => {
  //   console.log("challan", data);
  return (
    <>
      <div className="sale_invoice_printing_page_section">
        <div className="sale_invoice_printing_page_box">
          <div className="modal-header report_pdf_modal_header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Preview
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="sale_invoice_container">
            <div className="modal-body">
              <div className="owner_detail_box">
                <div className="owner_contact_box">
                  <h3>Faisal Store</h3>
                  <span>03024654567</span>
                  <span>Faisal@gmail.com</span>
                </div>
                <div className="owner_picture_box">
                  <figure>
                    <img src="image/login_img.png" />
                  </figure>
                </div>
              </div>

              <div className="report_invoice_text">
                <span>Invoice</span>
              </div>

              <div className="customer_contact_section">
                <h6>Bill To :</h6>
                <div className="customer_contact_box">
                  <div className="customer_contact_info">
                    <div className="customer_contact_fields">
                      <span>Jazim</span>
                    </div>
                    <div className="customer_contact_fields">
                      <span>0324345678</span>
                    </div>
                    <div className="customer_contact_fields">
                      <span className="customer_address">House# 211</span>
                    </div>
                  </div>
                  <div className="customer_contact_info">
                    <div className="customer_contact_fields">
                      <span>Invoice No: {data && data.invoiceNo}</span>
                    </div>
                    <div className="customer_contact_fields">
                      <span>Date:{data && data.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customer_purchase_item_list">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Balance</th>
                      <th scope="col">Payment Type</th>
                      <th scope="col">Transaction Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {data &&
                      data.map((data) => ( */}
                    <tr>
                      <td>Shoes</td>
                      <td>17</td>
                      <td>{data && data.balance}</td>
                      <td>{data && data.paymentType}</td>
                      <td>{data && data.transactionType}</td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>

              {/* <div className="customer_invoice_amount_section">
                <div className="customer_invoice_amount_in_word">
                  <div className="customer_invoice_amount_in_word_box">
                    <h4>invoice amount in words</h4>
                    <span>fifty thousand 5 hundred 30 rupees only </span>
                  </div>
                  <div className="customer_invoice_amount_in_word_box">
                    <h4>terms and conditions</h4>
                    <span>thanks for doing business with us! </span>
                  </div>
                </div>
                <div className="customer_invoice_total_amount">
                  <div className="customer_invoice_total_amount_box">
                    <span>subtotal</span>
                    <span>5000</span>
                  </div>
                  <div className="customer_invoice_total_amount_box total_color_box">
                    <span>Total</span>
                    <span>5000</span>
                  </div>
                  <div className="customer_invoice_total_amount_box">
                    <span>Received</span>
                    <span>5000</span>
                  </div>
                  <div className="customer_invoice_total_amount_box">
                    <span>Balance</span>
                    <span>5000</span>
                  </div>
                </div>
              </div>

              <div className="modal-footer report_pdf_modal_footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewSaleInvoicesScreen;
