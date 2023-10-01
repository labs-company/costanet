'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import facebook from '@/public/redes/facebook.png';
import instagram from '@/public/redes/instagram.png';
import Image from 'next/image';

type TMedia = {
  name: string;
  link: string;
};
type typePropsMedia = {
  mediaOne: TMedia;
  mediaTwo: TMedia;
  mediaThree: TMedia;
};

export default function Media() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <a href='#!' className='hover:underline font-light' onClick={openModal}>
        Redes
      </a>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25'></div>
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex justify-between items-center'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900 py-2'
                    >
                      Redes
                    </Dialog.Title>
                    <a href='#!' onClick={closeModal}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </a>
                  </div>
                  <hr className='border border-gray' />
                  <div className='py-4 grid grid-cols-2'>
                    <div className='py-6'>
                      <div className='flex items-center justify-center gap-5'>
                        <Image
                          src={facebook}
                          alt='Facebook costanet'
                          className='w-auto h-6'
                        />
                        <h5 className='font-monset text-center font-bold'>
                          Facebook
                        </h5>
                      </div>
                      <ListMedia
                        mediaOne={{ name: '', link: '' }}
                        mediaTwo={{ name: '', link: '' }}
                        mediaThree={{ name: '', link: '' }}
                      />
                    </div>
                    <div className='py-6'>
                      <div className='flex items-center justify-center gap-5'>
                        <Image
                          src={instagram}
                          alt='Facebook costanet'
                          className='w-auto h-5'
                        />
                        <h5 className='font-monset text-center font-bold'>
                          Instagram
                        </h5>
                      </div>
                      <ListMedia
                        mediaOne={{ name: '', link: '' }}
                        mediaTwo={{ name: '', link: '' }}
                        mediaThree={{ name: '', link: '' }}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function ListMedia({ mediaOne, mediaTwo, mediaThree }: typePropsMedia) {
  return (
    <div className='pt-4'>
      <ul className='text-center'>
        <li className='py-2'>
          <a href={mediaOne.link} className='hover:underline font-monset py-2'>
            {mediaOne.name}
          </a>
        </li>

        <li className='py-2'>
          <a href={mediaTwo.link} className='hover:underline font-monset py-2'>
            {mediaTwo.name}
          </a>
        </li>

        <li className='py-2'>
          <a
            href={mediaThree.link}
            className='hover:underline font-monset py-2'
          >
            {mediaThree.name}
          </a>
        </li>
      </ul>
    </div>
  );
}
