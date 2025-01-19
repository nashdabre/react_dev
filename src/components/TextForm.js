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
  setspecial(newText || '')
}




const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
}

const handlecleartext = () =>{
  let newText = "";
  setText(newText)
  setEmails([])
  setspecial('')
}

const handleOnChange = (event) =>{
    setText(event.target.value);
}

const handleExtractEmail = () => {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const extractedEmails = text.match(emailRegex);
  setEmails(extractedEmails || []); // Save the extracted emails to state
};

    const [text, setText] = useState('');//hooks
    const[spec,setspecial] = useState('')
    const [emails, setEmails] = useState([]);
    

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
  <button className="btn btn-primary mx-2" onClick={handleExtractEmail}>Extract Emails</button>


</div>
<div className='container my-3'>
  <h1>Your text summary</h1> 
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Mintues read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    {spec.length >0 && (
      <>
      <h2>Extracted special char</h2>
      <p>{spec}</p>
      </>
    )

    }
    {emails.length > 0 && (
          <>
            <h2>Extracted Emails</h2>
            <ul>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </>
        )}
</div>
</>
    
  );
}
