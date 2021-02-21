import React, { useState, useEffect } from "react";

const Img = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2KdMLsskO-By1dqK2epgegHaHa%26pid%3DApi&f=1"
  );
  useEffect(() => {
    // start loading original image
    console.log(src);
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .15s linear"
      }}
    />
  );
};

export default Img;
