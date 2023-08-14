"use client";

import React, { SetStateAction, useState } from "react";

export default function SpeedTest() {
  const [totalDownloadSpeed, setTotalDownloadSpeed] = useState("0");
  const [totalUploadSpeed, setTotalUploadSpeed] = useState("0");
  const [elementLoader, setElementLoader] = useState({
    loader: true,
    loaderContent: true,
    speedTotal: true,
    resultAgain: true,
  });
  const [message, setMessage] = useState("EMPEZAR");

  const animateSpeed = (
    speed: string,
    setSpeed: React.Dispatch<SetStateAction<string>>
  ) => {
    let i = 0;

    const animate = () => {
      if (i < parseFloat(speed)) {
        const speedAnimate = i.toFixed(2);
        setSpeed(speedAnimate);
        setTimeout(animate, 20);
        i += 1.02;
      } else {
        setSpeed(speed);
      }
    };

    animate();
  };

  const handleClickTest = () => {
    setElementLoader({
      loaderContent: false,
      loader: false,
      speedTotal: true,
      resultAgain: true,
    });

    const startTime = new Date().getTime();
    const downloadSize = 1024 * 1024 * 100;
    const uploadSize = 1024 * 1024 * 10;

    setTimeout(() => {
      const endTime = new Date().getTime();
      const timeDuration = (endTime - startTime) / 1000;
      const downloadedBytes = downloadSize * 8;
      const uploadedBytes = uploadSize * 8;
      const downloadSpeed = (
        downloadedBytes /
        timeDuration /
        1024 /
        1024
      ).toFixed(2);
      const uploadSpeed = (uploadedBytes / timeDuration / 1024 / 1024).toFixed(
        2
      );

      animateSpeed(downloadSpeed, setTotalDownloadSpeed);
      animateSpeed(uploadSpeed, setTotalUploadSpeed);

      setElementLoader({
        loaderContent: true,
        loader: true,
        speedTotal: false,
        resultAgain: false,
      });
      setMessage("Volver a empezar");
    }, 3000);
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
            <div className="flex gap-14 items-center">
              <div>
                <p className="sm:text-9xl">{totalDownloadSpeed}</p>
                <small className="text-md"> Mbps (Download)</small>
              </div>
              <div>
                <p className="sm:text-9xl">{totalUploadSpeed}</p>
                <small className="text-md"> Mbps (Upload)</small>
              </div>
            </div>
          </div>
          <button onClick={handleClickTest} className="text-2xl">
            {message}
          </button>
        </div>
      </div>
    </>
  );
}
