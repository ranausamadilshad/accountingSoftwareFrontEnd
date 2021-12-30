/** @format */

import React from "react";
import "./login.css";
import { Formik, Form } from "formik";
import FormikControl from "../FormControl/FormikControl";
function LoginForm({ initialValues, validationSchema, onSubmit, error }) {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <section class="create_department_section">
            <section class="create_department_form">
              <div class="create_department_container">
                <h1 style={{ marginBottom: "30px" }}>Login</h1>
                <Form>
                  <div class="create_department_form_fields">
                    <div class="input_field">
                      <label>
                        Email <span class="mandatory"> *</span>
                      </label>
                      <FormikControl
                        control="input"
                        type="input"
                        name="email"
                      />

                      {/* <input type="text" placeholder="" required /> */}
                    </div>
                    <div class="input_field">
                      <label>
                        Password <span class="mandatory"> * </span>
                      </label>
                      <FormikControl
                        control="input"
                        type="password"
                        name="password"
                      />
                      {/* <input type="password" placeholder="" required /> */}
                      {error && (
                        <p style={{ color: "red" }}>
                          {error.data && error.data.message}
                        </p>
                      )}
                    </div>
                    <div class="submit_btn">
                      <button onClick={onsubmit} type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </section>
          </section>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
