import React from 'react'

const TaxRateReportScreen = () => {
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
                                <h6>Tax Rate Report</h6>
                            </div>
                        </div>
                </div>

                <div className="view_customer_sale_product_invoice_list">

    
                <div className="view_customer_sale_product_invoice_table">
                        <table>
                            <tbody>
                                <tr className="table_header">
                                    <th>
                                        <div class="fields_with_filter" ><span>Tax Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Tax Percent</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Taxable Sale Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Tax In</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Taxable Purchaseable/Expense Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Taxable Out</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>

                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <div class="container" >
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-sm-2">
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <p>Total Tax In Rs.00</p>
                                 </div>
                                 <div class="col-lg-2 col-md-2 col-sm-2">
                                 </div>
                                 <div class="col-lg-4 col-md-4 col-sm-4">
                                 <p>Total Tax Out Rs.00</p>
                                 </div>
                        </div>
                    </div>
                </div>

            </section>  
        </>
    )
}

export default TaxRateReportScreen
