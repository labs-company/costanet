/**
 * 
  const imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tokyo_Sky_Tree_2012_%E2%85%A3.JPG";
    const downloadSize = 8185374;
    const downloadSrc = new Image();

    setElementLoader({
      loaderContent: false,
      loader: false,
      speedTotal: true,
      resultAgain: true,
    });
    const startTime = new Date().getTime();

    const cacheImage = `?nn=${startTime}`;

    downloadSrc.src = imageLink + cacheImage;

    downloadSrc.onload = () => {
      const endTime = new Date().getTime();
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
      setMessage("Volver a empezar");
    };

    
@layer utilities {
  /* *.hiden {
    display: none !important;
  }
  .loader {
    position: relative;
    display: inline-block;
    height: 240px;
    width: 240px;
    border-radius: 50%;
    background: conic-gradient(#274a99 0%, transparent 65%);
    animation: radarRotate 2s linear infinite;
  }

  @keyframes radarRotate {
    100% {
      transform: rotate(-360deg);
    }
  }
  .loader::before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    left: calc(50% - 8px);
    border: 8px solid transparent;
    border-top: 120px solid #274a99;
    filter: drop-shadow(0 0 12px #274a99);
  }
  .loader-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .loader-content button {
    position: relative;
    cursor: pointer;
    height: 240px;
    width: 240px;
    font-weight: bold;
    line-height: 1.5;
    border-radius: 50%;
    background-color: #274a99;
    color: #eaeaea;
    border: 0;
    box-shadow: 0 0 12px #274a99;
  }

  .loader-content.result button {
    height: 120px;
    width: 120px;
    margin-top: 16px;
  }
  .loader-content button::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border: 2px solid #274a99;
    border-radius: 50%;
    animation: btnRing 2s linear infinite;
  }
  @keyframes btnRing {
    60%,
    100% {
      height: calc(100% + 60px);
      width: calc(100% + 60px);
      top: -32px;
      left: -32px;
      opacity: 0;
    }
  }
  .loader-content button::after {
    content: "";
    position: absolute;
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    top: -2px;
    left: -2px;
    background: linear-gradient(45deg, #274a99, #eaeaea);
    border: 2px solid #274a99;
    z-index: -1;
    border-radius: 50%;
    animation: btnRing 2s linear;
  }

  .loader-content button:hover {
    background-color: #17367e;
  }
  .content {
    display: flex;
    width: 100%;
    font-size: 70px;
    margin: 12px 0 32px 0;
    justify-content: center;
    align-items: baseline;
  }

  .content small {
    font-size: 60%;
  } 
} */

/*
import { Container } from "@mui/material";
import SpeedTest from "@/components/SpeedTest";
import Image from "next/image";
import imageTest from "@/public/sectionOne/andre-pik.jpg";

export default function TestDeVelocidad() {
  return (
    <section className="flex flex-col sm:flex-row">
      <article className="flex-shrink-0 w-full sm:w-1/2 p-2">
        <div className="flex flex-col justify-center items-center text-justify gap-y-4">
          <h2 className="sm:text-5xl font-bold text-letter text-lg">
            TEST DE VELOCIDAD
          </h2>
          <p>Examina la velocidad de tu red</p>
          <p className="whitespace-pre-wrap text-center">
            Realiza la medición de tus servicios de internet
          </p>
        </div>
        <Container>
          <div className="loader-widget flex justify-center items-start">
            <SpeedTest />
          </div>
        </Container>
      </article>
      <article className="flex-grow w-full sm:w-1/2">
        <Image
          src={imageTest}
          alt="Mide la velocidad de tu red"
          className="w-full h-auto"
        />
      </article>
    </section>
  );
}

*/