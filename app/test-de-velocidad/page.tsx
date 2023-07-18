import { Container } from "@mui/material";
import SpeedTest from "@/components/SpeedTest";

export default function TestDeVelocidad() {
  return (
    <section>
      <div className="bg-section h-screen flex justify-center items-center">
        <h1>Test De velocidad</h1>
        <Container>
          <div className="loader-widget">
            <SpeedTest />
          </div>
        </Container>
      </div>
    </section>
  );
}
