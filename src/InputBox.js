import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Result from "./Result";




function InputBox(props) {
    const[inputValue,setInput] = useState("") ;
    const [converted,setConverted] = useState('');

 
   
    const handleInputValue = (userInput)=>{
        setInput(userInput.target.value);
        
        
    }
    const convertUppercase = ()=>{
      let covertedValue = inputValue.toUpperCase();
      setConverted(covertedValue);
    }

    const convertLowercase= ()=>{
      let covertedValue = inputValue.toLowerCase();
      setConverted(covertedValue);
    }
   
    const clearTextArea = ()=>{

      setInput("");
      setConverted("");
    }
    
  return (
    <>
    <div className="container my-5">
      <Form>
        <h2 className="font-Times-Roman my-4">Following text will be Converted</h2>
        <Form.Group className="mb-3"  >
          <Form.Control as="textarea" value= {inputValue} onChange = {handleInputValue} rows={7} placeholder="Enter your text here . . ."/>
        </Form.Group>
        
      </Form>
      <button  className="btn btn-primary mx-2" onClick={convertUppercase}>Convert to Uppercase</button>
      <button className="btn btn-primary"onClick={convertLowercase}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2"onClick={clearTextArea}>Clear text</button>

      <Result text = {converted}/> 
      
    </div>
    </>
  );
}

export default InputBox;
