// This is the home (/) index page
"use client"
import Head from "next/head";

import { useState } from "react";
import home from "../components/home.css"
import Link from "next/link"
import Image from 'next/image';
import Properties from "@/components/PropertyBoxes/Properties";
import TestimonialBoxes from "../components/Testimonials/testimonialBoxes"
import FaqBoxes from "@/components/Faq Boxes/FaqBoxes";
// import Properties from "@/components/PropertyBoxes/Properties";

import { CursorifyProvider } from '@cursorify/react'

// Assets/Image
import TopRightImageHome from "../components/assets/Home Page Assets/TopRightImage HomePage.png"
import ImageIcon1Home1 from "../components/assets/Home Page Assets/Icon Container 1.svg"
import ImageIcon1Home2 from "../components/assets/Home Page Assets/Icon Container 2.svg"
import ImageIcon1Home3 from "../components/assets/Home Page Assets/Icon Container 3.svg"
import ImageIcon1Home4 from "../components/assets/Home Page Assets/Icon Container 4.svg"
import starsIcon from "../components/assets/Home Page Assets/mini stars for home page.svg"
import ImageOne from "../components/assets/Home Page Assets/Image one Property.svg"
import ImageTwo from "../components/assets/Home Page Assets/Image two property.svg"
import ImageThree from "../components/assets/Home Page Assets/Image three Property.svg"
import ProfilePhotoOne from "../components/assets/Home Page Assets/Profile Photo Of Client One.svg"
import ProfilePhotoTwo from "../components/assets/Home Page Assets/Profile Photo Of Client Two.svg"
import ProfilePhotoThree from "../components/assets/Home Page Assets/Profile Photo Of Client Three.svg"

import swipeBack from "../components/assets/Home Page Assets/swipe back.svg"
import swipeFoward from "../components/assets/Home Page Assets/swipe foward.svg"
// 

