import React from "react";
import { constructionImage } from "../../assets/ConstructionImage";

const Construction = () => {
  return (
    <div>
      <h1 className="construction-message">
        Imgur is currently experiencing some technical difficulties with image
        uploads.
        <br />
        <p>Prequel Memes will be back as soon as these issues are resolved!</p>
        <div className="construction-image-container">
          <div className="construction-image-overlay">IMGUR</div>
          <img className="meme-image" src="https://i.imgur.com/ZwSc7zk.jpg" />
        </div>
      </h1>
    </div>
  );
};

export default Construction;
