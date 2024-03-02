import React from 'react'
import footer from "../../assets/images/footer-1.png"
import footerImages from "../../assets/images/foorter-images.png"

const Footer = () => {
  return (
    <>
      <footer className=" text-light footer-bgs">
        <div className="shadow-footer">
            <img src={footerImages} alt="" />
        </div>   
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item about">
                            <img src={footer} alt="Logo" />
                            <p>
                                Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing.
                            </p>
                      
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Quick LInk</h4>
                            <ul>
                                <li>
                                    <a href="index.html"><i className="fas fa-angle-right"></i> Home</a>
                                </li>
                                <li>
                                    <a href="about-us.html"><i className="fas fa-angle-right"></i> About</a>
                                </li>
                                 <li>
                                    <a href="privacy.html"><i className="fas fa-angle-right"></i> Privacy &amp; Policy</a>
                                </li>
                                <li>
                                    <a href="what-we-do.html"><i className="fas fa-angle-right"></i>What We Do </a>
                                </li>

                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">&nbsp;</h4>
                            <ul>
                                                                <li>
                                    <a href="who-we-help.html"><i className="fas fa-angle-right"></i>Who We Help</a>
                                </li>
                                 <li>
                                    <a href="team.html"><i className="fas fa-angle-right"></i>The Team </a>
                                </li>
                                <li>
                                    <a href="career.html"><i className="fas fa-angle-right"></i>  Careers</a>
                                </li>
                                <li>
                                    <a href="contact.html"><i className="fas fa-angle-right"></i>  Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 item">
                        <div className="f-item contact-widget">
                            <h4 className="widget-title">Contact Info</h4>
                            <div className="address">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-home"></i>
                                        </div>
                                        <div className="content">
                                           <div >   Address:</div>
                                           <span className="icon-font"> St Kitts &amp; Nevis</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                           <div >  Email:</div>
                                           <span className="icon-font">   <a href="mailto:info@validtheme.com">secure@gcspro.net</a></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="content">
                                           <div > Phone:</div>
                                           <span className="icon-font" > <a href="tel:2151234567">18696631000</a></span> 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       
    </footer>
    </>
  )
}

export default Footer