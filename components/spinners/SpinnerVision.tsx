"use client";

import { useState } from "react";

export default function AttachBorder() {
  const [scrollBorder, setScrollborder] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollborder(window.scrollY);
  });
  console.log(scrollBorder);
  return (
    <span
      className={`border-4 border-letter h-2 block w-full lg:w-[50vw] shadow ${
        scrollBorder >= 1100 ? "animated-span-left" : ""
      }`}
    ></span>
  );
}
