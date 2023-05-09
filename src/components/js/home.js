import "../css/home.css"
import logo from  "../image/logo.png"

function home()


{
    return(
        <div className="home_body">
                <div className="HomeNavBar">
                    <img src={logo} className="home_logo"></img>

                    <button><a href="https://aroundai.vercel.app/"> Create</a></button>
                </div>
<div className="home_heading">
                <h1>
                    AROUND AI
                </h1>
                <h2>
                    An Ai based Image genration tool 
                </h2>

</div>
        <a href="#Keyfeatures_sec">
            <div className=" home_btn">
                Explore Us
            </div>
        </a>


            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
        </div>
    )
}
export default home;