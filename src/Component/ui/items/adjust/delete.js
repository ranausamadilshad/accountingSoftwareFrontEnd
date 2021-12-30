import React from "react";
import * as itemsApi from "../../../../apis/items/items";
import useApi from "../../../../hooks/useApi";

const DeleteItems = ({ id }) => {
  const { request } = useApi(itemsApi.deleteItems);
  const handleDelete = async () => {
    try {
      const { data } = await request(id);
      data && window.location.reload();
    } catch (_) {}
  };
  return (
    <>
      <section className="Viwe_Department_delete_page">
        <div
          className="modal fade"
          id="DeleteItems"
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
                  Delete Items
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
                  Are you Sure you want to delete this department?
                </p>
                <button className="btn btn-primary" onClick={handleDelete}>
                  Delete
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteItems;
