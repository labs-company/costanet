"use client";

export default function Reload() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <a
      href="/#test"
      className="text-center font-monset bg-letter text-white p-3.5 text-xl w-52 rounded-2xl font-bold hover:shadow-[0px_5px_1rem_0rem_#274A99] hover:-translate-y-2 hover:transition-transform block"
      onClick={handleReload}
    >
      Reiniciar prueba
    </a>
  );
}
