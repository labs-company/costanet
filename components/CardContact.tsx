import Image from "next/image";
import HorariosIcon from "./icons/HorariosIcon";

interface IMessageContact {
  icon: string;
  title: string;
  description: {
    titleDescription: string;
    text?: string;
  };
}

export default function CardContact({
  icon,
  title,
  description,
}: IMessageContact) {
  const SIZE_ICON = "80";
  return (
    <>
      <div className="bg-white shadow-xl w-full px-6 py-10 rounded transition hover:scale-105">
        <figure className="flex items-center justify-center">
          {icon === "horarios" ? (
            <HorariosIcon SIZE_ICON={SIZE_ICON} />
          ) : (
            "icon"
          )}
        </figure>
        <h3 className="mt-4 text-2xl font-bold text-center text-letter">
          {title}
        </h3>
        <ul className="mt-8">
          <li className="uppercase font-bold">
            {description.titleDescription}
          </li>
          <p> 8 am-12 pm. y 2 pm-5:30pm</p>
          <br />
          <li className="uppercase font-bold"> Sábados: </li>
          <p>8 am-2 pm.</p>
        </ul>
      </div>
    </>
  );
}
