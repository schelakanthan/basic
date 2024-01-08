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
function about() {

    return (


	<div >
 <nav id="breadcrumbs" class="breadcrumbs">
  <div class="container page-wrapper">
    <a href="index.html">Home</a> » <span class="breadcrumb_last" aria-current="page">About</span>
  </div>
</nav>

<section class="w3l-about1" id="about">
  <div id="content-with-photo4-block" class="pt-5">
    <div class="container py-md-3">
      <div class="header-section mb-5 text-center">
        <h2>About Us</h2>
      </div>
      <div class="cwp4-two row">

        <div class="cwp4-text col-lg-6">
          <h3>The Best Choice For Your Successful Business!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud.
          </p>

          <ul class="cont-4">
            <li><span class="fa fa-check"></span>Website Designing and Development</li>
            <li><span class="fa fa-check"></span>Android and iOs Apps Development </li>
            <li><span class="fa fa-check"></span>Successfully Providing Business Solution from 20 years</li>
            <li><span class="fa fa-check"></span>Excellence Records </li>
          </ul>
        </div>
        <div class="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
          <img src={b5} class="img-curve img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<section class="w3l-about2">
  <div class="features py-5">
    <div class="container py-lg-3">

      <div class="fea-gd-vv row ">
        <div class="float-lt feature-gd col-lg-4 col-sm-6">

          <div class="icon-info">
            <h5>Our History 1795</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </p>
          </div>

        </div>
        <div class="float-mid feature-gd col-lg-4 col-sm-6 mt-sm-0 mt-4">

          <div class="icon-info">
            <h5>The power of business</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </p>
          </div>
        </div>
        <div class="float-rt feature-gd col-lg-4 col-sm-6 mt-lg-0 mt-sm-5 mt-4">

          <div class="icon-info">
            <h5>120 Customer service</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<div class="w3l-services py-5">
    <div class="container principles-grids principles-grids1 py-lg-3">
      <div class="header-section mb-5 text-center mx-auto">
        <h6 class="sub-title">Features</h6>
        <h3>The Largest Business Expert ! </h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
        <div class="scrollbar -services-scroll">
            <div class="row abt-btm pt-4">
                <div class="col-lg-3 col-sm-6 bottom-gds">
                    <div class="elite-services1">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-usd service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Best Financial Advice</h4>
                            <div class="description">
                                <p>Enean eget dolor dolor sit amet commodo ligula</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-sm-0 mt-5">
                    <div class="elite-services2">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-user-circle-o service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Authorised Finance Brand</h4>
                            <div class="description">
                                <p>Commodo ligula eget dolor dolor sit amet ligula</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-lg-0 mt-5">
                    <div class="elite-services3">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-hand-peace-o service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Compehensive Advices</h4>
                            <div class="description">
                                <p>Enean eget dolor dolor sit amet commodo ligula</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-lg-0 mt-5">
                    <div class="elite-services4">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-laptop service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Monitoring & Review</h4>
                            <div class="description">
                                <p>Commodo ligula eget dolor dolor sit amet ligula</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="w3l-about4" id="about">
  <div class="new-block py-5">
    <div class="container py-lg-5">
      <div class="middle-section text-center">
        <div class="header-section text-center mx-auto">
          <h6 class="sub-title">Creative Solutions</h6>
          <h3>Watch Our
            Two Minute Intro</h3>
          <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus
            turpis sodales quis. Integer sit amet mattis quam.</p>
        </div>
        <div class="history-info mt-5">
          <div class="position-relative">
            <img src={b9} class="img-fluid img-curve video-popup-image" alt="video-popup" />
            {/* <!-- <a href="#popup-video" class="play-view text-center position-absolute">
						<span class="video-play-icon">
							<span class="fa fa-play"></span>
						</span>
					</a> --> */}

            <a href="#small-dialog" class="popup-with-zoom-anim play-view text-center position-absolute">
              <span class="video-play-icon">
                <span class="fa fa-play"></span>
              </span>
            </a>

       
            <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
              <iframe src="https://www.youtube.com/embed/a5KYlHNKQB8" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="mt-5 request-quote">
          
          <button type="button" class="btn btn-primary theme-button" data-toggle="modal" data-target="#exampleModalCenter">
            Request a quote
          </button>

          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header px-4">
                  <h5 class="modal-title request-demo-title" id="exampleModalCenterTitle">Get Free Quote</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body demo-request p-4">
                  <form action="/" method="GET">
                    <div class="form-group">
                      {/* <!-- <label for="NameInput">Name:</label> --> */}
                      <input type="text" class="form-control" name="name" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                      {/* <!-- <label for="exampleInputEmail1">Email address:</label> --> */}
                      <input type="email" class="form-control" name="emailid" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                      {/* <!-- <label for="CompanyInput">Company:</label> --> */}
                      <input type="text" class="form-control" name="company" placeholder="Company" required/>
                    </div>
                    <div class="form-group">
                      {/* <!-- <label for="CompanyInput">Designation:</label> --> */}
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                    </div>
                    <div class="text-right">
                      <button type="submit" class="btn btn-primary theme-button" data-toggle="modal" data-target="#exampleModal">Submit Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</section>



<section class="w3l-team">
  <div class="team py-5">
    <div class="container py-lg-5">
      <div class="header-section text-center mx-auto">
        <h6 class="sub-title">Our Team Members</h6>
        <h3>Our Creative Team</h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
      <div class="row team-row pt-3 mt-5">
        <div class="col-lg-3 col-sm-6 team-wrap">
          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team1} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Gwen Johnson</a></h3>
              <p>Founder & CEO</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
        

        <div class="col-lg-3 col-sm-6 team-wrap mt-sm-0 pt-sm-0 mt-4 pt-2">

          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team2} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Daniel Roberto</a></h3>
              <p>Regional Manager</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
   
        <div class="col-lg-3 col-sm-6 team-wrap mt-lg-0 pt-lg-0 mt-4 pt-2">
          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team3} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Dhony Abraham</a></h3>
              <p>Managing Partner</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>

        </div>
       

        <div class="col-lg-3 col-sm-6 team-wrap mt-lg-0 pt-lg-0 mt-4 pt-2">

          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team4} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Marko Dugonji</a></h3>
              <p>Cheif Executive</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
       
        <div class="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">
          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team5} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Anthony</a></h3>
              <p>Engineering Officer</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
     

        <div class="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">

          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team6} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Emma Stone</a></h3>
              <p>Team Leader</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
    

        <div class="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">
          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team7} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Rhoda Byrd</a></h3>
              <p>Technology Officer</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>

        </div>
   

        <div class="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">

          <div class="team-info">
            <div class="column position-relative img-circle">
              <a href="#url"><img src={team8} alt="" class="img-fluid team-image" /></a>
            </div>
            <div class="column-btm">
              <h3 class="name-pos"><a href="#url">Max Stoiber</a></h3>
              <p>Manager</p>
              <div class="social">
                <a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                <a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
</section>

<section class="w3l-index6 py-5">
  <div class="container py-md-3 text-center">
    <div class="header-section text-center mx-auto">
      <h3>Ready to build your own brand community? </h3>
      <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Nulla mollis dapibus nunc, ut rhoncus
        turpis sodales quis. Integer sit amet mattis quam.</p>
    </div>
    <div class="buttons mt-5">
      <a href="contact.html" class="btn btn-outline-primary mr-2 theme-button">Book a Demo</a>
      <a href="contact.html" class="btn btn-primary theme-button ml-2">Get Started</a>
    </div>
  </div>
</section>
</div>

    )
}

export default about
