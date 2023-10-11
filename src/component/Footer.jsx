import React from "react";
import fb from '../images/facebook 1.png'
import inst from '../images/instagram 1.png'
import './footer.css';


function Footer(){
    return(
            
            <>
            
            <div className="foot">
                <div className="foot-inner">
                    <h3>C.A.S Consulting Ltd</h3>
                    <div className="im">

                        <img className="q" src={fb} alt="" />
                        <img className="q" src={inst} alt="" />
                    </div>
                    <p className="link">info@electricaldesignscy.com</p>
                    <div className="add-m"> 
                        <p className="add"> 6E Thoukididou Street,
                            1060 Nicosia, Cyprus
                        </p>
                        <p className="ph">+357 22 374171 
                        +357 99 456081</p>

                    </div>


                    <div className="rightf"> 
                        <p>2021 C.A.S Consulting Ltd  </p>
                        <p>  All Rights Reserved.</p>

                            <p>  Site by Mojo Digital
                        </p>

                    </div>
                </div>

            </div>
            
            
            </>
    )
}


export default Footer;