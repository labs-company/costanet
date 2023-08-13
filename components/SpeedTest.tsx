"use client";

import { useState } from "react";
import { URL_API, ITestFormat } from "@/utils/dev";
import { Button, Collapse, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// @ts-ignore
import FastSpeedTest from "fast-speedtest-api";

export default function SpeedTest() {
  const [totalSpeed, setTotalSpeed] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [isp, setIsp] = useState("");

  const handleRequestSpeedTest = async () => {
    setIsLoading(true);
    try {
      // const response = await fetch(URL_API.production);
      // const data = await response.json();
      // const downloadMbps = data.results;

      // setDownloadSpeed(downloadMbps);

      const speedtest = new FastSpeedTest({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
        verbose: true, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5
        bufferSize: 8, // default: 8
        unit: FastSpeedTest.UNITS.Mbps, // default: Bps
        proxy: "http://optional:auth@my-proxy:123", // def
      });

      const download = await speedtest.getSpeed();

      startAnimation(download);
    } catch (error) {
      console.error(error);
    }
  };

  const startAnimation = (downloadMbps: number) => {
    const animationDuration = 2000;
    const startTime = Date.now();
    const endTime = startTime + animationDuration;

    const animateFrame = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (now < endTime) {
        const progress = (elapsed / animationDuration) * downloadMbps;
        setTotalSpeed(progress.toFixed(2));
        requestAnimationFrame(animateFrame);
      } else {
        setTotalSpeed(downloadMbps.toFixed(2));
        setIsLoading(false);
        setIsCompleted(true);
      }
    };

    animateFrame();
  };

  const handleClickTest = () => {
    setIsCompleted(false);
    setIsSummaryOpen(false);
    setIsLoading(true);
    handleRequestSpeedTest();
  };

  return (
    <div className="pt-24 text-center">
      <div className="relative">
        <Button
          className={`text-gray-600 hover:text-white ${
            isLoading || isCompleted ? "hidden" : ""
          }`}
          onClick={handleClickTest}
          variant="contained"
          color="primary"
          disabled={isLoading || isCompleted}
        >
          Comenzar
        </Button>

        {isLoading && (
          <div className="flex items-center relative">
            <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-24 w-25 border-t-4 border-blue-500 border-opacity-50"></div>
            </div>
            <p className="m-5 text-blue-500 p-3 text-6xl">
              Evaluando la velocidad...
            </p>
          </div>
        )}

        {isCompleted && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3">
              <p className="text-7xl sm:text-9xl ">
                {downloadSpeed.toFixed(2)}
              </p>
              <small className="text-5xl text-black font-bold self-start">
                Mbps
              </small>
            </div>
            <Button
              className={`m-2 text-gray-600 hover:text-white ${
                isCompleted ? "" : "hidden"
              }`}
              onClick={() => {
                setIsCompleted(false);
                setIsLoading(false);
                setIsSummaryOpen(false);
                setTotalSpeed("0");
              }}
              variant="contained"
              color="primary"
            >
              Volver a empezar
            </Button>

            <Button
              className="m-2 text-blue-500"
              onClick={() => setIsSummaryOpen(!isSummaryOpen)}
              endIcon={<ExpandMoreIcon />}
              variant="text"
              color="primary"
            >
              Más Información
            </Button>

            <Collapse in={isSummaryOpen}>
              <Paper
                elevation={4}
                className="p-4 mt-4 border border-gray-200 shadow-md bg-white"
              >
                <p className="mb-2">
                  <b>UPLOAD</b>: {uploadSpeed.toFixed(2)} Mbps
                </p>
                <p className="mb-2">
                  <b>PING:</b> {ping} ms
                </p>
                <p className="mb-2">
                  <b>ISP:</b> {isp}
                </p>
              </Paper>
            </Collapse>
          </div>
        )}
      </div>
    </div>
  );
}
