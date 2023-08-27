import { Container } from "@mui/material";
import ServiceClientComponet from "@/components/ServiceClientComponet";

export default function PageServices() {
  return (
    <>
      <section
        className="flex flex-col justify-end bg-letter"
        id="servicios">
        <Container className="flex flex-col-reverse justify-center">
          <ServiceClientComponet />
        </Container>
      </section>
    </>
  );
}
