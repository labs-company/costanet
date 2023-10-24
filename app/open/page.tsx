export default function OpenSpeedTest() {
  return (
    <article className='h-full lg:h-screen w-full relative'>
      <iframe
        src='https://openspeedtest.com/speedtest'
        title='Open speedtest'
        className='w-full h-96 lg:h-full -z-0'
      ></iframe>
    </article>
  )
}
