import faqboxes from "./faqboxes.css"

function FaqBoxes(props) { 

    return( 
        <>
            <div className="faq-container-box">
               <h2> {props.faqH2} </h2>
                <p> {props.faqP} </p>
                
                <div className="ReadMore-faqButton">
                    <button>Read More</button>
                </div>
            </div>
        </>
    )
}
export default FaqBoxes