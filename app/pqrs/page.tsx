import Image from "next/image";
import imagenPqrs from "@/public/imagen-pqrs.jpg";
import Email from "./Email";

export default function PagePqrs() {
  return (
    <section className="flex flex-col lg:flex-row font-monset">
      <figure className="flex-shrink-0 w-full lg:w-1/2">
        <Image
          src={imagenPqrs}
          alt="Costanet peticion queja reclamos felicitaciones"
          className="object-cover h-full w-full"
        />
      </figure>
      <section className="flex-grow w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center p-3">
          Compartes tus comentarios
        </h2>
        <Email />
      </section>
    </section>
  );
}
