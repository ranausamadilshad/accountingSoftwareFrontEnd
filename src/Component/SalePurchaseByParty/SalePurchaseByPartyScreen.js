import React from 'react'

const SalePurchaseByPartyScreen = () => {
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
                                        <div class="fields_with_filter" ><span>Party Name</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Sale Amount</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Purchase Amount</span></div>
                                    </th>
                                   
                                    
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    


                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    Total Sale Amount Rs:00
                                 </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                Total Purchase Amount Rs:00
                            </div>
                        </div>
                    </div>
                </div>


            </section>  
        </>
    )
}

export default SalePurchaseByPartyScreen
