import React from 'react'

function Tabdata({title}) {
    return (
        <div>
                <section class="all_created_parties_section">
    <div class="all_created_parties_inner_section">
       <div class="single_part_detail">
          <div class="search_add_party_btn_section">
           <div class="search_add_party_btn">
             <div class="search_party_btn">
              <i class="far fa-search"></i>
             </div>
            <div class="add_party_btn">
              <button data-toggle="modal" data-target="#createparty"><i class="fal fa-plus"></i> Add party</button>
            </div>
           </div>
           <div class="add_party_search_field">
            <span> <input type="search" id="search" placeholder="Search..." /><i class="fal fa-times"></i></span> 
           </div>
          </div>

          <div class="single_party_data_table">
            <table>
          
              <tbody>
                <tr class="single_party_table_header">
                  <th class="party_filter_box"><span>Party</span>
                    <a class="dropdown-toggle single_party_filter" type="button" id="singlepartyfilter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-filter"></i>
                    <object>
                    <div class="single_party_filter_do_action dropdown-menu" aria-labelledby="singlepartyfilter" >
                      <form>
                        <div class="party_filter_checkboxs">
                          <div class="party_filter_checkbox">
                            <input type="checkbox"/>
                            <label>All</label>
                          </div>
                          <div class="party_filter_checkbox">
                            <input type="checkbox"/>
                            <label>To Receive</label>
                          </div>
                          <div class="party_filter_checkbox">
                            <input type="checkbox"/>
                            <label>To Pay</label>
                          </div>
                          <div class="party_filter_btns">
                            <button>clear</button>
                            <button>Apply</button>
                          </div>
                        </div>
                      
                    </form> 
                    </div>
                     </object>
                    </a>
                    </th>
                  <th class="party_price_box">Amount</th>
              </tr>
  
              <tr class="single_party_table_body">
                 
                  <td>Health Care Center</td>
                  <td>100000$ 
                    <div class="single_party_crud_action">
                      <a class="dropdown-toggle single_party_crud" type="button" id="PartyDropDownMenuTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <i class="fas fa-ellipsis-v"></i> 
                        <div class="single_party_crud_do_action dropdown-menu" aria-labelledby="PartyDropDownMenuTwo" >
                         <a href="#"><i class="fas fa-eye"></i><span>View</span></a>
                         <a><i class="fas fa-pen"></i><span>Edit</span></a>
                         <a><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                        </div>
                        
                        </a>
                     </div>
                  </td>


              </tr>
               <tr class="single_party_table_body">
                 
                  <td>Health Care Center</td>
                  <td>100000$ 
 
                     <div class="single_party_crud_action">
                      <a class="dropdown-toggle single_party_crud" type="button" id="PartyDropDownMenuTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <i class="fas fa-ellipsis-v"></i> 
                        <div class="single_party_crud_do_action dropdown-menu" aria-labelledby="PartyDropDownMenuTwo" >
                         <a href="#"><i class="fas fa-eye"></i><span>View</span></a>
                         <a><i class="fas fa-pen"></i><span>Edit</span></a>
                         <a><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                        </div>
                        
                        </a>
                     </div>
                    
                  </td>
              </tr>
              
              </tbody>
            </table>
          </div>
       </div>
    </div>
    <div class="all_created_parties_inner_section_two">
        <div class="parties_profile_data">
         <div class="parties_profile_name_field"><h3>Name</h3></div> 
         <div class="parties_profile_data_all_other_field">
         <table>
           <tr>
             <td>Phone</td>
             <td>03224565678</td>
            </tr>
           
             <tr>
              <td>Address</td>
              <td>sufiabad colony street#5 houese#5 lahore</td>
             </tr>
             <tr>
              <td>Email</td>
              <td>admin@gmail.com</td>
             </tr>
            </table>
         </div>
        </div>
        <div class="parties_transaction_table">
           <div class="parties_transaction_table_header">
             <h4>Transaction</h4>
             <div class="parties_transaction_table_serarch"><i class="far fa-search"></i><input type="search" placeholder="search.."/></div>
           </div>

           <div class="parties_transaction_table_box">
            <table>
              <tbody><tr class="table_header">
                  <th>Type</th>
                  <th>Number</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Balance</th>
                  <th class="view_department_action">Actions</th>
              </tr>
  
              <tr class="table_body">
                 
                  <td>Health Care Center</td>
                  <td>+92224146567</td>
                  <td>09/09/2002</td>
                  <td>50000</td>
                  <td>50000</td>
                  <td>
                         <div class="view_department_action_btn view_department_action">
                         <button class="dropdown-toggle" type="button" id="PartyDropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-ellipsis-v"></i> </button>
                         <div class=" dropdown-menu view_department_do_action" aria-labelledby="PartyDropDownMenu" >
                              <a href="#"><i class="fas fa-eye"></i><span>View</span></a>
                              <a><i class="fas fa-pen"></i><span>Edit</span></a>
                              <a><i class="fas fa-trash-alt"></i><span>Delete</span></a>
                             </div>
                          </div>      
                  </td>
              </tr>      
          </tbody>
        </table>
           </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Tabdata
