import Image, { StaticImageData } from 'next/image';

interface IAbout {
  image: string | StaticImageData;
}

export default function ImageAbout({ image }: IAbout) {
  return (
    <figure className='lg:flex-1 lg:flex justify-center flex-col items-center px-4 text-center w-full'>
      <Image
        src={image}
        alt='Hola'
        className='rounded-xl transition-transform overflow-hidden lg:w-[30vw] shadow-xl show-image w-full'
      />
    </figure>
  );
}
