// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Textform from '///'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  const toggle=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#03224f';
      showalert('Dark mode has been enabled','success')
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert('light mode has been enabled','success')
    }
  }

  return (
    <>
    <Router>

    <Navbar title="RamShyamTraders" about="About us" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>

    <div className='container my-3' >
    <Routes>
          

          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<Textform heading="Enter your details " mode={mode} showalert={showalert}/>} />
    </Routes>
    </div>
    </Router>
   
      
   

    
    </>
    
  );
}

export default App;
