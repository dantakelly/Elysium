"use client"

import Link from "next/link"
import Image from 'next/image';
import AboutUs from "./AboutUs.css"

import StarsIcon from '@/components/assets/Home Page Assets/mini stars for home page.svg';
import HomeTopRight from "./assets/topRight House Aboutus.svg"
import SecondRightImage1 from "./assets/Icon1 SecondRight About.svg"
import SecondRightImage2 from "./assets/Icon2 SecondRight About.svg"
import SecondRightImage3 from "./assets/Icon3 SecondRight About.svg"
import SecondRightImage4 from "./assets/Icon4 SecondRight About.svg"
import Instagram from "./assets/instagram-svgrepo-com.svg"
import domainIcon from "./assets/Domanin Container Sixth About Section.svg"
import catogeryIcon from "./assets/Catogery Container Sixth About Section.svg"

import MaxMitchel from "./assets/Max Mitchell Image.svg"
import SarahJohnson from "./assets/Sarah Johnson Image.svg"
import DavidBrown from "./assets/David Brown Image.svg"
import MichaelTurner from "./assets/Michael Turner Image.svg"

export default function aboutus() {
    return (
        <div>
            <div className="AboutUs-Container-main">
                <div className="top-aboutus-container">
                    <div className="topLeft-aboutus-container">
                    <div className="topLeft-ImageH1P">
                    <Image src={StarsIcon} alt=""></Image>
                    <h1>Our Journey</h1>
                     <p>Our story is one of continous growth and evaulation. We started as a small team with <br/>
                       big dreams, determined to create a real estate platform that transcend the <br/>
                       ordinary. Over the years, we've expanded our reach, forged valuable parthnerships <br/> 
                       and gained the trust of countless clients.</p>
                       </div>

                       <div className="topLeft-Boxes-About">
                        <div className="topLeftAboutUs-Boxes1">
                             <h1>200+</h1> 
                             <p>Happy Customers</p>
                        </div>
                        <div className="topLeftAboutUs-Boxes2">
                            <h1>10k</h1> 
                            <p>Properties For Clients</p>
                        </div>
                        <div className="topLeftAboutUs-Boxes3">
                            <h1>16+</h1> 
                            <p>Years of Experience</p>
                        </div>
                      </div>
                    </div>
                    {/* Top-left about us closed */}
                    <div className="topRight-aboutus-container">
                        <Image src={HomeTopRight} alt=""></Image>
                    </div>
                </div>
                {/* top-aboutus-container closed */}

                <div className="Second-Container-Main-Aboutus">
                    <div className="second-Left-cont-About">
                        <Image src={StarsIcon} alt=""></Image>
                        <h1>Our Values</h1>
                        <p>Our story is one of the continous growth and evaulation. We <br/>
                           started as a small team with big dreams, determined to <br/> 
                           create a real estate platform that transcend the <br/> 
                           ordinary.</p>
                    </div>
                    <div className="second-Right-cont-About">

                        <div className="box1-right-cont-About">
                            <div className="IconAndH3-1-About">
                                <Image src={SecondRightImage1} alt=""></Image>
                                <h3>Trust</h3>
                            </div>
                            <div className="IconAndP-1-About">
                                    <p>Trust is the cornerstone of every successful <br/> 
                                       real estate transaction.</p>
                                </div>
                        </div>

                        <div className="box2-right-cont-About">
                            <div className="IconAndH3-1-About">
                                <Image src={SecondRightImage2} alt=""></Image>
                                <h3>Excellence</h3>                           
                            </div>
                            <div className="IconAndP-2-About">
                                    <p>We set the bar high for ourselves. From the <br/>
                                       properties we list to the services we provide.</p>
                                </div>
                        </div>

                        <div className="box3-right-cont-About">
                            <div className="IconAndH3-3-About">
                                <Image src={SecondRightImage3} alt=""></Image>
                                <h3>Client-Centric</h3>                      
                            </div>
                            <div className="IconAndP-1-About">
                                    <p>Your dreams and needs are at the center of <br/> 
                                       our universe. We listen, understand.</p>
                                </div>
                        </div>

                        <div className="box4-right-cont-About">
                            <div className="IconAndH3-4-About">
                                <Image src={SecondRightImage4} alt=""></Image>
                                <h3>Our Commitment</h3>
                            </div>
                            <div className="IconAndP-1-About">
                                    <p>We are dedicated to providing you wuth the <br/> 
                                       highest level of service, professionalism.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Third-Container-Main-Aboutus">
                        <div className="third-cont-top-About">
                            <Image src={StarsIcon} alt=""></Image>
                            <h2>Our Achievements</h2>
                            <p>Our story is one of continous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that <br/> 
                               transcend the ordinary.</p>
                        </div>
                            <div className="boxes-third-cont-About">

                                <div className="box1-third-cont-About">
                                    <h2>3+ Years of Excellence</h2>
                                    <p>With over 3 years in the industry, we've <br/> 
                                       amassed a welath of knoweldge and experience.</p>
                                </div>

                                <div className="box2-third-cont-About">
                                    <h2>Happy Clients</h2>
                                    <p>Our greatest achievements is the satisfaction <br/> 
                                       of our clients. Their success stories fuel our <br/>
                                       passion for what we do.</p>
                                </div>

                                <div className="box3-third-cont-About">
                                    <h2>Industry Recognition</h2>
                                    <p>We've earned the respect of our peers and <br/> 
                                       industry leaders, with accolades and awards <br/> 
                                       that reflects our commitment to excellence.</p>
                                </div>
                            </div>
                        </div>
                        {/* Fourth-Container-Main-Aboutus */}
                        <div className="Fourth-Container-Main-Aboutus">
                            <div className="star-h1-p-fourthCont">
                                <Image src={StarsIcon} alt=""></Image>
                                <h1>Navigating the Elysium Experience</h1>
                                <p>At Elysium, we've designed a straightfoward process to help you find and purchase your dream property with ease. Here's a step-by-step guide <br/> 
                                   to how it all works.</p>
                            </div>

                            <div className="boxes-fourth-cont-About">

                               <div className="box1-fourth-cont-About">
                                <div className="line-fourth-cont-about"></div>
                                    <div className="steps-fourth-cont-about">Step 1</div>
                                    <div className="secondaryBox-P-FourthCont-About">
                                        <h3>Discover a World of Possibilities</h3>
                                        <p>Your journey begins with the exploring our carefully <br/> 
                                           curated property listings, Use our intutive <br/> 
                                           search tools to filter properties based on your <br/> 
                                           preferences, including location.</p>
                                        </div>
                                    </div>

                                    <div className="box2-fourth-cont-About">
                                <div className="line-fourth-cont-about"></div>
                                    <div className="steps-fourth-cont-about">Step 2</div>
                                    <div className="secondaryBox-P-FourthCont-About">
                                        <h3>Narrowing Down Your Choices</h3>
                                        <p>Once you've found properties that catch your eye, <br/>
                                           save them to your account or make a shortlist. This <br/> 
                                           allows you to compare and revist your favourist as <br/> 
                                           you make your desciion.</p>
                                        </div>
                                    </div>

                                    <div className="box3-fourth-cont-About">
                                <div className="line-fourth-cont-about"></div>
                                    <div className="steps-fourth-cont-about">Step 3</div>
                                    <div className="secondaryBox-P-FourthCont-About">
                                        <h3>Personalized Guidance</h3>
                                        <p>Have questions about a property or need more <br/> 
                                           information? Our dedicated team of real estate <br/>
                                           experts is just a call or message away.</p>
                                        </div>
                                    </div>

                                    <div className="box4-fourth-cont-About">
                                <div className="line-fourth-cont-about"></div>
                                    <div className="steps-fourth-cont-about">Step 4</div>
                                    <div className="secondaryBox-P-FourthCont-About">
                                        <h3>See It for Yourself</h3>
                                        <p>Arrange viewings of the properties you're intrested <br/> 
                                           in. We'll coordinate with the property owners and <br/> 
                                           accompany you to ensure you get a firsthand look <br/>
                                           at your potential new home.</p>
                                        </div>
                                    </div>

                                    <div className="box5-fourth-cont-About">
                                <div className="line-fourth-cont-about"></div>
                                    <div className="steps-fourth-cont-about">Step 5</div>
                                    <div className="secondaryBox-P-FourthCont-About">
                                        <h3>Making informed Decisions</h3>
                                        <p>Before making an offer, our team will assist you <br/> 
                                           with due allignce, including property inspections <br/> 
                                           legal checks, and market analysis. We want you to <br/> 
                                           be fully informed and confident in your choice.</p>
                                        </div>
                                    </div>

                                    <div className="box6-fourth-cont-About">
                                <div className="line-fourth-cont-about"></div>
                                    <div className="steps-fourth-cont-about">Step 6</div>
                                    <div className="secondaryBox-P-FourthCont-About">
                                        <h3>Getting the Best Deal</h3>
                                        <p>We'll help your negotiate the best terms and prepare <br/> 
                                           your offer. Our goals is to secure the property at the <br/> 
                                           right price and on favourable terms.</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            {/* fifth-Container-Main */}
                            <div className="Fifth-Container-Main-Aboutus">
                                <div className="Icon-H1-P-Fifth-cont">
                                    <Image alt="" src={StarsIcon}></Image>
                                    <h1>Meet the Elysium Team</h1>
                                    <p>At Elysium our success is driven by the didication and expertise of our team. Get to know the people behind our mission to make your real estate <br/> 
                                       dreams a reality.</p>
                                </div>
                                <div className="teamPeople-boxes-fifth-cont">
                                    
                                        <div className="teamPeople-box1-fifth-cont">
                                            <Image src={MaxMitchel}  alt=""></Image>
                                            <div className="socialIconForBox-fifth-cont"> <Link href="/">  <Image src={Instagram}></Image> </Link> </div>
                                            <div className="namesAndposition-fifth-cont">
                                                <h3>Max Mitchell</h3>
                                                <p>Founder</p>
                                            </div>
                                        </div>

                                        <div className="teamPeople-box1-fifth-cont">
                                            <Image src={SarahJohnson}  alt=""></Image>
                                            <div className="socialIconForBox-fifth-cont"> <Link href="/">  <Image src={Instagram}></Image> </Link> </div>
                                            <div className="namesAndposition-fifth-cont">
                                                <h3>Sarah Johnson</h3>
                                                <p>Chief Real Estate Officer</p>
                                            </div>
                                        </div>

                                        <div className="teamPeople-box1-fifth-cont">
                                            <Image  alt="" src={DavidBrown}></Image>
                                            <div className="socialIconForBox-fifth-cont"> <Link href="/">  <Image src={Instagram}></Image> </Link> </div>
                                            <div className="namesAndposition-fifth-cont">
                                                <h3>David Brown</h3>
                                                <p>Head of Property Management</p>
                                            </div>
                                        </div>

                                        <div className="teamPeople-box1-fifth-cont">
                                            <Image  alt="" src={MichaelTurner}></Image>
                                            <div className="socialIconForBox-fifth-cont"> <Link href="/">  <Image src={Instagram}></Image> </Link> </div>
                                            <div className="namesAndposition-fifth-cont">
                                                <h3>Michael Turner</h3>
                                                <p>Legal Counsel</p>
                                            </div>
                                        </div>
                                    </div>
                                 </div>

                                 {/* Sixth Container */}
                                 <div className="Sixth-Container-Main-Aboutus">
                                    <div className="Icon-H1-andP-sixth-cont-about">
                                        <Image  alt="" src={StarsIcon}></Image>
                                        <h1>Our Valued Clients</h1>
                                        <p>At Elysium, we had the privileage of working with a diverse range of cliens across various industries. Here ase some of the clients we've had <br/> 
                                           the pleasure of searving.</p>
                                             </div>
                                           <div className="boxes-cont-sixth-about">

                                                <div className="box1-sixth-container-about">
                                                    <div className="divMini-1-sixth-about">
                                                        <div><p>Since 2024</p></div>
                                                        <div className="ABC-corporate-andButton-sixth-about">
                                                        <h2>ABC Corporation</h2>
                                                        <Link href="/"><button>Visit Website</button></Link>
                                                        </div>
                                                    </div>
                                                    <div className="divMini-2-sixth-about">
                                                        <div className="domainSection-box-sixth-about">
                                                            <Image  alt="" src={domainIcon}></Image>
                                                            <h4>Commercial Real Estate</h4>
                                                        </div>
                                                        <div className="catogerySection-box-sixth-about">
                                                                <div className="line-div-catogery-sixth-about"></div>
                                                            <Image  alt="" src={catogeryIcon}></Image>
                                                            <h4>Luxry Home Development</h4>
                                                        </div>
                                                        </div>
                                                        <div className="secondaryboxIn-sixth-about">
                                                            <p>What they said 🤗</p>
                                                            <p>Elysium's expertise in finding the perfect office space for our <br/> 
                                                               expanding operations was invaluable. They truly understand our <br/> 
                                                               business needs.</p>
                                                        </div>
                                                    </div>

                                                    <div className="box2-sixth-container-about">
                                                    <div className="divMini-1-sixth-about">
                                                        <div><p>Since 2023</p></div>
                                                        <div className="ABC-corporate-andButton-sixth-about">
                                                        <h2>GreenTech Enterprises</h2>
                                                        <Link href="/"><button>Visit Website</button></Link>
                                                        </div>
                                                    </div>
                                                    <div className="divMini-2-sixth-about">
                                                        <div className="domainSection-box-sixth-about">
                                                            <Image  alt="" src={domainIcon}></Image>
                                                            <h4>Commercial Real Estate</h4>
                                                        </div>
                                                        <div className="catogerySection-box-sixth-about">
                                                                <div className="line-div-catogery-sixth-about"></div>
                                                            <Image  alt="" src={catogeryIcon}></Image>
                                                            <h4>Retail Space</h4>
                                                        </div>
                                                        </div>
                                                        <div className="secondaryboxIn-sixth-about">
                                                            <p>What they said 🤗</p>
                                                            <p>Elysium ability to identify prime retail locations helped us expand <br/> 
                                                               our brand presence. They are a trusted partner in our growth.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    );
  }