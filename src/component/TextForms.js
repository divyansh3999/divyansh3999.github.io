import React, { useState } from "react";
import ModalFun from "../component/Modal";

export default function TextForms(props) {
  const setUpCase = () => {
    console.log("UpperCase " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
 
  const [text, setText] = useState("Enter Your Text");
  // text = "new text"; // wrong way to change the state
  // setText("New Text"); // correct way to change the state
  return (
    <div className="container">
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="6"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={setUpCase}>
          Set Uppercase
        </button>
      
      </div>
   {/* <ModalFun />  */}
    </div>
  );
}
