import React from 'react'

const ItemSerialReportScreen = () => {
    return (
        <>
             <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_selection_box" style={{display:"column"}}>
                                <h6>Serial Number Report</h6>
                                <label className="mr-1"><small>Item Name</small></label>
                                <input type="text"  />
                                  <div>
                                <label className="mr-1"><small>Show only serial numbers in stock</small></label>
                               <input type="checkbox"/>
                                </div>
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
                </div>

            </section>
        </>
    )
}

export default ItemSerialReportScreen
