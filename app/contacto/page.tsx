import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function PageContacto() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#274A99", padding: "5rem" }}>
        <Grid
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <h2 className="text-white font-bold text-5xl tracking-wide leading-tight">
            Aqui puedes contactarnos!
          </h2>
          <p>RESPONDEREMOS TODAS TUS DUDAS EN BREVE</p>
        </Grid>
        <Grid
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="w-full flex flex-col">
            <button className="rounded-md border border-transparent bg-white px-8 py-3 text-center font-medium text-letter">
              PES
            </button>
          </div>
          <div className="w-full flex flex-col">
            <button className="rounded-md border border-transparent bg-white px-8 py-3 text-center font-medium text-letter">
              PQRSF
            </button>
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ paddingTop: "1.5rem" }}>
        <Grid xs={3}>A</Grid>
        <Grid xs={3}>B</Grid>
        <Grid xs={3}>C</Grid>
        <Grid xs={3}>D</Grid>
      </Grid>
    </>
  );
}
