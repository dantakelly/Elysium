import PropertyDetails from "@/components/Property Details/propertyDetails"

import img1PD from "./assets/img1-pd.svg"
import img2PD from "./assets/img2-pd.svg"
// import img3PD from "./assets/img3-pd.svg"
// import img4PD from "./assets/img4-pd.svg"
// import img5PD from "./assets/img5-pd.svg"
// import img6PD from "./assets/img6-pd.svg"
// import img7PD from "./assets/img7-pd.svg"
// import img8PD from "./assets/img8-pd.svg"
// import img9PD from "./assets/img9-pd.svg"

const Property1 = () => {

    return(
        <>
           <PropertyDetails
                propertyNameDetail = "Seaside Serenity Villa"
                propertyLocationDetail = "Malibu, California"
                priceOfPropertyDetail = "1,250,000"

                imageActiveSecondTop1 = {img1PD}
                imageActiveSecondTop2 = {img2PD}
                imageActiveSecondTop3 = {img2PD}
                imageActiveSecondTop4 = {img1PD}
                imageActiveSecondTop5 = {img1PD}
                imageActiveSecondTop6 = {img2PD}
                imageActiveSecondTop7 = {img2PD}
                imageActiveSecondTop8 = {img1PD}
                imageActiveSecondTop9 = {img2PD}
                // 
                SECOND_imageActiveSecondTop1 = {img1PD}
                SECOND_imageActiveSecondTop2 = {img2PD}

                text_third_container_left = "Discover your own piece of paradise with the Seaside Serenity Villa. With an 
                                             open floor plan, breathtaking ocean views from every room, and direct access
                                             to a pristine sandy beach, this property is the epitome of coastal living."
                
                numberOF_bathrooms_pd_ = "04"
                numberOF_bedrooms_pd_ = "03"
                numberOF_areasqft_pd_ = "2500"

                thirdContainer_P_dp1 = "Expansive oceanfront terrace for outdoor entertainment"
                thirdContainer_P_dp2 = "Gourmet kitchen with top-of-the-line appliances"
                thirdContainer_P_dp3 = "Private beach access for morning strolls and sunset views"
                thirdContainer_P_dp4 = "Master suite with a spa-inspired bathroom and ocean-facing
                                        balcony"
                thirdContainer_P_dp5 = "Private garage and ample storge space"

                left_heading_fourthCont_left_pd = "Inquire About Seaside Serenity Villa"
                                                  
               
           /> 
        </>
    )
}
export default Property1