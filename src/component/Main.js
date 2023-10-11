import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from '../App'
import MidContainer from './MidContainer' 
import About from './About'

export default function(){


    return(
        

        <Routes>
      
       
        <Route path="/"  element={<App/>} />
        <Route path="/products"  element={<MidContainer/>} /> 
        <Route path="/about"  element={<About/>} />
       

        </Routes>

    
    )
 
}