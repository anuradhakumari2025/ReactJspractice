import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        //  console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () => {
        //  console.log("Lowercase was clicked" + text);
        let newText='';
        setText(newText);
    }
    const handleOnChange = (event) => {
        //  console.log("On Change");
        setText(event.target.value)
    }
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState("");
    //  text = "new text"  //wrong way to change state
    //  setText("new text") ; //correct way to change state
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Change to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Change to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            </div>
            <div className="container my-4">
                <h3>Your text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes will taken to read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
