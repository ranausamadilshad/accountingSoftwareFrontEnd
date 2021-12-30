import React from 'react'

const ItemBatchReportScreen = () => {
    return (
        <>
           <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_selection_box" style={{display:"column"}}>
                                <h6>Item Batch Report</h6>
                                <label className="mr-1"><small>Item Name</small></label>
                                <input type="text"  />
                                  <div>
                                <label className="mr-1"><small>Show only items in stock</small></label>
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
                                        <div class="fields_with_filter"><span>Current Quantity</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                </tr>
                                <tr className="table_body">
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

export default ItemBatchReportScreen
