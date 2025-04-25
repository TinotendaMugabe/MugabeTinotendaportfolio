"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface NeonButtonProps extends React.ComponentProps<typeof Button> {
  glowColor?: string
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, glowColor = "teal", children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "neon-button relative overflow-hidden transition-all",
          `hover:shadow-[0_0_10px_rgba(20,184,166,0.7),0_0_20px_rgba(20,184,166,0.4)]`,
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)
NeonButton.displayName = "NeonButton"

export { NeonButton }
