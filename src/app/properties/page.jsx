"use client"

import prisma from "../../../lib/prisma"
import properties from "./propertiesStyle.css"
import searcIcon from "./assets/Serach Icon.svg"
import Image from "next/image"
import { use, useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import {data} from "@/components/propertiesData/data"
import Router from 'next/router';


import locationIcon from "./assets/Location Icon.svg"
import propertyIcon from "./assets/Property Icon.svg"
import priceIcon from "./assets/Price icon.svg"
import sizeOfPropertyIcon from "./assets/Size of property icon.svg"
import calenderIcon from "./assets/Calender Icon.svg"
import dropdownIcon from "./assets/Dropdown Icon.svg"
import lineIcon from "./assets/Line Icon.svg"
import StarsIcon from "@/components/assets/Home Page Assets/mini stars for home page.svg"

function Properties() { 

    const [searchItem, setSearchItem] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(data)

    function HandleInputChange(event) { 
        setSearchItem(event.target.value)
    }

    function filteredItems() { 
        return data.filter((data) => 
            data.Property_Name.toLowerCase().includes(searchItem.toLowerCase())
        );
    }

    useEffect(() => {
        setFilteredUsers(filteredItems());
    }, [searchItem]);


    // Click to display Location
    const [hideDropdown, setHideDropdown] = useState(false);      
        const ClickDropdownIcon = () => { 
            setHideDropdown(!hideDropdown)
        }
    // closed

    // Click to display Property Type
    const [dropdownForProperityType, setDropdownForPropertytype] = useState(false)
        const ClickDropdownForPropertyType = () => { 
            setDropdownForPropertytype(!dropdownForProperityType)
        }
    // closed

    // UseState Click for the property type
    const [dropDownForPropertyPrice, setDropDownForPropertyPrice] = useState(false)
        const ClickToTogglePropertyPrice = () => { 
            setDropDownForPropertyPrice(!dropDownForPropertyPrice)
        }
    // close

    // UseState for the propertySize
    const [dropdownForPropertySize, setDropdownForPropertySize] = useState(false)
        const togglePropertySizeDropDown = () => { 
            setDropdownForPropertySize(!dropdownForPropertySize)
        }
    // 

    // Build Year Data State
    const [dropdownForPropertyBuildDate, setDropdownForPropertyBuildDate] = useState(false)
        const ClickToToggleBuildDate = () => { 
            setDropdownForPropertyBuildDate(!dropdownForPropertyBuildDate)
        }


        // form functions
        const [firstname, setfirstname] = useState("")
        const [lastname, setlastname] = useState("")
        const [email, setemail] = useState("")
        const [phone, setphone] = useState("")
        const [location, setlocation] = useState("")
        const [propertytype, setpropertytype] = useState("")
        const [bathrooms, setbathrooms] = useState("")
        const [bedrooms, setbedrooms] = useState("")
        const [budget, setbudget] = useState("")
        const [preferredcontactone, setpreferredcontactone] = useState("")
        const [preferredcontacttwo, setpreferredcontacttwo] = useState("")
        const [message, setmessage] = useState("")

        const SubmitForm = async (event) => { 
            // event.preventDefault();
            
            try { 
                const formsent = { firstname, lastname, email, phone, location, propertytype,
                                   bathrooms, bedrooms, budget, preferredcontactone,
                                   preferredcontacttwo, message }; 

                await fetch('api/form-submission', { 
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formsent)
                })

                } catch (error) { 
                    console.log(error)
                    // alert("The code results in an error")
                }
            }

        // form functions closed
    // closed

    return(
        <div>
            <div className="Main-Container-Properties-Page">
                <div className="top-container-propertiesPage">
                    <div className="heading-top-propertiesPage">
                        <h1>Find Your Dream Property</h1>
                        <p>Welcome to Elysium, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique <br/>
                           story and a chance to reduce your life. With catogories to suit every dreamer, your journey.</p>
                    </div>
                    <div id="searchContainer-top-propertiesPage">
                        <div className="searchInputAndButton-propertiesPage">
                        <input onChange={HandleInputChange} placeholder="Search For A Property"></input>
                            <button>
                                <Image src={searcIcon}></Image>
                                {/* Find Property */} Disabled
                            </button>
                        </div>

                        <div className="top-dropdowns-propertiesPage">
                    <div className="boxes-top-PropertiesPage">
                        {/* the dropdowns individual boxes */}
                            <div className="Location-DropDown-PropertiesPage">
                                <div className="ImageAndText-PropertiesScton">
                                    <Image src={locationIcon}></Image>
                                    <Image src={lineIcon}></Image>
                                    <p>Location</p>
                                </div>
                                <div className="dropdownIcon-1-propertiesSection"> <Image onClick={ClickDropdownIcon} src={dropdownIcon}></Image></div>
                                        <ul style={hideDropdown ? {display: 'block'} : {display: 'none'}} className="dropdown-location">
                                            {data.map((propertiesDataLocation) => (
                                                <li key={propertiesDataLocation.id}>
                                                    <Image src={propertiesDataLocation.ImageSrc} width={70} height={70} alt="Property Image" />
                                                    {propertiesDataLocation.Property_Location}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                            <div className="PropertyType-DropDown-PropertiesPage">
                                <div className="ImageAndText-PropertiesScton">
                                    <Image src={propertyIcon}></Image>
                                    <Image src={lineIcon}></Image>
                                    <p>Property Type</p>
                                </div>
                                <div className="dropdownIcon-2-propertiesSection"> <Image onClick={ClickDropdownForPropertyType} src={dropdownIcon}></Image> </div>
                                  <ul style={dropdownForProperityType ? {display: 'block'} : {display: 'none'}} className="dropdown-Propertytype">
                                        {data.map((propertiesData_PropertyType) => ( 
                                            <li key={propertiesData_PropertyType.id}>
                                            <Image src={propertiesData_PropertyType.ImageSrc} width={70} height={70} alt="Property Image" />
                                            {propertiesData_PropertyType.PropertyType}
                                            </li>
                                        ))}
                                  </ul>
                            </div>

                            <div className="Pricing-DropDown-PropertiesPage">
                                <div className="ImageAndText-PropertiesScton">
                                    <Image src={priceIcon}></Image>
                                    <Image src={lineIcon}></Image>
                                    <p>Price Range</p>
                                </div>
                                <div className="dropdownIcon-3-propertiesSection"> <Image onClick={ClickToTogglePropertyPrice} src={dropdownIcon}></Image> </div>
                                        <ul style={dropDownForPropertyPrice ? {display: 'block'} : {display: 'none'}} className="propertyPrice-dropdown">
                                            {data.map((PriceOfPropertyData) => ( 
                                                <li key={PriceOfPropertyData.id}>
                                                    <Image src={PriceOfPropertyData.ImageSrc} width={70} height={70} alt="Property Image" />
                                                    {PriceOfPropertyData.Property_Price}
                                                </li>
                                            ))}
                                        </ul>
                            </div>

                            <div className="SizeOfProperty-DropDown-PropertiesPage">
                                <div className="ImageAndText-PropertiesScton">
                                    <Image src={sizeOfPropertyIcon}></Image>
                                    <Image src={lineIcon}></Image>
                                    <p>Property Size</p>
                                </div>
                                <div className="dropdownIcon-4-propertiesSection"> <Image onClick={togglePropertySizeDropDown} src={dropdownIcon}></Image></div>
                                    <ul style={dropdownForPropertySize ? {display: 'block'} : {display: 'none'}} className="propertySize-dropdown">
                                        {data.map((propertySizeData) => (
                                            <li key={propertySizeData.id}>
                                                <Image src={propertySizeData.ImageSrc} width={70} height={70} alt="Property Image" />
                                                {propertySizeData.PropertySize}
                                            </li>
                                        ))}
                                    </ul>
                            </div>

                            <div className="BuildYear-DropDown-PropertiesPage">
                                <div className="ImageAndText-PropertiesScton">
                                    <Image src={calenderIcon}></Image>
                                    <Image src={lineIcon}></Image>
                                    <p>Build Year</p>
                                </div>
                                <div className="dropdownIcon-5-propertiesSection"> <Image onClick={ClickToToggleBuildDate} src={dropdownIcon}></Image> </div>
                                        <ul style={dropdownForPropertyBuildDate ? {display: 'block'} : {display: 'none'}} className="dropdownForBulildDate">
                                            {data.map((propertiesBuildYearData) => ( 
                                                <li key={propertiesBuildYearData.BuildYear}>
                                                    <Image src={propertiesBuildYearData.ImageSrc} width={70} height={70} alt="Property Image" />
                                                    {propertiesBuildYearData.BuildYear}
                                                </li>
                                            ))}
                                        </ul>
                                 </div>
                        </div>
                    </div>
                     {/* the dropdowns individual boxes CLOSED */}
                </div>
            </div>
               {/* Second Container Below */}
               <div className="second-container-propertiesPage">
                <div className="h1AndP-forSecondCont-propertiesSection">
                    <div className="ImageAndH1-only-propPage">
                    <Image src={StarsIcon}></Image>
                    <h1>Discover a World of Possibilites</h1>
                    </div>
                    <p>Our Portfilio of properties is a diverse as your dreams. Explore the following Catogeries to find the perfect property that resonates with your <br/> 
                       vision of home.</p>
                </div>
                <div className="actualProperties-propertiesPage">
                        {filteredUsers.map((propertiesData) => ( 
                            <div key={propertiesData.id} className="theProperties-propsPage">
                                <Image src={propertiesData.ImageSrc} />
                                <h4>{propertiesData.Property_Location}</h4>
                                <div className="h2AndP-theproperty-propsPage">
                                    <h2>{propertiesData.Property_Name}</h2>
                                    <p>{propertiesData.Property_Info} <span>Read More</span></p>
                                </div>
                                <div className="propertyPrice-propsPage-AndButton">
                                    <div className="priceOfProperty">
                                        <p>Price</p>
                                        <h3>{propertiesData.Property_Price}</h3>
                                    </div>
                                    <div className="LinkButtonToViewPropertyDetails-propsPage">
                                        <button>{propertiesData.Link_To_View_Property}</button>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            {/* Second Container Closed */}

            {/* Third container open */}
            <div className="Third-Container-PropertiesPage">
                <div className="Icon-H1-andP-ThirdCont-propertiesPage">
                   <div>
                        <Image  src={StarsIcon} alt="star icon"/>
                        <h1>Let's Make it Happen</h1>
                   </div>
                    <p>Ready to take the first step towards your dream property? Fill out the form below, and our real estate wizards will work their magic to find your <br/> 
                       perfect match. Don't wait; let's embark on this exciting journey together.</p>
                </div>
                <div className="form-input-propertiesPage">
                    <form method="POST" onSubmit={SubmitForm}>
                    <div id="the-first-two-rows-propsPage-form">

                        <div className="first-form-propsPage">
                        <label >First Name</label>
                        <input type="text" placeholder="Enter First Name"
                               value={firstname}
                               onChange={(e) => setfirstname(e.target.value)} >
                            </input>
                        </div>

                        <div className="second-form-propsPage">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter Last Name" 
                            value={lastname} 
                            onChange={(e) => setlastname(e.target.value)} >
                            </input>
                            </div>

                        <div className="third-form-propsPage">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email"  
                        value={email} 
                        onChange={(e) => setemail(e.target.value)} >       
                        </input>
                            </div>

                        <div className="fourth-form-propsPage">
                        <label>Phone</label>
                        <input type="number" placeholder="Enter Phone Number"  
                        value={phone} 
                        onChange={(e) => setphone(e.target.value)} >
                        </input>
                            </div>

                        <div className="fifth-form-propsPage">
                        <label>Preferred Location</label>
                        <input type="search" placeholder="Select Location"
                        value={location} 
                        onChange={(e) => setlocation(e.target.value)} >
                        </input>
                            </div>

                        <div className="sixth-form-propsPage">
                        <label>Property Type</label>
                        <input type="search" placeholder="Select Property Type"
                        value={propertytype} 
                        onChange={(e) => setpropertytype(e.target.value)} >
                        </input>
                            </div>

                        <div className="seventh-form-propsPage">
                        <label>No. of Bathrooms</label>
                        <input type="number" placeholder="Select no. of Bathrooms"
                        value={bathrooms} 
                        onChange={(e) => setbathrooms(e.target.value)} >
                        </input>
                            </div>

                        <div className="eight-form-propsPage">
                        <label>No. of Bedrooms</label>
                        <input type="number" placeholder="Select no. of Bedrooms"
                        value={bedrooms} 
                        onChange={(e) => setbedrooms(e.target.value)} >
                        </input>
                            </div>
                        </div>
                             {/*  */}

                        <div id="third-row-propsPage-form">

                            <div className="ninth-form-propsPage">
                            <label>Budget</label>
                            <input type="number" placeholder="Select Budget"
                            value={budget} 
                            onChange={(e) => setbudget(e.target.value)} >
                            </input>
                                </div>

                            <div className="tenth-form-propsPage">
                                    <label>Preferred Contact Method</label>
                                    <input type="number" placeholder="Enter Your Number"
                                    value={preferredcontactone} 
                                    onChange={(e) => setpreferredcontactone(e.target.value)} >
                                    </input>
                                </div>

                                <div className="eleventh-form-propsPage">
                                    <label>Preferred Contact #2</label>
                                    <input type="email" placeholder="Enter Your Email"
                                    value={preferredcontacttwo} 
                                    onChange={(e) => setpreferredcontacttwo(e.target.value)} >
                                    </input>
                                </div>
                        </div>
                            {/*  */}

                        <div id="last-row-propsPage-form">

                            <div className="twelve-form-propsPage">
                            <label>Message</label>
                            <input type="text" placeholder="Enter your Message here..."
                             value={message}  
                             onChange={(e) => setmessage(e.target.value)}>
                            </input>
                                </div>
                        </div>
                            {/*  */}

                        <div id="Checkbox-andButton-form-propsPage">
                            <div className="checkbox-form-propsPage">
                                <div className="terms_and-conditions">
                                    <input type="checkbox"
                                         >
                                    </input>
                                    <p>I agree with <Link href="/">
                                    <span>Terms of Use and Privacy Policy</span>
                                    </Link></p>
                                    </div>
                                <button type="submit" onClick={SubmitForm}>Send Your Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Third container closed */}
        </div>
    </div>
    )
}
export default Properties