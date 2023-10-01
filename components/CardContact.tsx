import HorariosIcon from './icons/HorariosIcon';
import LocationIcon from './icons/LocationIcon';
import GmailIcon from './icons/GmailIcon';
import TelephoneIcon from './icons/TelephoneIcon';

interface IMessageContact {
  icon: string;
  title: string;
  description: {
    titleDescription: string;
    titleDescriptionSecundary?: string;
    titleDescriptionTerceary?: string;
    text?: string;
    textSecundary?: string;
    textTerceary: string;
  };
}

export default function CardContact({
  icon,
  title,
  description,
}: IMessageContact) {
  const SIZE_ICON = '80';
  return (
    <>
      <div className='bg-white shadow-xl min-w-max px-6 py-10 rounded transition scale-90 hover:scale-100 flex-1'>
        <figure className='flex items-center justify-center'>
          {icon === 'horarios' ? (
            <HorariosIcon SIZE_ICON={SIZE_ICON} />
          ) : icon === 'ubicacion' ? (
            <LocationIcon SIZE_ICON={SIZE_ICON} />
          ) : icon === 'correos' ? (
            <GmailIcon SIZE_ICON={SIZE_ICON} />
          ) : icon === 'llamadas' ? (
            <TelephoneIcon SIZE_ICON={SIZE_ICON} />
          ) : (
            <>{'Something'}</>
          )}
        </figure>
        <h3 className='mt-4 text-2xl font-bold text-center text-letter'>
          {title}
        </h3>
        <ul className='mt-8'>
          <li className='font-bold'>{description.titleDescription}</li>
          <p> {description.text}</p>
          <br />
          <li className='font-bold'>
            {' '}
            {description.titleDescriptionSecundary}{' '}
          </li>
          <p>{description.textSecundary}</p>
          <br />
          <li className='font-bold'>
            {' '}
            {description.titleDescriptionTerceary}{' '}
          </li>
          <p>{description.textTerceary}</p>
        </ul>
      </div>
    </>
  );
}
