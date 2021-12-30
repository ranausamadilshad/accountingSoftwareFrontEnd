import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../../../FormControl/FormikControl";

const AddItemStockScreen = ({
  initialValues,
  validationSchema,
  handleSubmit,
  data,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div className="create_company_field fade show active">
            <div className="create_company_section">
              <div className="profile_name">
                <label>
                  Total Quantity
                  <span className="mandatory"> *</span>
                </label>
                <FormikControl
                  control="input"
                  name="addQuantity"
                  type="number"
                />
              </div>
              {/* <div className="profile_name">
                <label>
                  At Price
                  <span className="mandatory"> *</span>
                </label>
                <FormikControl
                  control="input"
                  type="email"
                  name="purchasePrice"
                />
              </div> */}
              <div className="profile_name">
                <label>
                  Description
                  <span className="mandatory"> *</span>
                </label>
                <FormikControl control="input" name="description" />
              </div>
              <div className="profile_name">
                <label>
                  Date
                  <span className="mandatory"> *</span>
                </label>
                <FormikControl control="input" type="date" name="date" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {data && <p style={{ color: "green" }}>Added Stock.</p>}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddItemStockScreen;
