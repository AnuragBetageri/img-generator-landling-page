import "../css/getstarted.css";
import trynow from "../image/trynow.jpg";

function getstarted() {
  return (
    <center>
      <div className="getstarted_start">
        <h3 className="getstarted_today">GET STARTED TODAY</h3>
        <img src={trynow} className="getstarted_img1 " alt=""></img>
        <div className="getstarted_content">
          <h1 className="getstarted_text1">See how far it can take you</h1>
          <h2 className="getstarted_text2">
            Try one week on us and see how much you improve
          </h2>
        </div>
        <a href="">
          <div className="getstarted_btn">
            GET STARTED <div><svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" id="mainIconPathAttribute" fill="#ffffff" stroke="#000000" stroke-width="0.1"></path> </svg></div>
          </div>
        </a>
      </div>
    </center>
  );
}

export default getstarted;
