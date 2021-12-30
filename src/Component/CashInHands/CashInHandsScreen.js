import React from 'react'
import '../../Css/ViewDetailsScreen.css';
import {Link} from 'react-router-dom'


const CashInHandsScreen = () => {
    return (
        <>
          <section className="view_customer_sale_section">
                <div className="view_customer_sale_product_invoice_list">

                    <div className="view_customer_sale_product_invoice_table_header"><span>TRANSACTIONS</span></div>
                    <div className="view_customer_sale_product_invoice_detail">
                        <div className="view_customer_sale_product_invoice_search_filter">
                            <div className="product_invoice_search_filter">
                                <i className="fal fa-search"></i>
                                <input type="search" />
                            </div>
                        </div>
                        <div className="view_customer_sale_product_invoice_add_sale">
                        <div data-toggle="modal" data-target="#AdjustCash" className='btn btn-primary'>Adjust Cash</div>
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
                                        <div class="fields_with_filter" ><span>Date</span><i class="fas fa-filter"></i></div>
                                    </th>
                                    <th>
                                        <div class="fields_with_filter" ><span>Amount</span><i class="fas fa-filter"></i></div>
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
                                    <td>
                                        <div className="sale_invoice_action_btn">
                                            <button className="dropdown-toggle" type="button" id="Sale_invoice" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-ellipsis-v"></i>
                                            </button>
                                            <div className="sale_invoice_do_action dropdown-menu" aria-labelledby="Sale_invoice" >
                                                <a><i className="fas fa-pen"></i><span>Edit</span></a>
                                                <a><i className="fas fa-trash-alt"></i><span>Delete</span></a>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr className="table_body">

                                    <td>12/3/2020</td>
                                    <td>5000</td>
                                    <td>shery</td>
                                    <td>cash</td>
                                    <td>
                                        <div className="sale_invoice_action_btn">
                                            <button className="dropdown-toggle" type="button" id="Sale_invoice" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-ellipsis-v"></i>
                                            </button>
                                            <div className="sale_invoice_do_action dropdown-menu" aria-labelledby="Sale_invoice" >
                                                <a><i className="fas fa-pen"></i><span>Edit</span></a>
                                                <a><i className="fas fa-trash-alt"></i><span>Delete</span></a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CashInHandsScreen
