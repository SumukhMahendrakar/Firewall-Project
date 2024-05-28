import './App.css';
import Button from '@mui/material/Button';
import Topnav from './Components/TopNav';
import Home from './Components/home';
import React from 'react';
import Headers from './Components/Headers';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Sql from './Components/Sql';
import Xss from './Components/Xss';


function App() {
  return (
    <>
      <Router>
        <Topnav/>
        <Routes>
          <Route exact path = '/' element={<Home/>}/>

          <Route exact path = '/headers' element={<Headers/>}/>

          <Route exact path = '/sqlInjection' element={<Sql/>}/>

          <Route exact path = '/xss' element={<Xss/>}/>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;
