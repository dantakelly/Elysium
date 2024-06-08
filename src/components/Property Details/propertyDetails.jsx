"use client"

import propertydetails from "./property-details.css"
import Image from "next/image"
import { useState } from "react"

import locationIconPropertiesDetails from "./assets/location mini icon.svg"
import ArrowLeft from "./assets/Arrow Left.svg"
import ArrowRight from "./assets/Arrow Right.svg"
import zIndex from "@mui/material/styles/zIndex"
import Bedrooms from "./assets/Bedrooms - propertiesDetails.svg"
import Bathrooms from "./assets/Bathrooms - propertiesDetails.svg"
import AreaSqft from "./assets/Area - propertiesDetails.svg"
import StrikeIcon from "./assets/stike icon.svg"
// import StarsIcon from "@/components/assets/Home Page Assets/StarsIcon.svg"

function PropertyDetails(props) { 

        const [currentLine, setCurrentLine] = useState(0)
       

        function handleButtonSlideRight() { 
            const linesBlueElements = Array.from(document.querySelectorAll('.lines-blue-pd1, .lines-blue-pd2, .lines-blue-pd3, .lines-blue-pd4, .lines-blue-pd5, .lines-blue-pd6'));
            // 
            linesBlueElements.forEach((styleToMakeBlueLines, index) => {
                styleToMakeBlueLines.style.backgroundColor = index <= currentLine ? '#703BF7' : '';
            });
            // 
            setCurrentLine((prevLine) => (prevLine + 1) % linesBlueElements.length);

            // Make the images opacity change --rightSlide--
            const opacityOnImg = Array.from(document.querySelectorAll('.ImageActive1, ImageActive2, .ImageActive3, ImageActive4, .ImageActive5, .ImageActive6, ImageActive7, ImageActive8, .ImageActive9'));
            // make the images opacity change closed --rightSlide--
        }

        // 
        function handleButtonSlideLeft() {
            const linesBlueElements = Array.from(document.querySelectorAll('.lines-blue-pd1, .lines-blue-pd2, .lines-blue-pd3, .lines-blue-pd4, .lines-blue-pd5, .lines-blue-pd6'));
            // 
            linesBlueElements.forEach((styleToMakeBlueLines, index) => {
                styleToMakeBlueLines.style.backgroundColor = index <= currentLine ? '#703BF7' : '';
            });
            // 
            setCurrentLine((prevLine) => (prevLine - 1) % linesBlueElements.length);
        }



        // Expanding Acive Images
        const [expandimg1, setExpandImg1] = useState(false)
        const [expandimg2, setExpandImg2] = useState(false)
        const [expandimg3, setExpandImg3] = useState(false)
        const [expandimg4, setExpandImg4] = useState(false)
        const [expandimg5, setExpandImg5] = useState(false)
        const [expandimg6, setExpandImg6] = useState(false)
        const [expandimg7, setExpandImg7] = useState(false)
        const [expandimg8, setExpandImg8] = useState(false)
        const [expandimg9, setExpandImg9] = useState(false)
        const EXPAND = { 
            width: '50%',  
            height: '50%',
            zIndex: '9999',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            // padding: '10px',
            boxShadow: '0 0px 30px #703BF7',
            animation: 'fade-in 0.5s',
            // backgroundColor: '#703BF7'
        }
        // 
           
    return(
        <>
           <div id="property-details-main-container">
           {/* Top Container */}
           <div className="top-property-details">
                <div className="property-name-and-location">
                    <h2>{props.propertyNameDetail}</h2>
                    <div className="coverOver-location-propsDetails">
                    <div className="the-loction-icon-and-location-props-details">
                        <Image src={locationIconPropertiesDetails} alt="location Icon"/>
                        <p>{props.propertyLocationDetail}</p>
                    </div>
                    <div className="the-price-top-propsDetail">
                        <p>Price</p>
                        <p>${props.priceOfPropertyDetail}</p>
                        </div>
                    </div>
                </div>
               
                </div>
            {/* Top Container Closed */}
            {/* Second Container Property Details */}
            <div className="second-container-property-details">
                <div className="top-image-active-propDetails">
                    <Image onClick={() => setExpandImg1(!expandimg1)} style={expandimg1 ? EXPAND : {}} className="ImageActive1" src={props.imageActiveSecondTop1} alt="Images"/> 
                    <Image onClick={() => setExpandImg2(!expandimg2)} style={expandimg2 ? EXPAND : {}} className="ImageActive2" src={props.imageActiveSecondTop2} alt="Images"/> 
                    <Image onClick={() => setExpandImg3(!expandimg3)} style={expandimg3 ? EXPAND : {}} className="ImageActive3" src={props.imageActiveSecondTop3} alt="Images"/> 
                    <Image onClick={() => setExpandImg4(!expandimg4)} style={expandimg4 ? EXPAND : {}} className="ImageActive4" src={props.imageActiveSecondTop4} alt="Images"/> 
                    <Image onClick={() => setExpandImg5(!expandimg5)} style={expandimg5 ? EXPAND : {}} className="ImageActive5" src={props.imageActiveSecondTop5} alt="Images"/> 
                    <Image onClick={() => setExpandImg6(!expandimg6)} style={expandimg6 ? EXPAND : {}} className="ImageActive6" src={props.imageActiveSecondTop6} alt="Images"/> 
                    <Image onClick={() => setExpandImg7(!expandimg7)} style={expandimg7 ? EXPAND : {}} className="ImageActive7" src={props.imageActiveSecondTop7} alt="Images"/> 
                    <Image onClick={() => setExpandImg8(!expandimg8)} style={expandimg8 ? EXPAND : {}} className="ImageActive8" src={props.imageActiveSecondTop8} alt="Images"/> 
                    <Image onClick={() => setExpandImg9(!expandimg9)} style={expandimg9 ? EXPAND : {}} className="ImageActive9" src={props.imageActiveSecondTop9} alt="Images"/> 
                </div>
                <div className="SECOND-top-image-active-propDetails">
                    <Image className="img1" src={props.SECOND_imageActiveSecondTop1} alt="Images"/> 
                    <Image className="img2" src={props.SECOND_imageActiveSecondTop2} alt="Images"/> 
                </div>

                <div className="slidingButtons-PD">
                   <div onClick={handleButtonSlideLeft} className="left_arrow_pd"> <Image src={ArrowLeft}/> </div>
                        <div className="blueTinyLines-pd-cont">
                            <div className="lines-blue-pd1"></div>
                            <div className="lines-blue-pd2"></div>
                            <div className="lines-blue-pd3"></div>
                            <div className="lines-blue-pd4"></div>
                            <div className="lines-blue-pd5"></div>
                            <div className="lines-blue-pd6"></div>
                        </div>
                    <div onClick={handleButtonSlideRight} className="right_arrow_pd"> <Image src={ArrowRight}/> </div>
                </div>
            </div>
            {/* Second Container Property Details Closed */}

            {/* Third Container -- Property Details */}
            <div className="third-container-property-details">
                <div className="leftSide-third-container-property-details">
                    <div className="third_pd_left_h3Andp">
                        <div className="toppart-left-text-third-pd">
                            <h3>Description</h3>
                            <p>{props.text_third_container_left}</p>
                        </div>
                        <div className="bottompart-left-text-third-pd">
                                <hr/>
                            <div className="roomsNumberAndSize-pd">
                                <div className="bathroomNum-pd-">
                                    <Image src={Bedrooms} alt="bedrooms"/> 
                                    <h3>{props.numberOF_bathrooms_pd_}</h3>
                                </div>
                                <div className="bedrooNum-pd-">
                                    <Image src={Bedrooms} alt="bedrooms"/> 
                                    <h3>{props.numberOF_bedrooms_pd_}</h3>
                                </div>
                                <div className="areaNum-pd-">
                                    <Image src={Bedrooms} alt="bedrooms"/> 
                                    <h3>{props.numberOF_areasqft_pd_} Square Feet</h3>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="RightSide-third-container-property-details">
                        <div className="rightSection-thirdCont-pd">
                            <h2>Key Features and Amenities</h2>
                        </div>
                        <div className="thirdDivs-Right-contPD">

                            <div className="third-textscontpd-1">
                                <div className="blueLine-thirdcont-pd"></div>
                                <Image src={StrikeIcon} alt="strke-icon"/>
                                <p>{props.thirdContainer_P_dp1}</p>
                            </div>

                            <div className="third-textscontpd-2">
                                <div className="blueLine-thirdcont-pd"></div>
                                <Image src={StrikeIcon} alt="strke-icon"/>
                                <p>{props.thirdContainer_P_dp2}</p>
                            </div>

                            <div className="third-textscontpd-3">
                                <div className="blueLine-thirdcont-pd"></div>
                                <Image src={StrikeIcon} alt="strke-icon"/>
                                <p>{props.thirdContainer_P_dp3}</p>
                            </div>

                            <div className="third-textscontpd-4">
                                <div className="blueLine-thirdcont-pd"></div>
                                <Image src={StrikeIcon} alt="strke-icon"/>
                                <p>{props.thirdContainer_P_dp4}</p>
                            </div>

                            <div className="third-textscontpd-5">
                                <div className="blueLine-thirdcont-pd"></div>
                                <Image src={StrikeIcon} alt="strke-icon"/>
                                <p>{props.thirdContainer_P_dp5}</p>
                            </div>

                        </div>
                    </div>
                </div>
            {/* Third Contaner -- Property Details closed */}

            {/* Fourth Container -- Property Details*/}
            <div className="fourth-cont-propertiesDetails">
                <div className="propertiesDetails-leftSide-forth-pd">
                    <h1>{props.left_heading_fourthCont_left_pd}</h1>
                    <p>
                      Intrested in this property? Fill out ht e form below, and our <br/>
                      real estate experts will get back to you with more details, <br/>
                      including scheduling a viewing and asnwering any <br/>
                      questions you may have.
                    </p>
                    </div>

                    <form id="form_id_right_fourthCont_pd">
                        
                        <div className="fourContPDInputRight-1">
                            <div className="theLabelAndInputPD">
                                <label>First Name</label>
                                <input placeholder="Enter Your First Name"></input>
                            </div>
                            <div className="theLabelAndInputPD">
                                <label>Last Name</label>
                                <input placeholder="Enter Your Last Name"></input>
                            </div>
                        </div>

                        <div className="fourContPDInputRight-2">
                            <div className="theLabelAndInputPD">
                                <label>Email</label>
                                <input placeholder="Enter Your Email"></input>
                            </div>
                            <div className="theLabelAndInputPD">
                                <label>Phone</label>
                                <input placeholder="Enter Your Phone"></input>
                            </div>
                        </div>

                        <div className="fourContPDInputRight-3">
                            <div className="theLabelAndInputPD">
                                <label>Selected Property</label>
                                <input placeholder="Click to choose your selected property"></input>
                            </div>
                        </div>

                        <div className="fourContPDInputRight-4">
                            <div className="theLabelAndInputPD">
                                <label>Message</label>
                                <input placeholder="Enter your Message here...."></input>
                            </div>
                        </div>
                        
                        <button>Send Your Message</button>
                    </form>
            </div>
            {/* Fourth Container -- Property Details closed*/}

            {/* Fifth Container -- Property Details */}
            
            {/* Fifth Container -- Property Details Closed */}
           </div>
        </>
    )
}


export default PropertyDetails