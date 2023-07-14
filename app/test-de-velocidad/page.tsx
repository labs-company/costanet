import { Container } from "@mui/material";
import SpeedTest from "@/components/SpeedTest";

export default function TestDeVelocidad() {
  return (
    <div className="bg-section h-screen">
      <Container>
        <div className="loader-widget">
          <SpeedTest />
        </div>
      </Container>
    </div>
  );
}
