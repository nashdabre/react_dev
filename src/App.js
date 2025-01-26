
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
  }
  return (
    <>
      <Router>
      <Navbar title= "TextUtils" mode ={mode} toggleMode = {toggleMode}/>
      <div>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text to analyze" mode ={mode}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router> 


<div className='container my-3'>


</div>
    </>

  );
}

export default App;