function Home() { 

  // state for properties to scroll
  const [countToScroll, setCountToScroll] = useState(1)

  const clickToCountScroll_increment = () => {
    if (countToScroll < 60) {
      setCountToScroll(countToScroll + 1);
    } 
  }

  const clickToCountScroll_decrement = () => {
    if(countToScroll > 1) { 
      setCountToScroll(countToScroll - 1);
    }
  }
  // state for properties to scroll in closed

  return( 
    // <CursorifyProvider>
    <div id="home-parent">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <div className="TopLeftContainer-Home">
            <div className="miniContainer-TopLeft-Home">
              <div className="topLeft-texts-home">
            <h2>
                Discover Your Dream <br/>
                Property With Elysium
              </h2>
              <p>
                Your jounery to finding the perfect property begins here. Explore our listings to find the <br/>
                home that matches your dreams
              </p>
              </div>
              <div className="topLeft-Home-Buttons">
                  <button className="topLeft-Home-Button-1"> Learn More </button>
                  <button className="topLeft-Home-Button-2"> Browse Properties </button>
              </div>
                <div className="topLeft-Home-Boxes">
                   <div className="topLeftBoxes-Home-1">
                      <p>200+ <br/>
                      Happy Customers
                      </p>
                   </div>
                   <div className="topLeftBoxes-Home-2">
                   <p>10k+<br/>
                      Properties For Clients
                      </p>
                   </div>
                   <div className="topLeftBoxes-Home-3">
                   <p>16+<br/>
                      Years of Experience
                      </p>
                   </div>
                </div>
            </div>
            
            <div className="miniContainer-TopRight-Home">
               <Image src={TopRightImageHome} alt="Top Right Image Home" />
              </div>

         {/* Top Bottom/Middle  */}
          <div className="BoxesBelow-AtTop-Home">
              <div className="topMiddle-Home-Box1">
                <Image src={ImageIcon1Home1} />
                <p>Find Your Dream Home</p>
              </div>
              <div className="topMiddle-Home-Box2">
                <Image src={ImageIcon1Home2} />
                <p>Unlock Property Value</p>
              </div>
              <div className="topMiddle-Home-Box3">
              <Image src={ImageIcon1Home3} />
                <p>Effortless Property Management</p>
              </div>
              <div className="topMiddle-Home-Box4">
              <Image src={ImageIcon1Home4} />
                <p>Smart Invetments, Informed Decisions</p>
              </div>
          </div>
         {/* Closed */}
      </div>

      {/* Properties Section */}
      <div className="properties-home-container">
      <div className="properties-head-text">
        <div className="starsIconAndH1">
          <Image src={starsIcon} alt="Top Right Image Home" />
          <h1>Featured Properties</h1>
        </div>
        <div className="topTextsFor-Properties">
        <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into excemptional homes and investments  <br/>
           available through Elysium. Click "View Details for more infromation."
        </p>
        <Link href="/"><button> View All Properties </button></Link>
        </div>
      </div>
    <div className="Properties-Home-Container">  {/* this class is being called in the properties.css... Do not do that*/}
    <Properties
        imageProperty={ImageOne}
        titleProperty="Metropolitan Haven"
        paragraphProperty="A stunning 4-bedroom, 3-bathroom villa in a
               peaceful suburban neighborhood"
        bedroomsNumber="2"
        bathroomsNumber="4"
        propertyType="Villa"
        propertyPrice="600,000"
       />

       <Properties
        imageProperty={ImageTwo}
        titleProperty="Seaside Serenity Villa"
        paragraphProperty="A chic and fully-furnished 2-bedroom apartment
                           with panoramic city views"
        bedroomsNumber="2"
        bathroomsNumber="4"
        propertyType="Villa"
        propertyPrice="550,000"
       />

       <Properties
        imageProperty={ImageThree}
        titleProperty="Rustic Retreat Cottage"
        paragraphProperty="An elegant 3-bedroom, 2.5-bathroom townhouse 
                           in a gated community"
        bedroomsNumber="2"
        bathroomsNumber="4"
        propertyType="Villa"
        propertyPrice="800,000"
       />


<Properties
        // imageProperty={ImageThree}
        titleProperty="Tropics Topics"
        paragraphProperty="An elegant 3-bedroom, 2.5-bathroom townhouse 
                           in a gated community"
        bedroomsNumber="2"
        bathroomsNumber="4"
        propertyType="Villa"
        propertyPrice="800,000"
       />

<Properties
        // imageProperty={ImageThree}
        titleProperty="Luxry Properties"
        paragraphProperty="An elegant 3-bedroom, 2.5-bathroom townhouse 
                           in a gated community"
        bedroomsNumber="2"
        bathroomsNumber="4"
        propertyType="Villa"
        propertyPrice="800,000"
       />

<Properties
        // imageProperty={ImageThree}
        titleProperty="Greenwood Haven"
        paragraphProperty="An elegant 3-bedroom, 2.5-bathroom townhouse 
                           in a gated community"
        bedroomsNumber="2"
        bathroomsNumber="4"
        propertyType="Villa"
        propertyPrice="800,000"
       />
     </div>
      </div>
            {/* the click to swipe section*/}
      <div className="swipingContainer">
        <div className="numberLineUnderProperties-Home"></div>
        <div className="swipeThroughProperties-Home">
          {/* <p>01 of 60</p> */}  <p>{countToScroll} of 60</p>
          <div className="actualSwipingorClicking-Home">
            <div onClick={clickToCountScroll_decrement} className="swipeBack-Home">
              <Image src={swipeBack}/>
            </div>
            <div onClick={clickToCountScroll_increment} className="swipeFoward-Home">
            <Image src={swipeFoward}/>
            </div>
          </div>
        </div>
      </div>
          {/* the click to swipe section closed*/}
      {/* Properties section closed */}

      <div className="client-section-home">
      <div className="starIconAnd-Title-clientSection-Home">
        <Image src={starsIcon}/>
        <div className="clientHeading-PAnd-ButtonSection-Home">
          <div>
            <h1>What Our Clients Say</h1>
          </div>
            <div className="pAndButton-client-Home">
              <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Elysium their real estate needs.</p>
              <button>View All testimonials</button>
            </div>
        </div>
      </div>
         <div className="testimonilsSection">
            <TestimonialBoxes
              testimonialHeading="Exceptional Service"
              testimonialText="Our experience with Elysium was outstanding.
                               Their team's dedication and professionalism 
                               made finding our dream home a breeze. Highly
                               recommended!"
              profilePhotoOfClient={ProfilePhotoOne}
              PersonWhoWroteTestimonial="Wade Warren"
              CountryOfTestimonialWriter="USA, California"
            />

            <TestimonialBoxes 
              testimonialHeading="Trusted Advisors"
              testimonialText="The Elysuim team guided is through the entire
                               buying process. Their knoweldge and 
                               commitment o our needs were impressive.
                               Thank you for your support!"
              profilePhotoOfClient={ProfilePhotoThree}
              PersonWhoWroteTestimonial="John Mans"
              CountryOfTestimonialWriter="USA, Nevade"
            />

            <TestimonialBoxes
              testimonialHeading="Efficient and Reliable"
              testimonialText="Elysium provided us with top-notch service.
                               They helped us sell our property quickly and
                               at a great price. We couldn't be happier with the
                               results."
              profilePhotoOfClient={ProfilePhotoTwo}
              PersonWhoWroteTestimonial="Emelie Thomson"
              CountryOfTestimonialWriter="USA, Florida"
            />
          </div>
      </div>
            {/* the click to swipe section*/}
            <div className="swipingContainer">
        <div className="numberLineUnderProperties-Home"></div>
        <div className="swipeThroughProperties-Home">
          <p>01 of 10</p>
          <div className="actualSwipingorClicking-Home">
            <div className="swipeBack-Home">
              <Image src={swipeBack}/>
            </div>
            <div className="swipeFoward-Home">
            <Image src={swipeFoward}/>
            </div>
          </div>
        </div>
      </div>
          {/* the click to swipe section closed*/}

        <div className="faq-container-home">
          <div className="frequently-asked-questions-Home">
            <div className="faq-starIcon-And-Heading">
                <Image src={starsIcon}/> 
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq-p-And-button">
              <p>Find answers to common questions about Elysium's services, property listings, and the real estate process. We,re here to provide clarity and  <br />
                 assist you in every step of the way</p>
              </div>
            </div>
           
           <div className="fax-boxes-home">
              <FaqBoxes
                faqH2="How do I search for properties on
                       Elysuim"
                faqP="Learn how to use our user-friendly search tools
                      to find properties that match your criteria."
              />

              <FaqBoxes
                faqH2="What document do I need to sell my 
                       property through Elysuim?"
                faqP="Find out about the necessary documentation 
                      for listing your property with us."
              />

              <FaqBoxes
                faqH2="How can I contact an Elysuim agent?"
                faqP="Discover the different ways you can get in touch
                      with our experienced agents"
              />
           </div> 
          </div>
           {/* the click to swipe section*/}
          <div className="swipingContainer">
            <div className="numberLineUnderProperties-Home"></div>
            <div className="swipeThroughProperties-Home">
              <p>01 of 10</p>
              <div className="actualSwipingorClicking-Home">
                <div className="swipeBack-Home">
                  <Image src={swipeBack}/>
                </div>
                <div className="swipeFoward-Home">
                <Image src={swipeFoward}/>
                </div>
              </div>
            </div>
          </div>
          {/* the click to swipe section closed*/}
    </div>
    // </CursorifyProvider>
  )
}
export default Home