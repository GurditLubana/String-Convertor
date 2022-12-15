import React from 'react';

function Result(props) {
    
    
    return (
        <>
       <hr />
        <div>
            <h2>Converted text</h2>
            <textarea readOnly className ="p-2 container" name="result" value = {props.text} id="convertedResult" cols="175" rows="7"></textarea>
        </div>
        </>
    );
}

export default Result;