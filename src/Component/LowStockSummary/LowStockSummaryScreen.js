import React from 'react'

const LowStockSummaryScreen = () => {
    return (
        <>
            <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                        <div className="customer_sale_single_selection_box" style={{ display: "flex" }}>
                                <h6>Filters</h6>
                                <input type="checkbox" className="mr-1" />
                                <h6><small>Show Items in Stock</small></h6>
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
                                        <div class="fields_with_filter" ><span>Item Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Minimum Stock Quantity</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Stock Qty</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Stock Value</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                </tr>
                                <tr className="table_body">

                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default LowStockSummaryScreen
