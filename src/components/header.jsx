"use client"
import header from "./header.css"
import global from "./global.css"
import Link from "next/link"
import Image from 'next/image';
import Popup from 'reactjs-popup';
import { useState } from "react";
// import 'reactjs-popup/dist/index.css';
import Checkbox from '@mui/material/Checkbox'; 

import GoogleLogo from "../components/assets/Header Assets/google-color-svgrepo-com.svg"
import CancelIcon from "../components/assets/Header Assets/cancel-svgrepo-com.svg"

import HamburgerMenu from "./nav burger.svg"
import ClosedNav from "./close burger nav.svg"
import styled from "styled-components";

function Header() {    

    const [toggleBurger, setToggleBurger] = useState(false)
        const toggleNav = () => { 
            setToggleBurger(!toggleBurger)
        }


        const sideBarStyle = { 
            display: 'inline',
        }
        const sideBarToggle = () => {
            setToggleBurger(!toggleBurger)
          };
       


    return(
        <div>
        <header className="Header-Container">
            <h1>Elysium</h1>
            <ul>
                <li><Link className="headLinkHome" href="/">Home</Link></li>
                <li><Link className="headLinkAbout" href="/aboutus">About Us</Link></li>
                <li><Link className="headLinkProperties" href="/properties">Properties</Link></li>
                <li><Link className="headLinkServices" href="/">Services</Link></li>
                {/* <li><Link className="headLinkContactUs" href="/">Contact Us</Link></li> */}
            </ul>
            {/* <Link href="/authentication/register"> <button> Signup | Login</button> </Link> */}
            <Link href="/"> <button>Contact Us</button> </Link>

            <div onClick={toggleNav} className="toggle-Burger">
            <Image src={toggleBurger ? ClosedNav : HamburgerMenu} style={toggleBurger ? { width: "30px", height: "30px" } : {}} />
        </div>
        </header>

            <div onClick={sideBarToggle} className="side-bar-head-container" style={toggleBurger ? sideBarStyle : {}}>
               <div className="side-bar-head">
                <div className="side-bar-items-head">
                <ul>
                    <li><Link className="headLinkHome" href="/">Home</Link></li>
                    <li><Link className="headLinkAbout" href="/aboutus">About Us</Link></li>
                    <li><Link className="headLinkProperties" href="/properties">Properties</Link></li>
                    <li><Link className="headLinkServices" href="/">Services</Link></li>
                    {/* <li><Link className="headLinkContactUs" href="/">Contact Us</Link></li> */}
                </ul>
                   {/* <Link href="/authentication/register"> <button> Signup | Login</button> </Link> */}
                   <Link href="/"> <button>Contact Us</button> </Link>
                </div>
               </div>
            </div>
    </div>
    )
}
export default Header