import React from "react"
import Logo from "../images/logo.png";
import ham from '../images/burger menu.png';
import About from './About'

import {Link} from 'react-router-dom'

function NavBar(){

return (
    <div className="navbar">
        <img src={Logo} alt="" />

        <div className="right">
            {/* <a href="/">Home</a>
            <a href="About">About</a>
            <a href="sector">Sector</a>
            <a href="Products">Products</a>
            <a href="contact">Contact</a> */}

            <Link to="/" >Home</Link>
            <Link to="/products" >Product</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >contact</Link>
            <Link to="/login" >login</Link>
            
             

        </div>
        <div className="mob-menu">
            <img src={ham} alt="" />
        </div>
        

    </div>
)



}


export default NavBar;