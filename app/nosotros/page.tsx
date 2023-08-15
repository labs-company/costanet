import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import backgroundus from "@/public/sectionDos/backgroundUs.png";

export default function PageAbout() {
  return (
    <>
      <section
        className="bg-section w-full bg-no-repeat bg-cover flex justify-center items-center md:bg-center bg-center xl:h-screen"
        style={{
          backgroundImage: `url(${backgroundus.src})`,
        }}
      >
        <Container className="bg-bgshadow p-12 shadow-shadowus">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <h2 className="text-4xl font-bold leading-7 xl:text-6xl sm:tracking-tight text-letter flex justify-center">
                NOSOTROS
              </h2>
              <Typography
                mt={3}
                className="sm:text-3xl md:text-4xl text-justify text-letter font-semibold"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                magnam quod autem, commodi, exercitationem voluptatem sapiente
                in, maxime aperiam itaque consequuntur dolorem minus ratione cum
                voluptate cumque aliquid perferendis nulla!
              </Typography>

              <div className="flex flex-col md:flex-row md:space-x-6 mt-5">
                {/* Mission Statement */}
                <div className="flex-1">
                  <h2 className="font-bold text-4xl text-center p-2">Mision</h2>
                  <Typography className="sm:text-2xl text-letter font-semibold text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
                  </Typography>
                </div>

                {/* Vision Statement */}
                <div className="flex-1">
                  <h2 className="font-bold text-4xl text-center p-2">Vision</h2>
                  <Typography className="sm:text-2xl text-center text-letter font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
