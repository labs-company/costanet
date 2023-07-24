import { Container } from "@mui/material";
import SpeedTest from "@/components/SpeedTest";

export default function TestDeVelocidad() {
  return (
    <section>
      <div className="bg-white h-screen p-5">
        <div className="flex flex-col justify-center items-center text-justify gap-2">
          <h2 className="text-5xl font-bold text-letter">TEST DE VELOCIDAD</h2>
          <p>Examina la velocidad de tu red</p>
          <p>
            Realiza la medición de tus servicios de internet, desde tu celular,
            tablet o PC.
          </p>
        </div>
        <Container>
          <div className="loader-widget flex justify-center items-start h-screen">
            <SpeedTest />
          </div>
        </Container>
      </div>
    </section>
  );
}
