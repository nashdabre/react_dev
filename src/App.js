
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Router>
      <Navbar title= "TextUtils"/>
      <div>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text to analyze"/>} />
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
