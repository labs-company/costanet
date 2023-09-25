import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";

export default function PageServices() {
  return (
    <>
      <section
        className="bg-letter flex justify-center items-center flex-col-reverse md:flex-row"
        id="servicios"
      >
        <article className="flex-1 justify-stretch">
          <figure className="p-0 w-auto flex justify-center items-end">
            <Image
              src={clientHappy}
              alt="Hacemos clientes felices"
              className="flex items-end show-image object-cover"
            />
          </figure>
        </article>
        <article className="flex-1 justify-stretch">
          <div>
            <div className="pt-5 p-0 flex content-center h-auto w-full">
              <h2 className="text-2xl text-center ml-1 text-white font-bold md:text-3xl xl:text-6xl sm:flex sm:items-center whitespace-pre-wrap mb-20 font-monset">
                Con nuestros servicios de telecomunicaciones hacemos felices a
                nuestros clientes
              </h2>
            </div>
            <div className="flex justify-around flex-col items-center gap-5 md:flex-row px-4">
              <a
                href="https://wa.me/573205133639?text=Hola%20¡Estoy%20interesado%20en%20sus%20servicios%20pymes!"
                className="text-center font-monset bg-white text-letter p-3.5 text-xl w-52 rounded-2xl font-bold hover:shadow-[0px_5px_1rem_0rem_#fff] hover:-translate-y-2 hover:transition-transform"
              >
                Pymes
              </a>

              <a
                href="https://wa.me/573205133639?text=Hola%20¡Estoy%20interesado%20en%20sus%20servicios%20domiciliario!"
                className="text-center font-monset bg-white text-letter p-3.5 text-xl w-52 rounded-2xl font-bold hover:shadow-[0px_5px_1rem_0rem_#fff] hover:-translate-y-2 hover:transition-transform"
              >
                Domiciliario
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
