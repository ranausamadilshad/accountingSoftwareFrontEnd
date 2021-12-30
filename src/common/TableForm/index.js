import { Field } from "formik";
import React from "react";

const TableForm = ({ rows, items, columns, formFields }) => {
  return (
    <table>
      <tbody>
        <tr className="table_header">
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
        {rows.map((_, index) => (
          <>
            <tr className="table_body" key={index}>
              <td>
                <Field as="select" name={`itemId${index}`} required>
                  <option value="" disabled selected>
                    Select
                  </option>
                  {items &&
                    items.map((data, index) => (
                      <>
                        <option value={index}>{data.itemName}</option>
                      </>
                    ))}
                </Field>
              </td>
              {formFields.map((field) => (
                <td>
                  <Field
                    control="input"
                    name={field + index}
                    type="number"
                    required
                  />
                </td>
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default TableForm;
