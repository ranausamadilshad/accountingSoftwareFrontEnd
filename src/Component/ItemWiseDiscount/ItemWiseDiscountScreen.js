import React from 'react'

const ItemWiseDiscountScreen = () => {
    return (
        <>
   <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_selection_box">
                                <select>
                                    <option></option>
                                </select>
                            </div>
                            <div className="customer_sale_single_between_selection_box">
                                <h6>Between</h6>
                                <input type="date" />
                                <span>To</span>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="view_customer_sale_reports_box">
                            <a><i className="fas fa-file-excel"></i></a>
                            <a><i className="fas fa-print"></i></a>
                        </div>

                    </div>
                    <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_selection_box" style={{display:"column"}}>
                                <h6>Item Wise Discount</h6>
                                <label className="mr-1"><small>Item Name</small></label>
                                <input type="text"  />
                                <input type="text" placeholder="party filter"/>
                            </div>
                        </div>
                </div>

                <div className="view_customer_sale_product_invoice_list">

    
                <div className="view_customer_sale_product_invoice_table">
                        <table>
                            <tbody>
                                <tr className="table_header">
                                    <th>
                                        <div class="fields_with_filter" ><span>#</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Item Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span> Total Qty Sold</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Total Sale Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Total Disc. Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Average Discount(%)</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span> Details</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                    <td>5000</td>
                                    <td>5000</td>

                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                    <td>5000</td>
                                    <td>5000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <div class="container" >
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <p><b>Summary</b></p>
                                <p>Total Sale Amount ----</p>
                                <p>Total Discount Amount --</p>

                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9">
                                 </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ItemWiseDiscountScreen
