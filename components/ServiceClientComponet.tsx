"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";
import wifiCostanet from "@/public/sectionTres/wifi-costanet.png";

export default function ServiceClientComponet() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "0px",
        flexWrap: "nowrap",
        flexDirection: matches ? "row" : "column-reverse",
        alignItems: "center",
        placeContent: "center",
      }}
    >
      <Grid
        xs={5}
        sx={{
          padding: "0px",
          width: "auto",
          display: "flex",
          alignItems: "flex-end",
          placeContent: "center",
        }}
      >
        <Image
          style={{
            width: matches ? "100%" : "60%",
          }}
          src={clientHappy}
          alt="Hacemos clientes felices"
          className="flex items-end"
        />
      </Grid>
      <Grid
        xs={7}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // justifyContent: "center",
          flexDirection: "column",
          width: matches ? "calc(100% * 7 / var(--Grid-columns))" : "inherit",
        }}
      >
        <div className="pt-5 p-0 flex content-center h-auto w-full">
          <p className="text-3xl text-center ml-1 text-white font-semibold md:text-4xl xl:text-6xl sm:flex sm:items-center whitespace-pre-wrap service-text mb-20">
            Con nuestros servicios de telecomunicaciones hacemos felices a
            nuestros clientes
          </p>
        </div>
        <div className="flex justify-around flex-col items-center gap-5 md:flex-row">
          <button className="btnpymes">Pymes</button>
          <button className="btnpymes">Domiciliario</button>
        </div>
      </Grid>
    </Grid>
  );
}
