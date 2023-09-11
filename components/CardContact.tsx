import Image from "next/image";

interface MessageContact {
  icon: string;
  title: string;
  description: string;
}

export default function CardContact() {
  return (
    <>
      <div className="bg-white shadow-xl w-full px-6 py-10 rounded transition hover:scale-110">
        <figure className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-alarm"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M12 10l0 3l2 0"></path>
            <path d="M7 4l-2.75 2"></path>
            <path d="M17 4l2.75 2"></path>
          </svg>
        </figure>
        <h3 className="mt-4 text-2xl font-bold text-center text-letter">
          Horarios
        </h3>
        <p className="text-xl text-center text-sky-200">zzzz</p>
      </div>
    </>
  );
}
