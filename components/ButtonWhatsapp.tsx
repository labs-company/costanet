import whatsAppIcon from "@/public/whatsapp.svg";
import Image from "next/image";

export default function ButtonWhatsapp() {
  return (
    <a
      href="https://wa.me/573205133639?text=Hola%20¡Estoy%20interesado%20en%20sus%20servicios!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-8 bg-green p-3 rounded-full shadow-lg hover:bg-green transition-all"
    >
      <Image src={whatsAppIcon} alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
}
