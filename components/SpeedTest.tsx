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

  const [message, setMessage] = useState("EMPEZAR");
  const handleRequestSpeedTest = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/test");
      const data = await response.json();

      console.log(data);
      return data;
    } catch (error) {
      return console.log(error);
    }
  };
  const handleClickTest = () => {
    setElementLoader({
      loaderContent: false,
      loader: false,
      speedTotal: true,
      resultAgain: true,
    });
    handleRequestSpeedTest();

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
    setElementLoader({
      loaderContent: true,
      loader: true,
      speedTotal: false,
      resultAgain: false,
    });
    setMessage("Volver a empezar");
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
          <button onClick={handleClickTest} className="text-2xl">
            {message}
          </button>
        </div>
      </div>
    </>
  );
}
