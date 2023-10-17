'use client'
import { useState, useEffect } from 'react'

export function SpinnerAbout() {
  const [scrollBorder, setScrollborder] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollborder(window.scrollY)
    })
  }, [])
  return (
    <span
      className={`border-4 border-letter h-2 block w-full lg:w-[50vw] shadow ${
        scrollBorder >= 300 ? 'animated-span-left' : ''
      }`}
    ></span>
  )
}

export function SpinnerMision() {
  const [scrollBorder, setScrollborder] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollborder(window.scrollY)
    })
  }, [])

  return (
    <span
      className={`border-4 border-letter h-2 block w-full lg:w-[50vw] shadow ${
        scrollBorder >= 520 ? 'animated-span-right' : ''
      }`}
    ></span>
  )
}
export function SpinnerVision() {
  const [scrollBorder, setScrollborder] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollborder(window.scrollY)
    })
  }, [])
  return (
    <span
      className={`border-4 border-letter h-2 block w-full lg:w-[50vw] shadow ${
        scrollBorder >= 1100 ? 'animated-span-left' : ''
      }`}
    ></span>
  )
}
