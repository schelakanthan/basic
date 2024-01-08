import React, {useState} from 'react'
import { SiFoodpanda } from "react-icons/si";
import b1 from '../../images/main.jpg'
import b4 from '../../images/b4.jpg'
import b5 from '../../images/b5.jpg'
import b6 from '../../images/b6.jpg'
import b3 from '../../images/b3.jpg'
import b7 from '../../images/b7.jpg'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
function home() {

    return (


	<div >
 <div class="w3l-index1">
  <div class="content">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 content-left">
          <h3>We Execute Your Ideas 
            From Start to Finish 
          </h3>
          <p class="mt-3 mb-lg-5 mb-4">Building a beautiful interactive Websites and mobile app for startups and innovative companies.</p>
          <a href="about.html" class="btn btn-outline-primary theme-button">Get Started</a>
        </div>
        <div class="col-lg-6 content-photo mt-lg-0 mt-5">
          <img src={b1} class="img-fluid" alt="main image" />
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>
{/* <!-- //index-block1 -->
<!-- index-block2 --> */}
<section class="w3l-index2 py-5">
  <div class="container py-md-3">
    <div class="header-section text-center mx-auto">
      <h6 class="sub-title">Why Choose Us</h6>
      <h3>Tools for business startup to professional </h3>
      <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Nulla mollis dapibus nunc, ut rhoncus
        turpis sodales quis. Integer sit amet mattis quam.</p>
    </div>
    <div class="row bottom_grids text-center">
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="s-block">
          <a href="services.html" class="d-block">
            <img src={s1} alt="" class="img-fluid" />
            <h3 class="my-3">Interactive</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?</p>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="s-block">
          <a href="services.html" class="d-block">
            <img src={s2} alt="" class="img-fluid" />
            <h3 class="my-3">Business</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?</p>
          </a>
        </div>
      </div>
      <div class="col-lg-4 mt-5">
        <div class="s-block">
          <a href="services.html" class="d-block">
            <img src={s3} alt="" class="img-fluid" />
            <h3 class="my-3">Inspiration</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="w3l-testimonials" id="testimonials">
  <div class="testimonials py-5">
    <div class="container py-lg-3">
   
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
                                <span aria-hidden="true"><SiFoodpanda /></span>
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
                                <span  aria-hidden="true"><SiFoodpanda /></span>
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
                                <span  aria-hidden="true"><SiFoodpanda /></span>
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
                                <span  aria-hidden="true"><SiFoodpanda /></span>
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
  </div>
</section>
<section class="w3l-products py-5 mb-4" id="projects">
  <div class="container py-lg-3">
    <div class="header-section text-center mx-auto">
      <h6 class="sub-title">Featured Cases</h6>
      <h3>Completed Projects </h3>
      <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Nulla mollis dapibus nunc, ut rhoncus
        turpis sodales quis. Integer sit amet mattis quam.</p>
    </div>
    <div class="row mt-5">
      <div class="col-lg-10 mx-auto">
    
        <div id="parentHorizontalTab">
     
          <div class="resp-tabs-container hor_1">
            <div class="products-content">
              <div class="row">
                <div class="col-md-6">
                  <h3>Why a visual identity system is more memorable</h3>
                  <p>
                    Lorem ipsum dolor sit, adipisicing elit repudiandae perferendis dolores praesentium nulla quibusdam repellendus. consequatur minus
                    aliquam corrupti blanditiis, necessitatibus consectetur modi ipsum natus accusantium sit pariatur.
                  </p>
                  <a href="#url" class="btn btn-outline-primary theme-button mt-3">Know More</a>
                </div>
                <div class="col-md-6 mt-md-0 mt-5">
            <img src={b4} class="img-fluid img-curve" alt="project image" />
                </div>
              </div>
            </div>
            <div class="products-content">
              <div class="row">
                <div class="col-md-6">
                  <img src={b5} class="img-fluid img-curve" alt="project image" />
                </div>
                <div class="col-md-6 mt-md-0 mt-5">
                  <h3>Make website that looks Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit, adipisicing elit repudiandae perferendis dolores praesentium nulla quibusdam repellendus. consequatur minus
                    aliquam corrupti blanditiis, necessitatibus consectetur modi ipsum natus accusantium sit pariatur.
                  </p>
                  <a href="#url" class="btn btn-outline-primary theme-button mt-3">Know More</a>
                </div>
              </div>
            </div>
            <div class="products-content">
              <div class="row">
                <div class="col-md-6">
                  <h3>Why a visual identity system is more memorable</h3>
                  <p>
                    Lorem ipsum dolor sit, adipisicing elit repudiandae perferendis dolores praesentium nulla quibusdam repellendus. consequatur minus
                    aliquam corrupti blanditiis, necessitatibus consectetur modi ipsum natus accusantium sit pariatur.
                  </p>
                  <a href="#url" class="btn btn-outline-primary theme-button mt-3">Know More</a>
                </div>
                <div class="col-md-6 mt-md-0 mt-5">
                  <img src={b6} class="img-fluid img-curve" alt="project image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="w3l-index4">
  <div class="new-block top-bottom">
    <div class="container">
      <div class="middle-section">
        <div class="section-width">
          <h2>We are true to ourselves, and commit to always perform at our best.</h2>
        </div>
        <div class="link-list-menu">
          <p class="mt-md-4 mt-3 mb-md-5 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, doloribus atque. Corrupti exercitationem voluptatem ipsum iste consequuntur et vitae voluptas temporibus? Maxime dolores amet voluptatum illo consequatur placeat fugit ducimus.</p>
            <a href="about.html" class="btn btn-light theme-button">Read more</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="w3l-index5" id="news">
  <section id="grids5-block" class="py-5">
    <div class="container py-lg-3">
      <div class="header-section text-center mx-auto">
        <h6 class="sub-title">We are here for you</h6>
        <h3>Explore Solutions </h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
      <div class="grid-view">
        <div class="row">
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="grids5-info">
              <a href="#blog-single.html" class="d-block zoom">
                <img src={b1} alt="" class="img-fluid news-image" />

                <p class="date">26 Jan, 2020</p>
              </a>
              <div class="blog-info">
                <label class="tag-label red">Business</label>
                <h4><a href="#blog-single.html">Corporate, Business & Digital Agency</a></h4>
                <p class="blog-text">Lorem ipsum dolor sit amet nostrum ad minus libero fugiat molestiae ullam ipsam quas unde earum...</p>
                <a href="#blog-single.html" class="btn btn-news">Know More <span class="fa fa-arrow-right" aria-hidden="true"></span> </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="grids5-info">
              <a href="#blog-single.html" class="d-block zoom">
                <img src={b7} alt="" class="img-fluid news-image" />
              
                <p class="date">15 Apr, 2020</p>
              </a>
              <div class="blog-info">
                <label class="tag-label green">Design</label>
                <h4><a href="#blog-single.html">Corporate, Business & Digital Agency</a></h4>
                <p class="blog-text">Lorem ipsum dolor sit amet nostrum ad minus libero fugiat molestiae ullam ipsam quas unde earum...</p>
                <a href="#blog-single.html" class="btn btn-news">Know More <span class="fa fa-arrow-right" aria-hidden="true"></span> </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-md-3 offset-lg-0 col-md-6 mt-5">
            <div class="grids5-info">
              <a href="#blog-single.html" class="d-block zoom">
                <img src={b3} alt="" class="img-fluid news-image" />
              
                <p class="date">25 Jun, 2020</p>
              </a>
              <div class="blog-info">
                <label class="tag-label blue">Industry</label>
                <h4><a href="#blog-single.html">Corporate, Business & Digital Agency</a></h4>
                <p class="blog-text">Lorem ipsum dolor sit amet nostrum ad minus libero fugiat molestiae ullam ipsam quas unde earum...</p>
                <a href="#blog-single.html" class="btn btn-news">Know More <span class="fa fa-arrow-right" aria-hidden="true"></span> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

<section class="w3l-testimonials" id="testimonials">
  <div class="testimonials py-5">
    <div class="container py-lg-3">
      <div class="header-section text-center mx-auto">
        <h6 class="sub-title">Our Clients Testimonials</h6>
        <h3>What People Say </h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
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

export default home
