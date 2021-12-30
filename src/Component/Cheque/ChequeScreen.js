import React from 'react'
import '../../Css/ViewDetailsScreen.css';
import {Link} from 'react-router-dom'


const ChequeScreen = () => {
    return (
        <>
         <section className="view_customer_sale_section">
                <div className="view_customer_sale_product_invoice_list">

                    <div className="view_customer_sale_product_invoice_table_header"><span>TRANSACTIONS</span></div>
                    <div className="view_customer_sale_product_invoice_detail">
                        <div className="view_customer_sale_product_invoice_search_filter">
                        </div>
                        <div className="view_customer_sale_product_invoice_add_sale">
                        <div className="product_invoice_search_filter">
                                <i className="fal fa-search"></i>
                                <input type="search" />
                            </div>
                        </div>
                    </div>

                    <div className="view_customer_sale_product_invoice_table">
                        <table>
                            <tbody>
                                <tr className="table_header">
                                    <th>
                                        <div class="fields_with_filter" ><span>Type</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Name</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter"><span>Ref No</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Date</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Amount</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Status</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Action</span></div>
                                    </th>
                                </tr>

                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>Deposit</td>
                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>Deposit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ChequeScreen
