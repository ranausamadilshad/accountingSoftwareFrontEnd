import React from 'react'
import {Link} from 'react-router-dom'

const ReportSidebar = () => {
    return (
        <section class="reports_body_section">

            <section class="reports_inner_sidebar_section report_responsive_nav_bar">

                <div class="reports_inner_sidebar">
                    <h2>Transction Report</h2>
                    <div class="reports_inner_sidebar_list">
                        <a href="#">Sale</a>
                        <a href="#">Purchase</a>
                        <a href="#">Day Book</a>
                        <a href="#">All Transaction</a>
                        <a href="#">Profit And Loss</a>
                        <a href="#">Bill Wise Profit</a>
                        <a href="#">Cash Flow</a>
                        <a href="#">Balance Sheet</a>

                    </div>

                    <h2>party Report</h2>
                    <div class="reports_inner_sidebar_list">
                        <Link to="/partystatement">Party statement</Link>
                        <a href="#">party wise profit & loss</a>
                        <a href="#">all parties</a>
                        <a href="#">party report by item</a>
                        <a href="#">sale purchase by party</a>
                        <a href="#">sale purchase by party group</a>
                        <a href="#">Balance Sheet</a>

                    </div>
                </div>


            </section>

            <div class="reports_body">

            </div>

        </section>
    )
}

export default ReportSidebar
