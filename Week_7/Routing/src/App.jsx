import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Education from "./pages/Education"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){

  return(

    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />}>Home</Route>
      <Route path = "/Education" element = {<Education />}>Education</Route>
    </Routes>  
    </BrowserRouter>
  );
}

export default App;

