import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Auth from "./components/Auth"
import SignUp from './components/SignUp';
function App() {

  const location = useLocation(); // Created to hide headers
  const showHeader = location.pathname !== '/auth'; // hide the header from the auth
  const showSignup = location.pathname !== '/signup'; // to hide the header from the signup 
  return (
    <div className='container'>
   

   {showHeader && showSignup && <Header/>}
 
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
  
      
    </div>
  );
}

export default App;
