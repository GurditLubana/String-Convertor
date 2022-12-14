import React, {useState} from "react";
import Form from "react-bootstrap/Form";

function InputBox(props) {
    const[inputValue,setInput] = useState("");
    const [converted,setConverted] = useState('Your Converted Text will show up here.');

    const handleInputValue = (userInput)=>{
        setInput(userInput.target.value);
    }
    const convertUppercase = ()=>{
        const covertedValue = inputValue.toUpperCase();
        setConverted(covertedValue);

    }
    
  return (
    <>
      <Form className=" container my-5">
        <h2 className="font-Times-Roman my-4">Following text will be Converted</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
          <Form.Control as="textarea" value= {inputValue} onChange = {handleInputValue}rows={7} placeholder="Enter your text here . . ."/>
        </Form.Group>
        <button  className="btn btn-primary mx-2" onClick={convertUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary">Convert to Lowercase</button>
      </Form>
      <hr />
        <div className='container'>
            <h2>Converted text</h2>
            <textarea className ="p-2" name="result" value = {converted} id="convertedResult" cols="175" rows="7"></textarea>
        </div>
    </>
  );
}

export default InputBox;
