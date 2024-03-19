import React, { useState } from "react";
import "../App.css";

function FormsFile() {
  const [values, setValues] = useState({ firstName: "", lastName: "" });
  const [submittedValues, setSubmittedValues] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmittedValues((prevSubmittedValues) => [
      ...prevSubmittedValues,
      values,
    ]);
    setValues({ firstName: "", lastName: "" });
  };

  console.log(submittedValues);

  return (
    <>
      <h4 style={{ paddingLeft: "50px", fontSize: "25px" }}>First Name: </h4>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        style={{ marginLeft: "50px", height: "30px", width: "500px" }}
      ></input>
      <h4 style={{ paddingLeft: "50px", fontSize: "25px" }}>Last Name: </h4>
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        style={{ marginLeft: "50px", height: "30px", width: "500px" }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={handleSubmit}
        style={{ marginLeft: "50px", backgroundColor: "#FFBF00" }}
      >
        Submit
      </button>
    </>
  );
}

export default FormsFile;
