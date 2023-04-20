import React,{useState} from 'react'

export default function Bulb(props) {
    const[text,setText]=useState('dss')
    const handleOffclick =()=>{
        console.log("Uppercase was clicked"+text)
        // let newText=text.toUpperCase();
        // let newText='pic_bulboff.gif'
        let newTextt="document.getElementById().src='src/components/pic_bulboff.gif'"
        setText(newTextt)
    }
    
    const handleOnclick =()=>{
        console.log("Uppercase was clicked"+text)
        // let newText=text.toLowerCase();
        // let newText='pic_bulbon.gif'
        let newTextt="document.getElementById().src='pic_bulbon.gif'"
        setText(newTextt)
    }
    return (
    <div>
        <button className="btn btn-primary mx-3" onClick={handleOnclick}>Turn ON the Light</button>
        <button className="btn btn-primary mx-3" onClick={handleOffclick}>Turn OFF the Light</button>
    </div>
  )
}
