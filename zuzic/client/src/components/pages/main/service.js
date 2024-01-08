import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import i1 from '../../images/service-icon1.png'
import i2 from '../../images/service-icon2.png'
import i3 from '../../images/service-icon3.png'
import i4 from '../../images/service-icon4.png'
import i1 from '../../images/service-icon1.png'

function Services() {

    return (


	<div >
 <nav id="breadcrumbs" class="breadcrumbs">
  <div class="container page-wrapper">
    <a href="index.html">Home</a> » <span class="breadcrumb_last" aria-current="page">Services</span>
  </div>
</nav>

<section class="w3l-services1 py-5" id="services">
  <div class="container py-lg-3">
    <div class="header-section mb-5 text-center">
      <h2>Our Services</h2>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <h3>Our Best Services</h3>
        <h5 class="mt-lg-3 mt-2">Fusce fringilla tincidunt laoreet volutpat cras varius sit.
          metus vitae diam mauris.
        </h5>
        <p class="mt-sm-4 mt-3 mb-sm-0 mb-2"> Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt laoreet
          Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras varius lorem ac velit pharetra,
          non scelerisque mi vulputate. Phasellus bibendum.</p>
        <a href="#url" class="theme-button btn-primary btn mt-lg-5 mt-4">Learn more</a>
      </div>
      <div class="col-lg-6 mt-lg-0 mt-5">
        <div class="row">
          <div class="col-6 features-with-17-left1">
            <a href="#url" class="icon"><img src="assets/images/service-icon1.png" alt="" /></a>
            <h4><a href="#url">Concept & Strategy</a></h4>
            <p class="service-content">Lorem ipsum dolor sit amet consectetur elit. Inventore, eius!</p>
          </div>
          <div class="col-6 features-with-17-left1">
            <a href="#url" class="icon"><img src="assets/images/service-icon2.png" alt="" /></a>
            <h4><a href="#url">Interactive Business</a></h4>
            <p class="service-content">Lorem ipsum dolor sit amet consectetur elit. Inventore, eius!</p>
          </div>
          <div class="col-6 features-with-17-left1 mt-5 pt-lg-3">
            <a href="#url" class="icon"><img src="assets/images/service-icon3.png" alt="" /></a>
            <h4><a href="#url">Financial Institution</a></h4>
            <p class="service-content">Lorem ipsum dolor sit amet consectetur elit. Inventore, eius!</p>
          </div>
          <div class="col-6 features-with-17-left1 mt-5 pt-lg-3">
            <a href="#url" class="icon"><img src="assets/images/service-icon4.png" alt="" /></a>
            <h4><a href="#url">Worldwide Access</a></h4>
            <p class="service-content">Lorem ipsum dolor sit amet consectetur elit. Inventore, eius!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="w3l-services2" id="services">
  <div class="mobile-info py-5">
    <div class="container py-lg-3">
      <div class="header-section mb-5 text-center mx-auto">
        <h6 class="sub-title">The best products</h6>
        <h3>How we make your strategy business </h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
      <div class="row mobile-info-inn mx-lg-0">
        <div class="col-lg-4 mobile-right">
          <div class="row mobile-right-grids mb-lg-5 mb-4">
            <div class="col-2 mobile-right-icon">
              <div class="mobile-icon">
                <span>1</span>
              </div>
            </div>
            <div class="col-10 mobile-right-info">
              <h6><a href="#url">Full Security</a></h6>
              <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
                adipisicing elit.</p>
            </div>
          </div>
          <div class="row mobile-right-grids mb-lg-5 mb-4">
            <div class="col-2 mobile-right-icon">
              <div class="mobile-icon">
                <span>2</span>
              </div>
            </div>
            <div class="col-10 mobile-right-info">
              <h6><a href="#url">Best Performance</a></h6>
              <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
                adipisicing elit.</p>
            </div>
          </div>
          <div class="row mobile-right-grids">
            <div class="col-2 mobile-right-icon">
              <div class="mobile-icon">
                <span>3</span>
              </div>
            </div>
            <div class="col-10 mobile-right-info">
              <h6><a href="#url">Concept & Strategy</a></h6>
              <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
                adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mobile-left">
          <img src="assets/images/service-circle.jpg" class="img-curve rounded-circle service-img img-fluid" alt="" />
        </div>
        <div class="col-lg-4 mobile-right">
          <div class="row mobile-right-grids mb-lg-5 mb-4">
            <div class="col-2 mobile-right-icon">
              <div class="mobile-icon">
                <span>4</span>
              </div>
            </div>
            <div class="col-10 mobile-right-info">
              <h6><a href="#url">Worldwide Access</a></h6>
              <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
                adipisicing elit.</p>
            </div>
          </div>
          <div class="row mobile-right-grids mb-lg-5 mb-4">
            <div class="col-2 mobile-right-icon">
              <div class="mobile-icon">
                <span>5</span>
              </div>
            </div>
            <div class="col-10 mobile-right-info">
              <h6><a href="#url">Interactive Business</a></h6>
              <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
                adipisicing elit.</p>
            </div>
          </div>
          <div class="row mobile-right-grids">
            <div class="col-2 mobile-right-icon">
              <div class="mobile-icon">
                <span>6</span>
              </div>
            </div>
            <div class="col-10 mobile-right-info">
              <h6><a href="#url">Emailing</a></h6>
              <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
                adipisicing elit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<section class="w3l-services3">
  <div class="about-inner-cont py-5">
    <div class="container py-lg-5">
      <div class="header-section mb-5 text-center mx-auto">
        <h6 class="sub-title">Features services</h6>
        <h3>Some More Features </h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>

      <div class="row content-ab-grids">
        <div class="col-lg-6">
          <div class="content-ab-left">
            <div class="title-content text-left">
              <h3 class="service-title">Connect people
                and ideas</h3>
            </div>
            <p>Lorem ipsum dolor sit amet adipisicing elit. Consequuntur odio
              voluptatem tenetur
              consequatur adipisicing elit.</p>
            <ul class="feature-list my-4">
              <li><span class="fa fa-check"></span>Website Designing and Development</li>
              <li><span class="fa fa-check"></span>Android and iOs Apps Development </li>
              <li><span class="fa fa-check"></span>Successfully Providing Business Solution from 20 years</li>
              <li><span class="fa fa-check"></span>Excellence Records </li>
            </ul>
            <a href="#url" class="theme-button btn-primary btn mb-lg-5 mb-4">Know more</a>
            <img src="assets/images/b1.jpg" class="img-fluid img-curve" alt="" />
          </div>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5">
          <div class="content-ab-right">
            <img src="assets/images/b2.jpg" class="img-fluid img-curve" alt="" />
            <div class="title-content text-left mt-5">
              <h3 class="service-title">Work better
                together</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
              tenetur
              consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
              voluptatem tenetur
              consequatur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
              tenetur
              consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
              voluptatem tenetur
              consequatur adipisicing elit.</p>

              <a href="#url" class="theme-button btn-primary btn mt-4">Know more</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</div>

    )
}

export default Services
