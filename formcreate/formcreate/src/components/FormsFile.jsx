import React, { useState } from "react";
import "../App.css";

function FormsFile() {
  const [getvalue, setValue] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <h4 style={{ paddingLeft: "50px", fontSize: "25px" }}>First Name: </h4>
      <input
        type="text"
        style={{ marginLeft: "50px", height: "30px", width: "500px" }}
      ></input>
      <h4 style={{ paddingLeft: "50px", fontSize: "25px" }}>Last Name: </h4>
      <input
        type="text"
        style={{ marginLeft: "50px", height: "30px", width: "500px" }}
      ></input>
      <br></br>
      <br></br>
      <button style={{ marginLeft: "50px" }}>Submit</button>
    </>
  );
}

export default FormsFile;
