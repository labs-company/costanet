import { Container } from "@mui/material";

export default function TestDeVelocidad() {
  return (
    <Container className="bg-navbar">
      <div className="loader-widget">
        <span className="loader hiden"></span>
        <div className="loader-content">
            <div className="content"></div>
            <button>EMPEZAR</button>
        </div>
      </div>
    </Container>
  );
}
