import nosotros from "@/public/sectionDos/nosotros.png";
import vision from "@/public/vision.jpg";
import mision from "@/public/mision-vision-y-valores-6.jpg";
import AttachBorder from "@/components/spinners/SpinnerAbout";
import SpinnerVision from "@/components/spinners/SpinnerVision";
import SpinnerMision from "@/components/spinners/SpinnerMision";
import ImageAbout from "@/components/ImageAbout";

export default function PageAbout() {
  return (
    <section id="nosotros">
      <article className="flex justify-between items-center py-8 gap-4 flex-wrap lg:flex-nowrap">
        <div className="lg:flex-1 flex justify-center flex-col lg:items-center">
          <h2 className="font-monset font-bold text-letter p-8 text-2xl lg:text-7xl mt-12">
            NOSOTROS
          </h2>
          <AttachBorder />
          <p className="font-monset text-xl w-full lg:w-[50vw] py-4 px-2">
            {" "}
            Costanet es una empresa de telecomunicaciones, creada en el año 2018
            para brindar un excelente servicio al cliente basado en el respeto,
            confiabilidad y compromiso. Buscamos, junto a nuestros
            colaboradores, prestar el mejor servicio de telecomunicaciones.{" "}
            <b className="font-bold">“HACEMOS CLIENTES FELICES”</b>
          </p>
        </div>
        <ImageAbout image={nosotros} />
      </article>
      <article className="flex justify-between items-center py-8 gap-4 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
        <ImageAbout image={mision} />
        <div className="lg:flex-1 flex justify-center flex-col lg:items-center relative overflow-x-hidden w-full">
          <h2 className="font-monset font-bold text-letter text-2xl p-8 lg:text-7xl mt-12 text-center lg:text-right">
            MISION
          </h2>
          <SpinnerMision />
          <p className="font-monset text-xl lg:w-[50vw] py-4 px-2">
            {" "}
            CostaNet es una empresa de telecomunicaciones que orientará sus
            actividades hacia la promoción y comercialización de internet por
            medio de la fibra óptica de última generación, enfocados en mantener
            a nuestros usuarios conectados al mundo digital donde se les conceda
            una adecuada trasmisión de datos a alta velocidad, brindando un
            servicio de calidad de la mano de una atención técnica oportuna que
            nos permita hacer clientes felices.
          </p>
        </div>
      </article>
      <article className="flex justify-between items-center py-8 gap-4 flex-wrap lg:flex-nowrap">
        <div className="lg:flex-1 flex justify-center flex-col items-center w-full">
          <h2 className="font-monset font-bold text-letter p-8 text-2xl lg:text-7xl mt-12">
            VISION
          </h2>
          <SpinnerVision />
          <p className="font-monset text-xl lg:w-[50vw] py-4 px-2">
            Para el año 2025 Costanet será una empresa reconocida nacionalmente,
            con una extensa variedad de planes domiciliarios y empresariales
            disponibles para todo público gracias a la oportuna adecuación de
            nuestros paquetes de internet a la economía de cada sector,
            distribuyendo nuestros servicios en las grandes ciudades de
            Colombia, siendo una empresa solida financieramente y proporcionando
            empleo local en cada una de nuestras sedes.
          </p>
        </div>
        <ImageAbout image={vision} />
      </article>
    </section>
  );
}
