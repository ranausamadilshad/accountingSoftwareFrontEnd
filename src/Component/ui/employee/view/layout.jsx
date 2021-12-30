/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateEmployee from "../../../app/employee/create/index";
import DeleteEmployee from "../../../app/employee/delete/index";
import UpdateEmployee from "../../../app/employee/update/index";
import Spinner from "../../../ui/spinner/Spinner";

import useApi from "../../../../hooks/useApi";
import * as api from "../../../../apis/employee/employee";

function ViewEmployeeScreen() {
  const [filter, setFilter] = useState("");
  const { request, data } = useApi(api.getAllEmplyees);
  const [id, setId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        await request();
        setIsLoading(false);
      } catch (_) {}
      setIsLoading(false);
    }
    fetchData();
  }, []);
  console.log("Vakueue", data);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch =
    data &&
    data.employees.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      );
    });

  return (
        <>
          <div className="sale-title" style={{ marginBottom: "2%" }}>
            {" "}
            <b> Employees Data</b>
          </div>
          <div>
            <div>
              <section class="">
                <div class="">
                  <div class="parties_transaction_table">
                    <div class="parties_transaction_table_header">
                      <div class="parties_transaction_table_serarch">
                        <i class="far fa-search"></i>
                        <input
                          type="text"
                          placeholder="search.."
                          value={filter}
                          onChange={searchText.bind(this)}
                        />
                      </div>
                      <div class="add_party_btn">
                        <div
                          data-toggle="modal"
                          data-target="#CreateEmployee"
                          className="btn btn-primary ">
                          <i class="fal fa-plus"></i> Add Employee
                        </div>
                      </div>{" "}
                    </div>
                    {dataSearch ? (
                      <div class="parties_transaction_table_box">
                        <table>
                          <tbody>
                            <tr class="table_header">
                              <th>Employee Name</th>
                              <th>Father Name</th>
                              <th>JOB Title</th>
                              <th>CNIC</th>
                              <th>Department</th>
                              <th>Phone No</th>
                              <th>Qualification</th>
                              <th>Blood Group</th>
                              <th>Salary</th>
                              <th>Address</th>
                              <th>Emergency Contact Person Name</th>
                              <th>Emergency Contact Person No</th>

                              <th class="view_department_action">Actions</th>
                            </tr>
                            {dataSearch &&
                              dataSearch.map((data) => (
                                <tr class="table_body">
                                  <td>{data.empName}</td>
                                  <td>{data.fatherName}</td>
                                  <td>{data.jobTitle}</td>
                                  <td>{data.cnic}</td>
                                  <td>{data.department}</td>
                                  <td>{data.phoneNo}</td>
                                  <td>{data.qualification}</td>
                                  <td>{data.bloodGroup}</td>
                                  <td>{data.salary}</td>
                                  <td>{data.address}</td>
                                  <td>{data.emgContactName}</td>
                                  <td>{data.emgContactNo}</td>

                                  <td
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}>
                                    <div class="view_department_action_btn view_department_action">
                                      <button
                                        class="dropdown-toggle"
                                        type="button"
                                        id="PartyDropDownMenu"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        {" "}
                                        <i class="fas fa-ellipsis-v"></i>{" "}
                                      </button>
                                      <div
                                        class=" dropdown-menu view_department_do_action"
                                        aria-labelledby="PartyDropDownMenu">
                                        <a
                                          data-toggle="modal"
                                          onClick={() => setId(data.empId)}
                                          data-target="#UpdateEmployee">
                                          <i class="fas fa-pen"></i>
                                          <span>Edit</span>
                                        </a>
                                        <a
                                          data-toggle="modal"
                                          onClick={() => setId(data.empId)}
                                          data-target="#DeleteEmployee">
                                          <i class="fas fa-trash-alt"></i>
                                          <span>Delete</span>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div class="parties_transaction_table_box">
                        <table>
                          <tbody>
                            <tr class="table_header">
                              <th>Employee Name</th>
                              <th>Father Name</th>
                              <th>JOB Title</th>
                              <th>CNIC</th>
                              <th>Department</th>
                              <th>Phone No</th>
                              <th>Qualification</th>
                              <th>Blood Group</th>
                              <th>Salary</th>
                              <th>Address</th>

                              <th class="view_department_action">Actions</th>
                            </tr>
                            {data &&
                              data.employees.map((data) => (
                                <tr class="table_body">
                                  <td>{data.empName}</td>
                                  <td>{data.fatherName}</td>
                                  <td>{data.jobTitle}</td>
                                  <td>{data.cnic}</td>
                                  <td>{data.department}</td>
                                  <td>{data.phoneNo}</td>
                                  <td>{data.qualification}</td>
                                  <td>{data.bloodGroup}</td>
                                  <td>{data.salary}</td>
                                  <td>{data.address}</td>

                                  <td
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}>
                                    <div class="view_department_action_btn view_department_action">
                                      <button
                                        class="dropdown-toggle"
                                        type="button"
                                        id="PartyDropDownMenu"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        {" "}
                                        <i class="fas fa-ellipsis-v"></i>{" "}
                                      </button>
                                      <div
                                        class=" dropdown-menu view_department_do_action"
                                        aria-labelledby="PartyDropDownMenu">
                                        <a
                                          data-toggle="modal"
                                          onClick={() => setId(data.empId)}
                                          data-target="#UpdateEmployee">
                                          <i class="fas fa-pen"></i>
                                          <span>Edit</span>
                                        </a>
                                        <a
                                          data-toggle="modal"
                                          onClick={() => setId(data.empId)}
                                          data-target="#DeleteEmployee">
                                          <i class="fas fa-trash-alt"></i>
                                          <span>Delete</span>
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </section>
              <CreateEmployee />
              <UpdateEmployee id={id && id} />
              <DeleteEmployee id={id && id} />
            </div>
          </div>
        </>
  );
}

export default ViewEmployeeScreen;
