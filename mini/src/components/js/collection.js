import "../css/collection.css";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import img7 from "../image/7.png";
import img8 from "../image/8.png";
import img9 from "../image/9.png";
import img10 from "../image/10.png";
// import img11 from "../image/11.png"
// import img12 from "../image/12.png"

function collection() {
  return (
    <section className="collection_sec">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgba(200, 200, 244, 0.2)"
          fill-opacity="1"
          d="M0,256L80,245.3C160,235,320,213,480,181.3C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <h1 className="marqure_h1">Get Access to our <span>Endless Collection</span></h1>

      <div className="img_marquee m1">
        <img className="collection_image " src={img1}></img>
        <img className="collection_image " src={img2}></img>
        <img className="collection_image " src={img3}></img>
        <img className="collection_image " src={img4}></img>
        <img className="collection_image " src={img5}></img>
        <img className="collection_image " src={img1}></img>
        <img className="collection_image " src={img2}></img>
        <img className="collection_image " src={img3}></img>
        <img className="collection_image " src={img4}></img>
        <img className="collection_image " src={img5}></img>
      </div>
      <div className="img_marquee ">
        <img className="collection_image m2" src={img6}></img>
        <img className="collection_image m2" src={img7}></img>
        <img className="collection_image m2" src={img8}></img>
        <img className="collection_image m2" src={img9}></img>
        <img className="collection_image m2" src={img10}></img>
        <img className="collection_image m2" src={img6}></img>
        <img className="collection_image m2" src={img7}></img>
        <img className="collection_image m2" src={img8}></img>
        <img className="collection_image m2" src={img9}></img>
        <img className="collection_image m2" src={img10}></img>
        {/* <img className="collection_image simage" src={img11}></img>
            <img className="collection_image bimage" src={img12}></img> */}
      </div>
    </section>
  );
}

export default collection;
