import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Auth from "./components/Auth"
import SignUp from './components/SignUp';
function App() {
  return (
    <div className='container'>
   <Header/>

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
