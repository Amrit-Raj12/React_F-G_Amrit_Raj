import React from "react";

const FormData = ({ formData, onDelete }) => {
  return (
    <>
      <td>{formData.sno}</td>
      <td>Aromatic Bar</td>
      <td>{formData.text}</td>
      <td>{formData.phone}</td>
      <td>{formData.email}</td>
      <td>{formData.radio}</td>
      <td>{formData.name}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onDelete(formData);
          }}
        >
          Delete
        </button>{" "}
        <hr />
      </td>
    </>
  );
};

export default FormData;
