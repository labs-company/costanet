"use client";

import { useState } from "react";

export default function SpeedTest() {
  const [totalSpeed, setTotalSpeed] = useState("0");
  const [elementLoader, setElementLoader] = useState({
    loader: true,
    loaderContent: true,
    speedTotal: true,
  });
  const handleClickTest = () => {
    const imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tokyo_Sky_Tree_2012_%E2%85%A3.JPG";
    const downloadSize = 8185374;
    const downloadSrc = new Image();

    setElementLoader({ loaderContent: false, loader: false, speedTotal: true });
    const startTime = new Date().getTime();

    const cacheImage = `?nn=${startTime}`;

    downloadSrc.src = imageLink + cacheImage;

    downloadSrc.onload = () => {
      const endTime = new Date().getTime();
      const timeDuration = (endTime - startTime) / 1000;
      const loadedBytes = downloadSize * 8;
      const totalSpeed = (loadedBytes / timeDuration / 1024 / 1024).toFixed(2);
      setTotalSpeed(totalSpeed);
      setElementLoader({
        loaderContent: true,
        loader: true,
        speedTotal: false,
      });
    };
  };

  return (
    <>
      <span
        className={`loader ${elementLoader.loader ? "hiden" : "hiden-none"}`}
      ></span>
      <div
        className={`loader-content ${
          elementLoader.loaderContent ? "hiden-none" : "hiden"
        }`}
      >
        <div className={`content ${elementLoader.speedTotal ? "hiden" : "hiden-none"}`}>
          {totalSpeed} <small>Mbps</small>
        </div>
        <button onClick={handleClickTest}>EMPEZAR</button>
      </div>
    </>
  );
}
