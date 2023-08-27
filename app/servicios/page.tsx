import { Container } from "@mui/material";
import ServiceClientComponet from "@/components/ServiceClientComponet";
import backgroundus from "@/public/bg-example.jpg";

export default function PageServices() {
  return (
    <>
      <section
        className="flex flex-col justify-end"
        id="servicios"
        style={{
          backgroundImage: `url(${backgroundus.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container className="flex flex-col-reverse justify-center">
          <ServiceClientComponet />
        </Container>
      </section>
    </>
  );
}
