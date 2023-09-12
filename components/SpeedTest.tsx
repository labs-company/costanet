"use client";

import { useState } from "react";

export default function SpeedTest() {
  const [totalSpeed, setTotalSpeed] = useState("0");
  const [elementLoader, setElementLoader] = useState({
    loader: true,
    loaderContent: true,
    speedTotal: true,
    resultAgain: true,
  });
  const [message, setMessage] = useState("Comenzar");
  const handleClickTest = () => {
    const imageLink =
      "https://mirror.nforce.com/pub/speedtests/mini/speedtest/random500x500.jpg";
    const downloadSize = 8185374;
    const downloadSrc = new Image();

    setElementLoader({
      loaderContent: false,
      loader: false,
      speedTotal: true,
      resultAgain: true,
    });
    const startTime = performance.now();
    const cacheImage = `?nn=${startTime}`;
    downloadSrc.src = imageLink + cacheImage;

    downloadSrc.onload = () => {
      const endTime = performance.now();
      const timeDuration = (endTime - startTime) / 1000;
      const loadedBytes = downloadSize * 8;
      const totalSpeed = (loadedBytes / timeDuration / 1024 / 1024).toFixed(2);
      let i = 0;

      const animateMbps = () => {
        if (i < parseInt(totalSpeed)) {
          const totalSpeedAnimate = i.toFixed(2);
          setTotalSpeed(totalSpeedAnimate);
          setTimeout(animateMbps, 20);
          i += 1.02;
        } else {
          setTotalSpeed(totalSpeed);
        }
      };

      animateMbps();
      setTotalSpeed(totalSpeed);
      setElementLoader({
        loaderContent: true,
        loader: true,
        speedTotal: false,
        resultAgain: false,
      });
      setMessage("De nuevo");
    };
  };

  return (
    <>
      <div className="pt-24">
        <span
          className={`loader ${elementLoader.loader ? "hiden" : "hiden-none"}`}
        ></span>

        <div
          className={`loader-content ${
            elementLoader.loaderContent ? "hiden-none" : "hiden"
          } ${elementLoader.resultAgain ? "reuslt-none" : "result"}`}
        >
          <div
            className={`content ${
              elementLoader.speedTotal ? "hiden" : "hiden-none"
            }`}
          >
            <p className="sm:text-9xl">{totalSpeed}</p>
            <small className="text-md"> Mbps.</small>
          </div>
          <button
            onClick={handleClickTest}
            className="text-3xl text-center font-monset flex justify-center items-center"
          >
            {message}
          </button>
        </div>
      </div>
    </>
  );
}
