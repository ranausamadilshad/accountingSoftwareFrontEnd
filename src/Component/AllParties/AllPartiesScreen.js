import React from 'react'

const AllPartiesScreen = () => {
    return (
        <>
              <section className="view_customer_sale_section">
                <div className="view_customer_sale_body_detail_one">
                    <div className="view_customer_sale_selection_fields">
                        <div className="view_customer_sale_selection_box">
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
                                        <div class="fields_with_filter" ><span>Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Email</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Phone No</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Receivable Balnce</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Payable Balnce</span></div>
                                    </th>
                                    
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>cash</td>


                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>cash</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <p><b>Total</b></p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                 </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                    Rs:00
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                Rs:00
                            </div>
                        </div>
                    </div>
                </div>

            </section>  
        </>
    )
}

export default AllPartiesScreen
