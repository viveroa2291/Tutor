import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className='container'>
      
      <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
