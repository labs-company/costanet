import { ISizeIcon } from './ISizeIcon'

export default function HorariosIcon({ SIZE_ICON }: ISizeIcon) {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-alarm'
        width={SIZE_ICON}
        height={SIZE_ICON}
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
        <path d='M12 10l0 3l2 0'></path>
        <path d='M7 4l-2.75 2'></path>
        <path d='M17 4l2.75 2'></path>
      </svg>
    </>
  )
}
