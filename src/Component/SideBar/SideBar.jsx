/** @format */

import React from "react";
import "../../Css/Style.css";
import { Link } from "react-router-dom";
import CreateItems from "../app/item/create";
import CreatePartiess from "../app/party/create";
import CreateEmployee from "../app/employee/create/index";
import CreatePaymentIn from "../app/sale/paymentIn/AddPaymentIn/index";
import AddPaymentOut from "../app/purchase/paymentOut/create/index";

const SideBar = ({ sideBar, reportSidebar, setReportSidebar }) => {
  const handleClick = () => {
    setReportSidebar(!reportSidebar);
    console.log("side bar", reportSidebar);
  };

  return (
    <>
      <section
        className={
          sideBar
            ? "sidebar_section responsive_nav_bar "
            : "sidebar_section responsive_nav_bar responsive_bar"
        }>
        <div className="sidebar_main_wrapper">
          <div
            className="sidebar_main_heading_section"
            id="accordionEx"
            role="tablist"
            aria-multiselectable="true">
            <div className="sidebar_heading_title">
              <Link to="/home" className="side_bar_single_sub_menu">
                <div className="logo_plus_sub_menu">
                  <i className="fas fa-home"></i>
                  <span> Home</span>
                </div>
              </Link>
            </div>

            <div className="sidebar_heading_title">
              <Link to="/createCompany" className="side_bar_single_sub_menu">
                <div className="logo_plus_sub_menu">
                  <i class="fas fa-building"></i> <span> Company</span>
                </div>
              </Link>
            </div>
            <div className="sidebar_heading_title">
              <Link to="/viewEmployee" className="side_bar_single_sub_menu">
                <div className="logo_plus_sub_menu">
                  <i class="fas fa-building"></i> <span> Employee</span>
                </div>
                <div className="animated_icon">
                  <i
                    className="far fa-plus"
                    data-toggle="modal"
                    data-target="#CreateEmployee"></i>
                </div>
              </Link>
            </div>

            <div className="sidebar_heading_title">
              <Link to="/parties" className="side_bar_single_sub_menu">
                <div className="logo_plus_sub_menu">
                  <i className="fas fa-user-friends"></i>
                  <span> Parties</span>
                </div>
                <div className="animated_icon">
                  <i
                    className="far fa-plus"
                    data-toggle="modal"
                    data-target="#CreatePartiess"></i>
                </div>
              </Link>
            </div>

            <div className="sidebar_heading_title">
              <Link to="/items" className="side_bar_single_sub_menu">
                <div className="logo_plus_sub_menu">
                  <i className="fas fa-shapes"></i>
                  <span> Items</span>
                </div>
                <div className="animated_icon">
                  <i
                    className="far fa-plus"
                    data-toggle="modal"
                    data-target="#CreateItems"></i>
                </div>
              </Link>
            </div>

            <div className="sidebar_heading_title">
              <div role="tab" id="headingSale">
                <a
                  className="side_bar_single_sub_menu final"
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapseSale"
                  aria-expanded="true"
                  aria-controls="collapseSale">
                  <div className="logo_plus_sub_menu">
                    <i className="fas fa-ballot-check"></i>
                    <span> Sale</span>
                  </div>
                  <div className="animated_icon">
                    {" "}
                    <i className="fas fa-angle-down rotate-icon"></i>
                  </div>
                </a>
              </div>
              <div
                id="collapseSale"
                className="collapse "
                role="tabpanel"
                aria-labelledby="headingSale"
                data-parent="#accordionEx">
                <div className="sidebar_sub_child_menu_list">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Link to="/saleinvoices">Sale Invoices</Link>
                    <Link to="/createsaleinvoices">
                      {" "}
                      <i class="far fa-plus"></i>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Link to="/estimation">Estimation/ Quotation</Link>
                    <Link to="/createestimation">
                      {" "}
                      <i class="far fa-plus"></i>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Link to="/paymentin">Payment IN</Link>
                    <div>
                      {" "}
                      <i
                        style={{ color: "#b7c0cd" }}
                        class="far fa-plus"
                        data-toggle="modal"
                        data-target="#paymentin"></i>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Link to="/saleorder">Sale Order</Link>
                    <Link to="/createsaleorder">
                      {" "}
                      <i class="far fa-plus"></i>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Link to="/deliverychallan">Delivery Challan</Link>
                    <Link to="/createdeliverychallan">
                      {" "}
                      <i class="far fa-plus"></i>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Link to="/salereturn">Sale Return/ Cr. Note</Link>
                    <Link to="/createsalereturn">
                      {" "}
                      <i class="far fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar_heading_title">
              <div role="tab" id="headingPurchase">
                <a
                  className="side_bar_single_sub_menu final"
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapsePurchase"
                  aria-expanded="true"
                  aria-controls="collapsePurchase">
                  <div className="logo_plus_sub_menu">
                    <i className="fas fa-shopping-cart"></i>
                    <span> Purchase</span>
                  </div>
                  <div className="animated_icon">
                    {" "}
                    <i className="fas fa-angle-down rotate-icon"></i>
                  </div>
                </a>
              </div>
              <div
                id="collapsePurchase"
                className="collapse "
                role="tabpanel"
                aria-labelledby="headingPurchase"
                data-parent="#accordionEx">
                <div className="sidebar_sub_child_menu_list">
                  <Link
                    to="/purchasebills"
                    className="side_bar_single_sub_menu">
                    <div className="logo_plus_sub_menu">
                      <span>Purchase Bills</span>
                    </div>
                    <div className="animated_icon">
                      <Link to="/addPurchase">
                        {" "}
                        <i className="far fa-plus"></i>
                      </Link>
                    </div>
                  </Link>
                  <Link to="/purchaseout" className="side_bar_single_sub_menu">
                    <div className="logo_plus_sub_menu">
                      <span>Payment Out</span>
                    </div>
                    <div className="animated_icon">
                      <div data-toggle="modal" data-target="#paymentout">
                        {" "}
                        <i className="far fa-plus"></i>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/purchaseorder"
                    className="side_bar_single_sub_menu">
                    <div className="logo_plus_sub_menu">
                      <span>Purchase Order</span>
                    </div>
                    <div className="animated_icon">
                      <Link to="/addPurchaseOrder">
                        {" "}
                        <i className="far fa-plus"></i>
                      </Link>
                    </div>
                  </Link>
                  <Link
                    to="/purchasereturn"
                    className="side_bar_single_sub_menu">
                    <div className="logo_plus_sub_menu">
                      <span>Purchase return/DR .Note</span>
                    </div>
                    <div className="animated_icon">
                      <Link to="/addReturn">
                        {" "}
                        <i className="far fa-plus"></i>
                      </Link>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="sidebar_heading_title">
              <Link to="/expenses" className="side_bar_single_sub_menu">
                <div className="logo_plus_sub_menu">
                  <i className="fas fa-wallet"></i>
                  <span> Expenses</span>
                </div>
                <div className="animated_icon">
                  <i className="far fa-plus"></i>
                </div>
              </Link>
            </div>

            <div className="sidebar_heading_title">
              <div role="tab" id="headingCash&Bank">
                <a
                  className="side_bar_single_sub_menu final"
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapseCash&Bank"
                  aria-expanded="true"
                  aria-controls="collapseCash&Bank">
                  <div className="logo_plus_sub_menu">
                    <i className="fas fa-shopping-cart"></i>
                    <span> Cash & Bank</span>
                  </div>
                  <div className="animated_icon">
                    {" "}
                    <i className="fas fa-angle-down rotate-icon"></i>
                  </div>
                </a>
              </div>
              <div
                id="collapseCash&Bank"
                className="collapse "
                role="tabpanel"
                aria-labelledby="headingCash&Bank"
                data-parent="#accordionEx">
                <div className="sidebar_sub_child_menu_list">
                  <Link to="/cashinhands">Cash In Hand</Link>
                  <Link to="/cheque">Cheques</Link>
                </div>
              </div>
            </div>
            {/* <div className="sidebar_heading_title">
              <Link to='/items' className="side_bar_single_sub_menu" onClick={handleClick}>
                <div className="logo_plus_sub_menu"><i className="fas fa-shapes"></i><span> Items</span></div>
                <div className="animated_icon"><i className="far fa-plus" data-toggle="modal" data-target="#CreateItems"></i></div>
              </Link >
            </div> */}

            <div className="sidebar_heading_title">
              <p className="side_bar_single_sub_menu" onClick={handleClick}>
                <div className="logo_plus_sub_menu">
                  <i className="fas fa-wallet"></i>
                  <span> Reports</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CreatePartiess />
      <CreateItems />
      <CreateEmployee />
      <CreatePaymentIn />
      <AddPaymentOut />
    </>
  );
};

export default SideBar;
