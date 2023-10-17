import whatsAppIcon from '@/public/whatsapp.svg'
import Image from 'next/image'

export default function ButtonWhatsapp() {
  return (
    <a
      href='https://wa.me/573205133639?text=Hola%20¡Estoy%20interesado%20en%20sus%20servicios!'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed right-6 bottom-8 bg-green px-3 rounded-xl shadow-xl bg-green-50 transition-all font-monset text-white flex justify-center py-2 items-center gap-2 font-bold hover:bg-green-100 hover:cursor-pointer z-20'
    >
      <Image src={whatsAppIcon} alt='WhatsApp' className='w-10 h-10' />
      Ayuda
    </a>
  )
}
