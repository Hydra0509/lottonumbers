import React,{useEffect} from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Otoslotto from './otoslotto';
import Home from './Home'
import Eurojackpot from './Eurojackpot';
import Hatoslotto from './Hatoslotto';
import Skandinav from './Skandinav';

function App() {
  useEffect(() => {
    document.title = "Lotto number generator"
 }, []);
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={ <Home />} ></Route>
          <Route exact path="/otoslotto" element={ <Otoslotto />} ></Route>
          <Route exact path="/eurojackpot" element={ <Eurojackpot />} ></Route>
          <Route exact path="/hatoslotto" element={ <Hatoslotto />} ></Route>
          <Route exact path="/skandinav" element={ <Skandinav />} ></Route>
        </Routes>
    </Router>
    </>
  );
}
export default App;
