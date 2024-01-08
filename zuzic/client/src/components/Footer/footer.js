import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function footer() {

    return (


	<div  >
        <footer>
 <section class="w3l-footer">
    <div class="w3l-footer-16-main py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 column">
            <div class="row">
              <div class="col-md-4 column">
                <h3>Company</h3>
                <ul class="footer-gd-16">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="#blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-md-4 column mt-md-0 mt-4">
                <h3>Useful Links</h3>
                <ul class="footer-gd-16">
                  <li><a href="#url">Case Studies</a></li>
                  <li><a href="#url">Our Branches</a></li>
                  <li><a href="#url">Latest Media</a></li>
                  <li><a href="about.html">About Company</a></li>
                  <li><a href="#url">Our People</a></li>
                </ul>
              </div>
              <div class="col-md-4 column mt-md-0 mt-4">
                <h3>Our Services</h3>
                <ul class="footer-gd-16">
                  <li><a href="#url">Privacy Policy</a></li>
                  <li><a href="#url">Our Terms</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="#landing-single.html">Landing Page</a></li>
                  <li><a href="#url">Our People</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 column pl-lg-5 column4 mt-lg-0 mt-5">
            <h3>Newsletter </h3>
            <div class="end-column">
              <h4>Get latest updates and offers.</h4>
              <form action="#" class="subscribe" method="post">
                <input type="email" name="email" placeholder="Email Address" required="" />
                <button type="submit">Go</button>
              </form>
              <p>Sign up for our latest news & articles. We won’t give you spam mails.</p>
            </div>
          </div>
        </div>
        <div class="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
          <div class="columns text-lg-left text-center">
            <p>&copy; 2020 Masterwork. All rights reserved | Designed by <a href="https://w3layouts.com/">W3Layouts</a>
            </p>
          </div>
          <div class="columns-2 mt-lg-0 mt-3">
            <ul class="social">
              <li><a href="#facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
              </li>
              <li><a href="#linkedin"><span class="fa fa-linkedin" aria-hidden="true"></span></a>
              </li>
              <li><a href="#twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </li>
              <li><a href="#google"><span class="fa fa-google-plus" aria-hidden="true"></span></a>
              </li>
              <li><a href="#github"><span class="fa fa-github" aria-hidden="true"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   
  </section>

</footer>
    
</div>

    )
}

export default footer
