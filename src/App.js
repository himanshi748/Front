import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Bollywood from './components/Bollywood';
import Home from './components/Home';
import Technology from './components/Technology';
import Travel from './components/Travel';
import Fitness from './components/Fitness';
import {Link} from 'react-router-dom';
import Data from "./components/Data";
import Header from './components/Header';




function App() {
  
  return (
    
   
      
      <BrowserRouter>
      
      <h1  className='mt-5 text-center'><span>The</span>Siren</h1>
<br/>
        <div className='menu-tabs container'>

            <div className='menu-tab d-flex justify-content-around'>

            <Link to={'/'}><button className='btn btn-light btn-lg'>Home</button></Link >
            
            <Link to={'/bollywood'}><button className='btn btn-light btn-lg'>Bollywood</button></Link>

            <Link to={'/technology'}> <button className='btn btn-light btn-lg'>Technology</button></Link>

            <Link to={'/travel'}>  <button className='btn btn-light btn-lg'>Travel</button></Link>

            <Link to={'/fitness'}><button className='btn btn-light btn-lg'>Fitness</button></Link>

            <Link to={'/data'}><button className='btn btn-light btn-lg'>Data</button></Link >

            </div>
            <hr/>
            <hr/>
            
<Header/>
<hr></hr>
<hr></hr>
<h1 className="card-title display-2 d mb-0">THE LATEST </h1>
      
         
            
        </div>


     <Routes>
     
        <Route path='/' element={<Home/>} />'
        <Route path='/home' element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path='/Travel' element={<Travel/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path="/data" element={<Data />}/>
    

     </Routes>
 </BrowserRouter>



  )
}

export default App