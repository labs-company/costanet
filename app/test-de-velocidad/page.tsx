import { Container } from "@mui/material";

export default function TestDeVelocidad() {
  return (
    <div className="bg-section h-screen">
    <Container>
      <div className="loader-widget">
        <span className="loader hiden"></span>
        <div className="loader-content">
            <div className="content">24 <small>Mbps</small></div>
            <button>EMPEZAR</button>
        </div>
      </div>
    </Container>
    </div>
  );
}
