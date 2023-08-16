import { Container } from "@mui/material";
import SpeedTest from "@/components/SpeedTest";

export default function TestDeVelocidad() {
  return (
    <section className="flex flex-col justify-center p-8">
      <article className="bg-white p-2">
        <div className="flex flex-col justify-center items-center text-justify gap-y-4">
          <h2 className="sm:text-5xl font-bold text-letter text-lg">
            TEST DE VELOCIDAD
          </h2>
          <p>Examina la velocidad de tu red</p>
          <p className="whitespace-pre-wrap text-center">
            Realiza la medición de tus servicios de internet
          </p>
        </div>
        <Container>
          <div className="loader-widget flex justify-center items-start">
            <SpeedTest />
          </div>
        </Container>
      </article>
      <h2 className="text-letter text-end font-bold text-5xl">COSTANET</h2>
    </section>
  );
}
