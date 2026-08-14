"use client"

import { ArrowUpRightIcon } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import type { Project } from "@/lib/portfolio-content"

const rowVariants = {
  rest: { x: 0 },
  hover: { x: 4 },
}

const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3 },
}

export function ProjectList({
  projects,
  repositoriesHref,
}: {
  projects: readonly Project[]
  repositoriesHref: string
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="mt-5">
      <ul className="flex flex-col gap-4 md:gap-2">
        {projects.map((project) => (
          <li key={project.name}>
            <motion.a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} project (opens in a new tab)`}
              initial="rest"
              animate="rest"
              whileHover={shouldReduceMotion ? "rest" : "hover"}
              className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 py-2 focus-visible:outline-1 focus-visible:outline-offset-4"
            >
              <motion.div variants={rowVariants} transition={{ duration: 0.2 }}>
                <h3 className="text-[1.05rem] leading-6 font-medium underline decoration-1 underline-offset-4 md:text-lg">
                  {project.name}
                </h3>
                <p className="mt-1 max-w-2xl leading-6">
                  {project.description}
                </p>
                <p className="mt-1 text-muted-foreground">
                  {project.role} · {project.year}
                </p>
              </motion.div>
              <motion.span
                variants={arrowVariants}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                <ArrowUpRightIcon className="size-5 stroke-[1.6] md:size-6" />
              </motion.span>
            </motion.a>
          </li>
        ))}
      </ul>
      <a
        href={repositoriesHref}
        target="_blank"
        rel="noreferrer noopener"
        className="text-link mt-5 inline-block focus-visible:outline-1 focus-visible:outline-offset-4"
      >
        View repositories
      </a>
    </div>
  )
}
