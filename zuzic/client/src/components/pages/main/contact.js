import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import b9 from '../../images/b9.jpg'
import logo1 from '../../images/logo1.jpg'
import logo2 from '../../images/logo2.jpg'
import logo3 from '../../images/logo3.jpg'
import logo4 from '../../images/logo4.jpg'
import b5 from '../../images/b5.jpg'
import team1 from '../../images/team1.jpg'
import team2 from '../../images/team2.jpg'
import team3 from '../../images/team3.jpg'
import team4 from '../../images/team4.jpg'
import team5 from '../../images/team5.jpg'
import team6 from '../../images/team6.jpg'
import team7 from '../../images/team7.jpg'
import team8 from '../../images/team8.jpg'
function Contact() {

    return (


	<div >
 <nav id="breadcrumbs" class="breadcrumbs">
  <div class="container page-wrapper">
    <a href="index.html">Home</a> » <span class="breadcrumb_last" aria-current="page">Contact</span>
  </div>
</nav>

<section class="w3l-contact" id="contact">
  <div class="container py-5">
    <div class="contacts12-main py-md-3">
      <div class="header-section mb-5 text-center">
        <h2>Contact Us</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 text-center">
          <img src="assets/images/contact.jpg" class="img-curve img-fluid" alt="" />
        </div>
        <div class="col-lg-6 position-relative">
          <div class="contact-form">
            <div class="header-section mb-4 text-left">
              <h3>Drop us a Message</h3>
              <p class="mt-2 mb-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>
            <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="">
              <div class="main-input">
                <input type="text" name="w3lName" placeholder="Enter your name" class="contact-input" required="" />
                <input type="email" name="w3lSender" placeholder="Enter your mail" class="contact-input" required="" />
                <input type="email" name="w3lSubject" placeholder="Subject" class="contact-input" />
                <textarea class="contact-textarea contact-input" name="w3lMessage" placeholder="Enter your message" required=""></textarea>
              </div>
              <div class="text-right">
                <button class="btn-primary btn theme-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="contant11-top-bg py-5">
    <div class="container py-lg-3">
      <div class="header-section text-center mb-5 mx-auto">
        <h6 class="sub-title">Get in touch</h6>
        <h3>We’re here to help</h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
      <div class="d-grid contact section-gap">
        <div class="contact-info-left d-grid">
          <div class="contact-info">
            <div class="icon">
              <span class="fa fa-location-arrow" aria-hidden="true"></span>
            </div>
            <div class="contact-details">
              <h4>Our head office address:</h4>
              <p>8th-block road, cross avenue, Lorem dolor sit, New York, USA</p>
            </div>
          </div>
          <div class="contact-info">
            <div class="icon">
              <span class="fa fa-phone" aria-hidden="true"></span>
            </div>
            <div class="contact-details">
              <h4>Call for help:</h4>
              <p><a href="tel:+040-123-456-88">+040-123-456-88</a></p>
              <p><a href="tel:+040-123-456-89">+040-123-456-89</a></p>
            </div>
          </div>
          <div class="contact-info">
            <div class="icon">
              <span class="fa fa-envelope-open-o" aria-hidden="true"></span>
            </div>
            <div class="contact-details">
              <h4>Mail Us for information:</h4>
              <p><a href="mailto:info@masterwork.com" class="email">info@masterwork.com</a></p>
              <p><a href="mailto:masterwork@support.com" class="email">masterwork@support.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
      frameborder="0" allowfullscreen=""></iframe>
  </div>
</section>
</div>

    )
}

export default Contact
