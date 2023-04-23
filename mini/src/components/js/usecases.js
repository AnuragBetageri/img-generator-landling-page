import "../css/usecases.css";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";

function usecases() {
  usecasestimer4();
  setInterval(usecasestimer4, 12000);
  function usecasestimer4() {
    setTimeout(() => {
      focused("uh1" , "uimg1" ,"rgb(12,24,36)");
    }, 0);

    setTimeout(() => {
      focused("uh2","uimg2","rgb(17,252,250)");
    }, 3000);
    setTimeout(() => {
      focused("uh3","uimg3", "rgb(72,22,111)");
    }, 6000);

    setTimeout(() => {
      focused("uh4","uimg4","rgb(16,58,82)");
    }, 9000);

    function focused(uh , ui , backcolor) {
      const elements = document.getElementsByClassName(`${uh}`);
      const image = document.getElementsByClassName(`${ui}`);
      const back = document.getElementsByClassName("usecases_sec");

      
      console.log(uh); 
      for (let i = 0; i < elements.length; i++) { 
        elements[i].classList.toggle("isfocused");
        image[i].classList.toggle("isfocused_img");
        back[i].style.backgroundColor = backcolor;
        setTimeout(() => {
          elements[i].classList.toggle("isfocused");
          image[i].classList.toggle("isfocused_img");
        }, 3000);
      }
    }
  }

  return (
    <section className="usecases_sec">
      <div className="usecases_body">
        <header>
          <h1 className="usecases_h1">Perfect Your Next Work</h1>
          <span className="use_span">Endless Use Cases</span>
        </header>
        <div className="usecases_content">
          <h2 className={`usecase_h2 uh1 `}>Education ⟶</h2>
          <h2 className={`usecase_h2 uh2 `}>Advertisement and marketing ⟶</h2>
          <h2 className={`usecase_h2 uh3 `}>dasfddfd ⟶</h2>
          <h2 className={`usecase_h2 uh4 `}>affasfasf ⟶</h2>
        </div>
      </div>
      <div className="usecases_img_block">
        <img className="usecase_image uimg1 " src={img1}></img>
        <img className="usecase_image uimg2" src={img2}></img>
        <img className="usecase_image uimg3 " src={img3}></img>
        <img className="usecase_image uimg4 " src={img4}></img>
        <img className="usecase_image uimg1 " src={img1}></img>
        <img className="usecase_image uimg2" src={img2}></img>
        <img className="usecase_image uimg3 " src={img3}></img>
        <img className="usecase_image uimg4 " src={img4}></img>
      </div>
    </section>
  );
}

export default usecases;
