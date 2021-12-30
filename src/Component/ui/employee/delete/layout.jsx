/** @format */

import React from "react";
import Spinner from "../../spinner/Spinner";

const DeleteEmployeeScreen = ({ handleDelete, isLoading }) => {
  return (
    <>
      {isLoading == true ? (
        <Spinner />
      ) : (
        <section className="Viwe_Department_delete_page">
          <div
            className="modal fade"
            id="DeleteEmployee"
            tabindex="-1"
            role="dialog"
            aria-labelledby="DeleteDepartmentTitle"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{ padding: "0px 10px" }}>
                <div
                  className="modal-header"
                  style={{ padding: "1rm 5px !important" }}>
                  <h5 className="modal-title" id="DeleteDepartmentTitle">
                    Delete Employee
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <section
                  className="Delete_Department_department_form"
                  style={{
                    display: " flex",
                    flexDirection: "column",
                    gap: "10px 0px",
                    padding: "10px 10px",
                  }}>
                  <p style={{ color: "#6c757d", fontSize: "16px" }}>
                    Are you Sure you want to delete this Employee?
                  </p>

                  <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                  </button>
                </section>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DeleteEmployeeScreen;
