import React, {useState} from 'react'



export default function TextForm(props) {
const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
}

const handleExtractSpecialChars = () => {
  // Use a regular expression to match all special characters
  let specialChars = text.match(/[^a-zA-Z0-9\s]/g);
  let newText = specialChars ? specialChars.join('') : '';
  setText(newText);
}


const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
}

const handlecleartext = () =>{
  let newText = "";
  setText(newText)
}

const handleOnChange = (event) =>{
    setText(event.target.value);
}

    const [text, setText] = useState('');//hooks
    

  return (
    <>
    <div>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea
      className="form-control" value={text} onChange={handleOnChange}
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handlecleartext}>clear</button>
  <button className="btn btn-primary mx-2" onClick={handleExtractSpecialChars}>special char</button>



</div>
<div className='container my-3'>
  <h1>Your text summary</h1> 
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Mintues read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
    
  );
}
