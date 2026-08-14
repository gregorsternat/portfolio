"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

export function IntroReveal({ lines }: { lines: readonly string[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="flex max-w-5xl flex-col gap-2 text-[0.9375rem] leading-6 md:text-base"
    >
      {lines.map((line, index) => (
        <motion.p
          key={line}
          custom={index}
          className="motion-safe-content"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: (itemIndex: number) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: itemIndex * 0.08,
                duration: 0.5,
                ease,
              },
            }),
          }}
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  )
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
      className={cn("motion-safe-content", className)}
    >
      {children}
    </motion.div>
  )
}
