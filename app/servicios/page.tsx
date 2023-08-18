import { Container } from "@mui/material";
import ServiceClientComponet from "@/components/ServiceClientComponet";
export default function PageServices() {
  return (
    <>
      <section className="bg-letter flex flex-col justify-end" id="servicios">
        <Container className="flex flex-col-reverse justify-center">
          <ServiceClientComponet />
        </Container>
      </section>
    </>
  );
}
