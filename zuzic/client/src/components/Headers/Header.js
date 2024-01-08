import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { SiFoodpanda } from "react-icons/si";
function header() {

    return (


	<header id="site-header" class="fixed-top" >

    <div class="container">
        <nav class="navbar navbar-expand-lg stroke">
            <a class="navbar-brand" href="index.html">
                <span ><SiFoodpanda /></span> zuzic
            </a>
            {/* <!-- if logo is image enable this   
      <a class="navbar-brand" href="#index.html">
          <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
      </a> --> */}
            <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                <span class="navbar-toggler-icon fa icon-close fa-times"></span>
               
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item @@about-active">
                     <Link to="/about" class="nav-link">
                     About</Link>
                    </li>
                    <li class="nav-item @@services-active">
                    <Link to="/services" class="nav-link">Services</Link>
                    </li>
                    <li class="nav-item @@contact-active">
                    <Link to="/contact" class="nav-link">Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>

</header>

    )
}

export default header
