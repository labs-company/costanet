import Link from 'next/link';
import Media from '@/components/Media';

export default function FooterWithSocialMediaIcons() {
  return (
    <footer className='bg-letter rounded-none p-0 text-white font-monset'>
      <div className='w-full'>
        <div
          className=' flex flex-col md:grid w-full p-5 relative'
          style={{ gridTemplateColumns: '40% 60%' }}
        >
          <div>
            <div>
              <h2 className='font-bold text-5xl hover:font-light transition-all cursor-pointer mb-5 inline-block'>
                COSTANET
              </h2>
            </div>
          </div>
          <div className='md:grid md:grid-cols-3 gap-6 sm:mt-4 sm:grid-cols-4 sm:gap-4 pl-3 flex flex-col justify-center'>
            <div>
              <h2 className='mb-2 font-bold'>ACERCA DE</h2>
              <ul>
                <li className='mt-1'>
                  <Link
                    href='/#nosotros'
                    className='hover:underline font-light'
                  >
                    Nosotros
                  </Link>
                </li>
                <li className='mt-1'>
                  <Link
                    href='/#contacto'
                    className='hover:underline font-light'
                  >
                    Contáctanos
                  </Link>
                </li>
                <li className='mt-1'>
                  <Media />
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-2 font-bold'>SERVICIOS</h2>
              <ul>
                <li className='mt-1'>
                  <Link
                    href='/#servicios'
                    className='hover:underline font-light'
                  >
                    Internet de Fibra Óptica
                  </Link>
                </li>
                <li className='mt-1'>
                  <Link href='/pqrs' className='hover:underline font-light'>
                    PQR
                  </Link>
                </li>
                <li className='mt-1'>
                  <Link href='/pse' className='hover:underline font-light'>
                    Pago Seguro en Línea
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-2 font-bold'>VELOCIDAD</h2>
              <ul>
                <li>
                  <Link href='/#test' className='hover:underline font-light'>
                    Test de Velocidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-letter border-t border-white py-2'>
          <div className='w-full flex md:items-center md:justify-between px-2 gap-2 justify-center flex-col md:flex-row items-center'>
            <Link
              href='/'
              className='hover:underline text-gray px-2 font-bold text-sm'
            >
              © 2023 CostaNet S.A.S. | Todos los derechos reservados
            </Link>
            <Link
              href='https://github.com/labs-company'
              className='hover:underline text-gray font-bold text-sm'
              target='_blank'
              rel='noopener noreferrer'
            >
              By Labs Company
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
