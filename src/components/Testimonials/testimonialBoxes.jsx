import testimonialboxes from "./testimonialboxes.css"
import Link from "next/link"
import Image from 'next/image';

import StarsImageTestimonials from "./assets/star images testimonials.svg"

function TestimonialBoxes(props) { 
    
    return( 
        <>
            <div className="testimonials-Container">
                 <div className="testimonials">
                    <Image src={StarsImageTestimonials}/>
                    <div className="testimonals-text">
                        <h2> {props.testimonialHeading} </h2>
                        <p> {props.testimonialText} </p>
                        </div>
                        <div className="profileOfTestimonial">
                            <Image className="picOfTestimonial"  src={props.profilePhotoOfClient} alt="client-images" width={0} height={0} />
                            <div className="textOfTestimonial">
                                <p> {props.PersonWhoWroteTestimonial} </p>
                                <p> {props.CountryOfTestimonialWriter} </p>
                            </div>
                        </div>
                 </div>
            </div>
        </>
    )
}
export default TestimonialBoxes