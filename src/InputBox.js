import React from "react";

import Form from "react-bootstrap/Form";

function InputBox(props) {
  return (
    <>
      <Form className=" container my-5">
        <h1 className="font-Times-Roman">Convert following text</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
          <Form.Control as="textarea" rows={7} placeholder="Enter your text here . . ."/>
        </Form.Group>
        <button className="btn btn-primary mx-2">Convert to Uppercase</button>
        <button className="btn btn-primary">Convert to Lowercase</button>
      </Form>
    </>
  );
}

export default InputBox;
