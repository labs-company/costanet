import Image from "next/image";
import imagenPqrs from "@/public/imagen-pqrs.jpg";
import ListboxComponent from "@/components/Listbox";

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
        <form className="space-y-6 px-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-navbar focus:ring-2 focus:ring-inset focus:ring-letter sm:text-sm sm:leading-6 outline-none p-2"
                placeholder="Ingresa tu nombre completo"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo Electronico
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-navbar focus:ring-2 focus:ring-inset focus:ring-letter sm:text-sm sm:leading-6 outline-none p-2"
                placeholder="Ingresa tu correo electronico"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex-1">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Numero de telefono
              </label>
              <input
                type="text"
                placeholder="Ingresa tu numero de telefono"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-navbar focus:ring-2 focus:ring-inset focus:ring-letter sm:text-sm sm:leading-6 outline-none p-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="tipo"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Tipo de comentario
              </label>
              <ListboxComponent />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Comentario
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-navbar placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-letter sm:text-sm sm:leading-6 p-2 outline-none"
                defaultValue={""}
                placeholder="Escribe tu asunto"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              value="Enviar comentario"
              className="flex-row justify-center bg-letter text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-letter font-bold rounded-lg px-10 py-2.5 text-center items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-90 hover:opacity-100"
            />
          </div>
        </form>
      </section>
    </section>
  );
}
