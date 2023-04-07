import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Auth from "./components/Auth"
import SignUp from './components/SignUp';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className='container'>

   <Header/>

 
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>
  
    
    </div>
  );
}

export default App;
