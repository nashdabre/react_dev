
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }

  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled","success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success")
      }
  }
  return (
    <>
      <Router>
      <Navbar title= "TextUtils" mode ={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <div>
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter" mode ={mode}/>} />
          <Route path="/about" element={<About mode ={mode} />} />
        </Routes>
      </div>
    </Router> 


<div className='container my-3'>


</div>
    </>

  );
}

export default App;
