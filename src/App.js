import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth"
function App() {
  return (
    <div className='container'>
      
      <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
