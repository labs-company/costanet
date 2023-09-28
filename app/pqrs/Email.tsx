"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const typeComment = [
  { id: 1, title: "Peticion" },
  { id: 2, title: "Queja" },
  { id: 3, title: "Reclamo" },
];

export default function Email() {
  const [selected, _] = useState(typeComment[0]);
  const [selectedTitle, setSelectedTitle] = useState(typeComment[0].title);

  const [username, setUsername] = useState({
    name: "",
    email: "",
    telephone: "",
    selected: selectedTitle,
    coment: "",
  });

  const handleChangeUsername = (key: string, value: string) => {
    if (key === "selected") {
      setSelectedTitle(value);
      const commentWithColon = value + ": ";

      setUsername({ ...username, [key]: value, coment: commentWithColon });
    }
    setUsername({ ...username, [key]: value });
  };

  return (
    <form
      className="space-y-6 px-8"
      action="https://formsubmit.co/gerenciageneral@costanetcolombia.com"
      method="POST"
    >
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
            name="name"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-navbar focus:ring-2 focus:ring-inset focus:ring-letter sm:text-sm sm:leading-6 outline-none p-2"
            placeholder="Ingresa tu nombre completo"
            onChange={(e) => handleChangeUsername("name", e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="email"
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
            onChange={(e) => handleChangeUsername("email", e.target.value)}
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
            name="phone"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-navbar focus:ring-2 focus:ring-inset focus:ring-letter sm:text-sm sm:leading-6 outline-none p-2"
            onChange={(e) => handleChangeUsername("telephone", e.target.value)}
            maxLength={10}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="tipo"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Tipo de comentario
          </label>
          <Listbox
            value={selected}
            onChange={(newValue) =>
              handleChangeUsername("selected", newValue.title)
            }
          >
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedTitle}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full mt-1 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {typeComment.map((commet) => (
                    <Listbox.Option
                      key={commet.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-letter text-white" : "text-black"
                        }`
                      }
                      value={commet}
                    >
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {commet.title}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <input type="hidden" name="tipo" value={username.selected} />
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
            value={username.coment}
            placeholder="Escribe tu asunto"
            onChange={(e) => handleChangeUsername("coment", e.target.value)}
          ></textarea>
        </div>
      </div>
      <input
        type="hidden"
        name="_next"
        value="https:costanetcolombia.com/thanks"
      />
      <div className="flex justify-center items-center">
        <input
          type="submit"
          value="Enviar comentario"
          className="flex-row justify-center bg-letter text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-letter font-bold rounded-lg px-10 py-2.5 text-center items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        />
      </div>
    </form>
  );
}
