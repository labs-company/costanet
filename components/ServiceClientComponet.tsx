"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";

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
            marginTop: "6%",
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
          <p className="text-3xl text-center ml-1 text-white font-semibold md:text-4xl xl:text-6xl sm:flex sm:items-center whitespace-pre-wrap mb-20 font-monset">
            Con nuestros servicios de telecomunicaciones hacemos felices a
            nuestros clientes
          </p>
        </div>
        <div className="flex justify-around flex-col items-center gap-5 md:flex-row">
          <a
            href="https://wa.me/573205133639?text=Hola%20¡Estoy%20interesado%20en%20sus%20servicios%20pymes!"
            className="btnpymes text-center font-monset"
          >
            Pymes
          </a>

          <a
            href="https://wa.me/573205133639?text=Hola%20¡Estoy%20interesado%20en%20sus%20servicios%20domiciliario!"
            className="btnpymes text-center font-monset"
          >
            Domiciliario
          </a>
        </div>
      </Grid>
    </Grid>
  );
}
