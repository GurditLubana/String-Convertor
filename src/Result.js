import React from 'react';


function Result(props) {
    
    const copyConvertedText = ()=>{
      
        navigator.clipboard.writeText(props.text);
        alert("Your text has been copied.");
        
      }
     
    return (
        <>
       <hr />
        <div>
            <h2>Converted text</h2>
            <textarea readOnly className ="p-2 container" name="result" value = {props.text} id="convertedResult" cols="175" rows="7" placeholder='Your Converted Text will show up here...'></textarea>
            <button className="btn btn-primary mx-2" onClick={copyConvertedText}> Copy above text</button>
        </div>
        </>
    );
}

export default Result;