"use client";

import { Footer } from "flowbite-react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo_blanco from "@/public/logos/logo_blanco.png";
import Link from "next/link";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="bg-footer rounded-none p-0">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 p-5">
          <div>
            <div>
              <Link href="/">
                <Image src={logo_blanco} alt="" className="w-44 p-4 pt-0" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-4 sm:grid-cols-4 sm:gap-4">
            <div>
              <Footer.Title title="ACERCA DE " />
              <Footer.LinkGroup col>
                <Footer.Link href="/nosotros">Nosotros</Footer.Link>
                <Footer.Link href="#">Sedes</Footer.Link>
                <Footer.Link href="#">Contactanos</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="SERVICIOS" />
              <Footer.LinkGroup col>
                <Footer.Link href="/servicios">Internet FO</Footer.Link>
                <Footer.Link href="#">PSE</Footer.Link>
                <Footer.Link href="#">PQRSF</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="TEXT DE VELOCIDAD" />
              <Footer.LinkGroup col>
                <Footer.Link href="/test-de-velocidad">Inicio</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="w-full flex-col flex items-center sm:justify-between p-5 gap-y-2 justify-center">
            <Footer.Copyright
              by="Copyright 2023 CostaNet S.A.S | Todos los derechos reservados"
              href="#"
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="facebook.com" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </div>
            <Footer.LinkGroup className="py-2">
              <Footer.Link href="github.com/nettenam-labs">
                By netnovice
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
