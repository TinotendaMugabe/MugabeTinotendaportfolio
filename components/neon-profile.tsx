"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface NeonProfileProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function NeonProfile({ src, alt, width, height }: NeonProfileProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-full border-4 border-teal-500 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute inset-0 z-10 bg-teal-500 blur-[40px] transition-opacity duration-300 ${
          isHovered ? "opacity-40" : "opacity-0"
        }`}
        style={{
          left: `${mousePosition.x - 100}px`,
          top: `${mousePosition.y - 100}px`,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
        }}
      />
      <div
        className={`absolute inset-0 z-0 rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 opacity-0 blur-xl transition-opacity duration-300 ${
          isHovered ? "opacity-70" : ""
        }`}
      />
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="relative z-20 object-cover"
        priority
      />
    </div>
  )
}
