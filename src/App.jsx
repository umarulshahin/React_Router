import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import Usage from './Pages/Usage';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import Header from './Components/Header';
import "./App.css";
import Details from './Pages/Details';

const App = () => {
  return (
    <BrowserRouter>
  
     <Header />
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="Usage" element={<Usage />}/>
      <Route path='Settings' element={<Settings />}/>
      <Route path='Users' element={<Users />}/>
      <Route path='details' element={<Details />}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App