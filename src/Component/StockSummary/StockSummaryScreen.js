import React from 'react'

const StockSummaryScreen = () => {
    return (
        <>
            <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_selection_box" style={{ display: "flex" }}>
                                <h6 className="mr-3">Filter</h6>
                                <input type="checkbox" className="mr-1" />
                                <h6><small>Date Filter</small></h6>
                            </div>
                            <div className="customer_sale_single_between_selection_box">
                                <h6>Date</h6>
                                <input type="date" />
                            </div>
                            <div className="customer_sale_single_selection_box" style={{ display: "flex" }}>
                                <input type="checkbox" className="mr-1" />
                                <h6><small>Show Items in Stock</small></h6>
                            </div>
                        </div>
                        <div className="view_customer_sale_reports_box">
                            <a><i className="fas fa-file-excel"></i><span>Excel Report</span></a>
                            <a><i className="fas fa-print"></i><span>Print</span></a>
                        </div>

                    </div>
                </div>

                <div className="view_customer_sale_product_invoice_list">


                    <div className="view_customer_sale_product_invoice_table">
                        <table>
                            <tbody>
                                <tr className="table_header">
                                    <th>
                                        <div class="fields_with_filter" ><span>Item Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Sale Price</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Purchase Price</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Stock Qty</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Stock Value</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <div class="container" >
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <p><b>Total</b></p>
                                </div>
                                <div class="col-lg-5 col-md-5 col-sm-5">
                                 </div>
                                <div class="col-lg-2 col-md-2 col-sm-2">
                                <p>0</p>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-2">
                                <p>Rs .00</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default StockSummaryScreen
