"use client"

import { useEffect, useState } from "react"

export default function NeonCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition duration-300 ease-in-out"
      style={{
        opacity: position.x > 0 ? 0.7 : 0,
      }}
    >
      <div
        className="absolute h-[200px] w-[200px] rounded-full bg-teal-500 blur-[80px]"
        style={{
          left: `${position.x - 100}px`,
          top: `${position.y - 100}px`,
        }}
      />
    </div>
  )
}
