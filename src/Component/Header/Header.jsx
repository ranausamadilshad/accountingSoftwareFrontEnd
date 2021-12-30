/** @format */

import React, { useEffect, useState } from "react";
import company_logo from "../../Assets/image/download.png";
import login_profile_img from "../../Assets/image/login_img.png";
import "../../Css/Style.css";
import { Link } from "react-router-dom";
import CreateCompany from "../app/company/create";
import { useHistory } from "react-router";
// import Update from "../app/company/update";
import * as api from "../../apis/company/company";
import useApi from "../../hooks/useApi";
import axios from "axios";

const Header = ({ sideBar, setSideBar, setReportSidebar, reportSidebar }) => {
  const history = useHistory();
  const [LoginProfileBtn, setLoginProfileBtn] = useState(false);
  const [searchField, setSearchField] = useState(false);
  const [logos, setLogos] = useState();
  const { request, data } = useApi(api.getCompany);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request();
        setLogos(data && data.company.logo);
      } catch (_) {}
    }
    fetchData();
  }, []);

  const handleSidebar = () => {
    setReportSidebar(false);
    if (sideBar) {
      setSideBar(false);
      console.log(sideBar);

      setLoginProfileBtn(false);
    } else {
      setSideBar(true);
    }
  };

  const handleChangeAdmin = () => {
    if (LoginProfileBtn) {
      setLoginProfileBtn(false);
    } else {
      setLoginProfileBtn(true);
      setSearchField(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };
  return (
    <>
      <header>
        <div className="header_section">
          <div className="header_sidebar_control">
            <div className="header_sidebar_control_section">
              <div className="header_company_logo">
                <img src={company_logo} alt="" />
              </div>
              <div
                className="sidebar_controler_btn open_close_nav"
                onClick={handleSidebar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              className="company_name"
              style={{ display: "flex", alignContent: "center" }}>
              <p>E HISAAB</p>
            </div>
          </div>

          <div className="responsive_header_sidebar_control">
            <div
              className="sidebar_controler_btn open_close_nav"
              onClick={handleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="responsive_header_logo">
            <div className="header_company_logo">
              <img src={company_logo} alt="" />
            </div>
          </div>

          <div className="header_details">
            <div className="header_detail_section">
              <div
                className="header_login_details_section"
                data-toggle="modal"
                data-target="#Update">
                <div
                  className="header_login_details"
                  onClick={handleChangeAdmin}>
                  <figure>
                    {logos && logos ? (
                      <img src={logos} alt="Logo " />
                    ) : (
                      <img src={login_profile_img} alt="ddkk" />
                    )}
                  </figure>
                  <p>{data && data.company && data.company.busName}</p>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div
                  className={
                    LoginProfileBtn
                      ? "header_login_details_section_click_data LoginProfileBtn"
                      : "header_login_details_section_click_data"
                  }>
                  <Link to="/profile">My profile</Link>
                </div>
              </div>
              <div className="responsive_header_login_details">
                <a onClick={handleChangeAdmin}>
                  <i className="fa fa-ellipsis-v"></i>
                </a>
                <div
                  className={
                    LoginProfileBtn
                      ? "header_login_details_section_click_data LoginProfileBtn"
                      : "header_login_details_section_click_data"
                  }>
                  <a href="#">My profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header>
        <div className="header_section">
          <div className="header_sidebar_control">
            <div className="header_sidebar_control_section">
              <div className="header_company_logo">
                <img src={company_logo} alt="" />
              </div>
              <div
                className="sidebar_controler_btn open_close_nav"
                onClick={handleSidebar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="company_name">
              <p>E HISAAB</p>
            </div>
          </div>

          <div className="responsive_header_sidebar_control">
            <div
              className="sidebar_controler_btn open_close_nav"
              onClick={handleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="responsive_header_logo">
            <div className="company_name">
              <p>E HISAAB</p>
            </div>
          </div>

          <div className="header_details">
            <div className="header_detail_section">
              <div className="header_login_details_section">
                <div
                  className="header_login_details"
                  data-toggle="modal"
                  data-target="#CreateCompany">
                  <figure>
                    {logos && logos ? (
                      <img src={logos} alt="Logo " />
                    ) : (
                      <img src={login_profile_img} alt="ddkk" />
                    )}
                  </figure>
                  <p>{data && data.company && data.company.busName}</p>
                </div>
              </div>
              <span>
                <button className="btn btn-primary" onClick={logout}>
                  logout
                </button>
              </span>
              <div className="responsive_header_login_details">
                <a
                  type="button"
                  id="comany_responsive_dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v"></i>
                </a>
                <div
                  className="header_login_details_section_click_data  dropdown-menu"
                  aria-labelledby="comany_responsive_dropdown">
                  <div
                    className="header_login_details"
                    data-toggle="modal"
                    data-target="#CreateCompany">
                    <figure>
                      {logos && logos ? (
                        <img src={logos} alt="Logo " />
                      ) : (
                        <img src={login_profile_img} alt="ddkk" />
                      )}
                    </figure>
                    <p>{data && data.company && data.company.busName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <CreateCompany /> */}
    </>
  );
};

export default Header;
