import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function PageContacto() {
  return (
    <>
      <Grid container spacing={2} sx={{ backgroundColor: "#274A99" }}>
        <Grid
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Aqui puedes contactarnos!</h2>
          <p>RESPONDEREMOS TODAS TUS DUDAS EN BREVE</p>
        </Grid>
        <Grid xs={2}>
          <div>
            <button>PES</button>
          </div>
          <div>
            <button>PQRSF</button>
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
