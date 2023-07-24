import { Container } from "@mui/material";
import ServiceClientComponet from "@/components/ServiceClientComponet";
export default function PageServices() {
  return (
    <>
      <section className="bg-letter sm:h-screen flex flex-col justify-stretch">
        <Container className="flex flex-col-reverse justify-center h-screen">
          <ServiceClientComponet />
        </Container>
      </section>
    </>
  );
}
