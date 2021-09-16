import React from "react";
import FormData from "./FormData";
import { Table } from "react-bootstrap";

const FormDatas = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Form Data List</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Form Name</th>
            <th>Text Field</th>
            <th>Phone Field</th>
            <th>Email Field</th>
            <th>Radio Button</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        {props.formDatas.length === 0
          ? "No Datas to Display!"
          : props.formDatas.map((formData) => {
              return (
                <tbody>
                  <tr>
                    <FormData
                      formData={formData}
                      key={formData.sno}
                      onDelete={props.onDelete}
                    />
                  </tr>
                </tbody>
              );
            })}
      </Table>
    </div>
  );
};

export default FormDatas;
