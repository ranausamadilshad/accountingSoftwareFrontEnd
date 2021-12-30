import React from 'react'

const StockDetailScreen = () => {
    return (
        <>
                       <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_between_selection_box">
                                <h6>From</h6>
                                <input type="date" />
                                <h6>To</h6>
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
                                        <div class="fields_with_filter" ><span>Item Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Beginning Quantity</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Quantity In </span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Purchase Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Quantity Out</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Sale Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Closing Quantity</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                    <td>cash</td>
                                    <td>5000</td>
                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>5000</td>
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

export default StockDetailScreen
