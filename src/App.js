import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Otoslotto from './otoslotto';
import Home from './Home'
import Eurojackpot from './Eurojackpot';
import Hatoslotto from './Hatoslotto';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={ <Home />} ></Route>
          <Route exact path="/otoslotto" element={ <Otoslotto />} ></Route>
          <Route exact path="/eurojackpot" element={ <Eurojackpot />} ></Route>
          <Route exact path="/hatoslotto" element={ <Hatoslotto />} ></Route>
        </Routes>
    </Router>
    </>
  );
}
export default App;
