/** @format */

import React from "react";
import "./Home.css";

const HomeScreen = () => {
  return (
    <section class="home_dashboard_section">
      <div class="home_dashboard_card_one">
        <div class="home_dashboard_card_one_detail">
          <div class="dashboard_card_one_box">
            <div class="dashboard_card_one_detail">
              <h4>Sale</h4>
            </div>
            <div class="dashboard_card_one_selector">
              <select>
                <option>This Month</option>
              </select>
            </div>
          </div>
          <div class="dashboard_card_one_pricing">
            <h3>RS 1,250</h3>
            <span>Total sale(Sep)</span>
          </div>
        </div>
        <div class="home_dashboard_card_one_detail">
          <div class="dashboard_card_one_box">
            <div class="dashboard_card_one_detail">
              <h4>Expenses</h4>
            </div>
            <div class="dashboard_card_one_selector">
              <select>
                <option>This Month</option>
              </select>
            </div>
          </div>
          <div class="dashboard_card_one_pricing">
            <h3>RS 1,250</h3>
            <span>Total Expenses(Sep)</span>
          </div>
        </div>
        <div class="home_dashboard_card_one_detail">
          <div class="dashboard_card_one_box">
            <div class="dashboard_card_one_detail">
              <h4>Purchase</h4>
            </div>
            <div class="dashboard_card_one_selector">
              <select>
                <option>This Month</option>
              </select>
            </div>
          </div>
          <div class="dashboard_card_one_pricing">
            <h3>RS 1,250</h3>
            <span>Total Purchase(Sep)</span>
          </div>
        </div>
      </div>

      <div class="home_dashboard_card_two">
        <div class="home_dashboard_card_two_detail">
          <div class="dashboard_card_two_pricing">
            <span>you'll Receive</span>
            <h3>RS 1,250</h3>
          </div>
          <div class="receive_amount_box_detail">
            <div class="receive_amount_box">
              <span>Asad</span>
              <span class="receiveable_amount">90</span>
            </div>
            <div class="receive_amount_box">
              <span>Asad</span>
              <span class="receiveable_amount">90</span>
            </div>
          </div>
        </div>

        <div class="home_dashboard_card_two_detail">
          <div class="dashboard_card_two_pricing">
            <span>you'll pay</span>
            <h3>RS 1,250</h3>
          </div>
          <div class="receive_amount_box_detail">
            <div class="receive_amount_box">
              <span>Asad</span>
              <span class="payable_amount">90</span>
            </div>
            <div class="receive_amount_box">
              <span>Asad</span>
              <span class="payable_amount">90</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
