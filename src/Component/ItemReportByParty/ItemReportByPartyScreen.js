import React from 'react'

const ItemReportByPartyScreen = () => {
    return (
        <>
             <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_between_selection_box">
                                <h6>From</h6>
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
                                        <div class="fields_with_filter" ><span>Item Name</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Sale Quantity</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Sale Amount</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Purchase Quantity</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Purchase Amount</span><i class="fas fa-filter"></i></div>
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
                            <div class="col-lg-4 col-md-5 col-sm-5">
                                <p><b>Total</b></p>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-2">
                                    0
                                 </div>
                                 <div class="col-lg-2 col-md-2 col-sm-2">
                                   Rs .00
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

export default ItemReportByPartyScreen
