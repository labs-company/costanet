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
 */