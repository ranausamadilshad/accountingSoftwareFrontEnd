import React from "react";
import { Field } from "formik";
import { Form, Formik } from "formik";
function StatusScreen({ initialValues, onSubmit }) {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
        // addRow={addRow}
        // enableReinitialize={true}
      >
        {() => (
          <Form>
            <div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Change Status
                      </h5>

                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      .
                      <Field
                        className="customer_sale_body_select_field"
                        as="select"
                        name="status"
                        type="number"
                        required>
                        <option disabled value="">
                          Select
                        </option>
                        <option value="1">reopen</option>
                        <option value="0">deposite</option>
                      </Field>
                      ..
                    </div>
                    <div class="modal-footer">
                      <button
                        //   type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal">
                        Close
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default StatusScreen;
