import SpeedTest from "@/components/SpeedTest";

export default function TestDeVelocidad() {
  return (
    <section className="flex flex-col justify-center p-8" id="test">
      <article className="bg-white p-2">
        <div className="flex flex-col justify-center items-center text-justify gap-y-4">
          <h2 className="sm:text-5xl font-bold text-letter font-monset text-3xl">
            TEST DE VELOCIDAD
          </h2>
          <p className="text-letter font-monset">
            Examina la velocidad de tu red
          </p>
          <p className="whitespace-pre-wrap text-center text-letter font-monset">
            Realiza la medición de tus servicios de internet
          </p>
        </div>

        <div className="loader-widget flex justify-center items-start">
          <SpeedTest />
        </div>
      </article>
      <h1 className="text-letter text-center md:text-end font-bold text-5xl my-4 font-monset pt-4">
        COSTANET
      </h1>
    </section>
  );
}
