import React from 'react'
import {Link} from 'react-router-dom'

const ExpenseCategoryReportScreen = () => {
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
                    <div className="view_customer_sale_selection_box">
                            <div className="customer_sale_single_selection_box" style={{display:"flex"}}>
                                <h6>Expense</h6>
                            </div>
                            <div className="btn btn-primary">
                                <Link to="/add-expense" style={{color:'white'}} > Add Expense</Link>
                           </div>
                        </div>

                </div>
                

                <div className="view_customer_sale_product_invoice_list">

    
                <div className="view_customer_sale_product_invoice_table">
                        <table>
                            <tbody>
                                <tr className="table_header">
                                    <th>
                                        <div class="fields_with_filter" ><span>Expense Category</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Category Type</span></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Amount</span></div>
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
                    <div class="container" >
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-sm-2">
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                 </div>
                                 <div class="col-lg-4 col-md-4 col-sm-4">
                                 </div>
                                 <div class="col-lg-2 col-md-2 col-sm-2">
                                 <p>Total Expense Rs.00</p>
                                 </div>
                        </div>
                    </div>
                </div>

            </section> 
        </>
    )
}

export default ExpenseCategoryReportScreen
