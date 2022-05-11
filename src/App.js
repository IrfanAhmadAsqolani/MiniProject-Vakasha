// import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Find from './Pages/Find';
import About from './Pages/About';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/Find' element={<Find />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/SignUp' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
