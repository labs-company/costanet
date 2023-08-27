import TabsPqrs from "@/components/TabsPqrs";
import Image from "next/image";
import imagenPqrs from "@/public/imagen-pqrs.jpg";

export default function PagePqrs() {
  return (
    <section className="flex flex-col sm:flex-row">
      <figure className="flex-shrink-0 w-full sm:w-1/2">
        <Image
          src={imagenPqrs}
          alt="Costanet peticion queja reclamos felicitaciones"
          className="w-full h-auto"
        />
      </figure>
      <section className="flex-grow w-full sm:w-1/2">
        <TabsPqrs />
      </section>
    </section>
  );
}
