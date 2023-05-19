import './App.css';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import RegisterPage from './components/register/RegisterPage';
//import DataPage from './components/data/DataPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <img src='../../NART2.png' alt='NArt Logo'></img>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/Home" element={<HomePage/>}/>
            <Route exact path="/Register" element={<RegisterPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
