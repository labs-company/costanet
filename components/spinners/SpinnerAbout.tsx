"use client";

import { useState, useEffect } from "react";

export default function AttachBorder() {
  const [scrollBorder, setScrollborder] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollborder(window.scrollY);
    });
  }, []);
  return (
    <span
      className={`border-4 border-letter h-2 block w-full lg:w-[50vw] shadow ${
        scrollBorder >= 300 ? "animated-span-left" : ""
      }`}
    ></span>
  );
}
