import footer from "./footer.css"
import Image from "next/image"

import SendIconFooter from "./assets/Send Icon Footer.svg"
import FacebookIcon from "./assets/facebook icon.svg"
import LinkidinIcon from "./assets/linkedin icon.svg"
import TwitterIcon from "./assets/twitter icon.svg"
import YoutubeIcon from "./assets/youtube icon.svg"

function Footer() { 

    return( 
        <>
            <div className="Footer-Container">
            <div className="line-1footer"></div>    
                <div className="footer-block-one">           
                    <h1>Start Your Real Estate Journey Today</h1>
                    <div className="pAndButton-footer">
                    <p>Your dream property is just a click away. Weather yo'ur looking for a new home, a strategic investment, or expert real estate advice <br/>
                       Elysium is here to assit you every step of the way. Take the first step towards your real estate goals and explore available properties <br/>
                       or get in touch with our team for personilized assistance.</p> 
                       <button>Explore Properties</button>
                    </div>
                </div>
            

                <div className="line-2footer"></div>
                <div className="theFooter">
                    <div className="footerLogo-And-FooterInput">
                        <h2>Elysium</h2>
                        <form className="input-container-footer">
                            <input type="text" placeholder="Enter Your Email" />
                            <Image src={SendIconFooter} alt="Send Icon" />
                        </form>
                    </div>
                    <div className="the-foot-links">
                        <div className="home-footer-links">
                            <div><p>Home</p></div>
                            <ul>
                                <li>Hero Section</li>
                                <li>Features</li>
                                <li>Properties</li>
                                <li>Testimonials</li>
                                <li>FAQ's</li>
                            </ul>
                        </div>

                        <div className="home-footer-links">
                            <div><p>About Us</p></div>
                            <ul>
                                <li>Our Story</li>
                                <li>Our Works</li>
                                <li>How It Works</li>
                                <li>Our Team</li>
                                <li>Our Clients</li>
                            </ul>
                        </div>

                        <div className="home-footer-links">
                            <div><p>Properties</p></div>
                            <ul>
                                <li>Portfilio</li>
                                <li>Categories</li>
                            </ul>
                        </div>

                        <div className="home-footer-links">
                            <div><p>Services</p></div>
                            <ul>
                                <li>Valuation Mastery</li>
                                <li>Strategic Marketing</li>
                                <li>Negotiation Wizardly</li>
                                <li>Closing Success</li>
                                <li>Property Management</li>
                            </ul>
                        </div>

                        <div id="home-footer-links-contactUs" className="home-footer-links">
                            <div><p>Contact Us</p></div>
                            <ul>
                                <li>Contact Form</li>
                                <li>Our Offices</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright-footer-container">
                    <div className="copyright-footer">
                        <p>@2024 Elysuim. All Right Reserved</p>
                        <p>Terms & Condition</p>
                    </div>
                    <div className="contactIcons-Footer">
                        <div className="facebook-Icon-Footer"> <Image src={FacebookIcon}/> </div>
                        <div className="Linkedin-Icon-Footer"> <Image src={LinkidinIcon}/> </div>
                        <div className="Twitter-Icon-Footer"> <Image src={TwitterIcon}/> </div>
                        <div className="Youtube-Icon-Footer"> <Image src={YoutubeIcon}/> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer