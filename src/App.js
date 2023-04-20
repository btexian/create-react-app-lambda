// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
 import About from './components/About';
// import React,{useState} from 'react';


function App() {
  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message, 
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    
   <Navbar title="TextUtils"mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
      <div className="container my-5" >
      <Textform showAlert={showAlert} heading="Enter text" mode={mode}/>
    {/* <About/> */}
     
      </div>
      
       

    </>
  );
}

export default App;
