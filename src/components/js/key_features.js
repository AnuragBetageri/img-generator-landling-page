/* eslint-disable jsx-a11y/alt-text */
import "../css/keyfeatures.css";
import free from "../image/free.png"
import easyToUse from "../image/easytouse.png"
import nocopy from "../image/c.png"
function key_features() {
  return (
    <div id="Keyfeatures_sec">
      <div className="key_heading_sec">
        <div className="key_main_heading">
          <h1>
            Free<span className="dot_span">. </span>Simple
            <span className="dot_span">. </span>Safe
            <span className="dot_span">. </span>
          </h1>
        </div>
        <div className="key_heading">
          <h2>We've made it simple to automate and save your time.</h2>
          <h2>
            {" "}
            You have all of the images you need right at your fingertips.
          </h2>
        </div>
      </div>

      <div className="key_content_body">
        <div className="key_content">
          <div className="key_images">
          <img src={free}></img>
          </div>
          <h3 className="key_content_heading">Free-to-use, no-cost</h3>
          <p>Completly free of cost </p>
          <p>No in app-perchases</p>
        </div>
        <div className="key_content">
          <div className="key_images">
            <img src={easyToUse}></img>
          </div>
          <h3 className="key_content_heading">Easy-to-use, yet smart</h3>
          <p>An image generation tool with a simple interface</p>
          <p>that is smart at the same time.</p>
        </div>
        <div className="key_content">
          <div className="key_images">
          <img src={nocopy}></img>
          </div>
          <h3 className="key_content_heading">Non-copyrighted images</h3>
          <p>Every image can be used for free for </p>
          <p>both commercial and personal</p>
        </div>
      </div>
    </div>
  );
}

export default key_features;
