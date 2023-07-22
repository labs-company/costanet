import { Container } from "@mui/material";
import SpeedTest from "@/components/SpeedTest";

export default function TestDeVelocidad() {
  return (
    <section>
      <div className="bg-section h-screen">
        <p className="text-5xl text-center">Test De velocidad</p>
        <p className="text-3xl text-center mt-10">Tu Velocidad de Internet es de:</p>
        <Container>
          <div className="loader-widget flex justify-center items-center h-screen">
            <SpeedTest />
          </div>
        </Container>
      </div>
    </section>
  );
}
