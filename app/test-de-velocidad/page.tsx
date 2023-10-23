import Reload from './reload'

export default function TestDeVelocidad() {
  return (
    <section
      id='test'
      className='h-full lg:h-[70vh] grid lg:grid-cols-[50%_50%] auto-cols-auto pt-12'
      style={{
        background:
          'linear-gradient(180deg, #F1F9FE, #F1F9FE 60%, #FFFFFF 55%, #FFFFFF)',
      }}
    >
      <article className='h-full w-full'>
        <iframe
          src='https://openspeedtest.com/speedtest'
          title='Open speedtest'
          className='w-full h-full'
        ></iframe>
      </article>
      <article className='h-full px-4 flex flex-col items-center justify-center py-8'>
        <h1 className='text-5xl font-bold text-vermas-100 font-monset'>
          Test de velocidad
        </h1>
        <ol className='py-6 text-2xl px-6 list-decimal'>
          <li className='py-2 px-2'>
            Al finalizar la prueba obtendrás tu resultado por parte de{' '}
            <a
              href='#!'
              className='text-vermas-50 font-bold font-monset'
            >
              Open speedtest{' '}
            </a>
          </li>
          <li className='py-2 px-2'>
            si deseas volver a repetir la prueba presiona el siguiente boton:
          </li>
        </ol>
        <Reload />
      </article>
    </section>
  )
}
