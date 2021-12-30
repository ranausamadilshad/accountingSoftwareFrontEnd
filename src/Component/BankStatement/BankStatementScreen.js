import React from 'react'

const BankStatementScreen = () => {
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
                </div>
                <div className="view_customer_sale_product_invoice_list">

    
                <div className="view_customer_sale_product_invoice_table">
                        <table>
                            <tbody>
                                <tr className="table_header">
                                    <th>
                                        <div class="fields_with_filter" ><span>Date</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Description</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Withdrawl Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Deposit Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Balance Amount</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                    <td>5000</td>
                                    <td>5000</td>

                                </tr>
                                <tr className="table_body">

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
                            <div class="col-sm-8">
                                </div>
                                <div class="col-sm-2">
                                    Balance
                                 </div>
                                 <div class="col-sm-2">
                                     Rs .00
                                 </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BankStatementScreen
