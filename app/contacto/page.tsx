"use client";
import Link from "next/link";
import CardContact from "@/components/CardContact";

export default function PageContacto() {
  return (
    <>
      <section
        className="font-monset text-letter"
        id="contacto"
        style={{
          background:
            "linear-gradient(180deg, #F1F9FE, #F1F9FE 60%, #FFFFFF 55%, #FFFFFF)",
        }}
      >
        <article>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-5xl tracking-wide leading-tight text-center py-8">
              Aqui puedes contactarnos!
            </h2>
            <h5 className="text-center p-4">
              RESPONDEREMOS TODAS TUS DUDAS EN BREVE
            </h5>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full flex justify-center p-2 m-4">
              <Link
                href="/pse"
                className="flex-row justify-center bg-letter text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-bold rounded-lg px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-credit-card"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                  <path d="M3 10l18 0"></path>
                  <path d="M7 15l.01 0"></path>
                  <path d="M11 15l2 0"></path>
                </svg>
                PSE
              </Link>
            </div>
            <div className="w-full flex justify-center p-2">
              <Link
                href="/pqrs"
                className="flex-row justify-center bg-letter text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 rounded-lg px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                </svg>
                PQR
              </Link>
            </div>
          </div>
        </article>
        <article className="flex justify-center items-center gap-8 px-8 py-6 flex-wrap">
          <CardContact
            icon="horarios"
            title="Horarios"
            description={{
              titleDescription: "Lunes a Viernes",
              titleDescriptionSecundary: "Sabados",
              titleDescriptionTerceary: "Festivos",
              text: "8 am-12 pm. y 2 pm-5:30pm",
              textSecundary: "8 am-2 pm",
              textTerceary: "Cerrado",
            }}
          />
          <CardContact
            icon="ubicacion"
            title="Ubicacion"
            description={{
              titleDescription: "Santa Ana",
              titleDescriptionSecundary: "Cicuco",
              titleDescriptionTerceary: "Talaigua",
              text: "Cra 8 #9-04 local 2 barrio",
              textSecundary: "Calle 8 #5-48 AV. los Cañahuates",
              textTerceary: "Cra 3 #14A-65 barrio centro",
            }}
          />
          <CardContact
            icon="correos"
            title="Correos"
            description={{
              titleDescription: "juridicocostanet@gmail.com",
              titleDescriptionSecundary: "oficinasantana@gmail.com",
              text: "juridico@costanetcolombia.com",
              textSecundary: "santaana@costanetcolombia.com",
              titleDescriptionTerceary: "oficinacicuco@gmail.com",
              textTerceary: "cicuco@costanetcolombia.com",
            }}
          />
          <CardContact
            icon="llamadas"
            title="Contactos"
            description={{
              titleDescription: "Santa Ana",
              titleDescriptionSecundary: "Cicuco",
              titleDescriptionTerceary: "Talaigua",
              text: "3205133639",
              textSecundary: "3160269611",
              textTerceary: "3215748550",
            }}
          />
        </article>
      </section>
    </>
  );
}
