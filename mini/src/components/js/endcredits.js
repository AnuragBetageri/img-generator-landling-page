import "../css/endcredits.css"

import logo from "../image/logo.png"

function endcredits()
{
    return(
    <div className="maindiv">
        <div className="A">
            <div className="A1">
                <img className="logopng" src={logo} alt=""></img>
            </div>  
            <div className="A2">          
                <p className="rights">@ 2023 Around AI | All rights reserved</p>
            </div>
        </div>

        <div className="B">
           <div className="B1"> 
                <h2>Information</h2>
            </div>
                <div className="B2">
                    <h4 ><a className="ainfo" href="">FAQ</a></h4>
                    <h4 ><a className="ainfo" href="">Terms Of Use</a></h4>
                    <h4 ><a className="ainfo" href="">Privacy Policy</a></h4>
                    <h4 ><a className="ainfo" href="">Content Policy</a></h4>
            </div>
        </div>

        <div className="C">
            <div className="C1">
                <h2 >Contact Us</h2>
            </div>
            <div className="C2">
                <h4><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
                </span>
                    <a className="ainfo" href="abhibanur14@gmail.com">support@AroundAI</a></h4>
            </div>
        </div>
    </div>
    )
}

export default endcredits;