import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('')
    const handleUpclick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoclick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClear = () => {
        let newText = '';

        setText(newText);
        props.showAlert("Text Cleared!!!","success")
    }
    const handleCopy = () => {
        // console.log("copied")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!!!","success")
    }

    const handleOnchange = (event) => {
        console.log("On change")
        setText(event.target.value);
    }




    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-3 my-3 " onClick={handleLoclick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>copy text</button>


                {/* <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert To Uppercase</button> */}


            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters </p>
                <p>{0.008 * text.split("").length}minutes read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
