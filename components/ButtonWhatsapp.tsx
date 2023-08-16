import whatsAppIcon from "@/public/whatsapp.svg";
import Image from "next/image";

export default function ButtonWhatsapp() {
  return (
    <a
      href="https://wa.me/3160269611?text=Hola%20¡Estoy%20interesado%20en%20tu%20servicio!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-12 bg-green p-3 rounded-full shadow-lg hover:bg-green transition-all"
    >
      <Image src={whatsAppIcon} alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
}
