import properties from "./properties.css"
import Link from "next/link"
import Image from 'next/image';

import BedRoom from "../assets/Home Page Assets/bedroom icon.svg"
import BathRoom from "../assets/Home Page Assets/bathroom icon.svg"
import PropertyType from "../assets/Home Page Assets/propertyType icon.svg"

function Properties(props) { 

    return(
        <div className="propertiesHome">
          <div className="propertyImg-Home">
          <Image className="Image1-ForProperty" src={props.imageProperty} width={0} height={0} />
          </div>
          <div className="properties-home-text">
            <h1>{props.titleProperty}</h1>
            <p>{props.paragraphProperty} <span>...Read More</span> </p>
          </div>
          <div className="roomsAndMoreForProperty-Home">
              <div className="bedroom-svg-home">
                <Image src={BedRoom} />
                <p>{props.bedroomsNumber}-Bedroom</p>
              </div>
              <div className="bathroom-svg-home">
                <Image src={BathRoom} />
                <p>{props.bathroomsNumber}-Bathroom</p>
              </div>
              <div className="propertyType-svg-home">
                <Image src={PropertyType} />
                <p>{props.propertyType}</p>
              </div>
          </div>
          <div className="priceForProperty-andDetails">
            <div className="priceForPropertyActual">
            <p>Price</p>
            <p className="moneySignAndMoneyInput-Properties">$ {props.propertyPrice}</p>
            </div>
          <div className="propertyDetailsActual">
            <Link href="/"> <button>View Property Details</button> </Link>
          </div>
          </div>
    </div>
    )
}
export default Properties