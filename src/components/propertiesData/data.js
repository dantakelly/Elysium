// import Image from "next/image"
import Link from "next/link"

// import SeasideVillaImg from "./assets/Seaside Villa Image.svg"
// import next from "next"

// export const data = [{ 
//     "id": 1, 
//     "Image": <Image src={SeasideVillaImg} alt="Seaside Villa" width={300} height={200} />, 
//     "Property_Location": "Costal Escapes - Where Waves Beckon",
//     "Property_Name": "Seaside Serenity Villa", 
//     "Property_Info": "Waves up to the soothing melody of waves. This beachfront villa offers", 
//     "Property_Price": "1,250,000",
//     "Link_To_View_Property": "",
// }]

import SeasideVillaImg from "./assets/Seaside Villa Image.svg";
import MetropolitanHavenImg from "./assets/Metropolitan Haven Image.svg";
import RusticRetratCottageIm from "./assets/Rustic Retreat Cottage Image.svg"

export const data = [{
    "id": 1,
    "ImageSrc": SeasideVillaImg,
    "Property_Location": "Coastal Escapes - Where Waves Beckon",
    "Property_Name": "Seaside Serenity Villa",
    "Property_Info": "Wake up to the soothing melody of waves. This beachfront villa offers...",
    "Property_Price": "$1,250,000",
    "Link_To_View_Property": <Link style={{color: 'white', textDecoration: 'none'}} href="/properties/property-details/property-1">View Property Details</Link>,
    "PropertyType": "Villa",
    "PropertySize": " 600-900 square feet",
    "BuildYear": "2020"
}, { 
    "id": 2,
    "ImageSrc": MetropolitanHavenImg,
    "Property_Location": "Urban Oasis - Life in the heart of the city",
    "Property_Name": "Metropolitan Haven",
    "Property_Info": "Immerse yourself in the energy of the city. This modern apartment in the heart...",
    "Property_Price": "$650,000",
    "Link_To_View_Property": "View Property Details",
    "PropertyType": "Town House",
    "PropertySize": " 300-500 square feet",
    "BuildYear": 2024
}, { 
    "id": 3,
    "ImageSrc": RusticRetratCottageIm,
    "Property_Location": "Countryside Charm - Escape the Nature's Embrace",
    "Property_Name": "Rustic Retreat Cottage",
    "Property_Info": "Find tranqulity in the countryside. This charming cottage is nestled amidst rolling hills...",
    "Property_Price": "$350,000",
    "Link_To_View_Property": "View Property Details",
    "PropertyType": "Villa",
    "PropertySize": " 200-500 square feet",
    "BuildYear": "2019"
}, { 
    "id": 3,
    "ImageSrc": RusticRetratCottageIm,
    "Property_Location": "Countryside Charm - Escape the Nature's Embrace",
    "Property_Name": "Rustic Retreat Cottage #2",
    "Property_Info": "Find tranqulity in the countryside. This charming cottage is nestled amidst rolling hills...",
    "Property_Price": "$350,000",
    "Link_To_View_Property": "View Property Details",
    "PropertyType": "Resort/Villa",
    "PropertySize": " 200-350 square feet",
    "BuildYear": "2019"
}, { 
    "id": 1,
    "ImageSrc": SeasideVillaImg,
    "Property_Location": "Coastal Escapes - Where Waves Beckon",
    "Property_Name": "Seaside Serenity Villa #2",
    "Property_Info": "Wake up to the soothing melody of waves. This beachfront villa offers...",
    "Property_Price": "$1,250,000",
    "Link_To_View_Property": "View Property Details",
    "PropertyType": "Villa",
    "PropertySize": " 600-900 square feet",
    "BuildYear": "2020"
}

];
