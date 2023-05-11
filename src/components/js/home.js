import "../css/home.css";
import logo from "../image/logo.png";

function home() {
  return (
    <div class="grid-bg ba-grid anim">
      <div class="inner">
        <div className="home_body">
          <div className="HomeNavBar">
            <img src={logo} className="home_logo"></img>

           
              <a href="https://aroundai.vercel.app/"> <button> Create</button></a>
            
          </div>
          <div className="home_heading">
            <svg className="title" viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                Around AI
              </text>
            </svg>
            <h2>An AI Based Text To Image Generator</h2>
          </div>
          <a href="#Keyfeatures_sec">
            <div className=" home_btn">Explore Us</div>
          </a>

          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default home;
