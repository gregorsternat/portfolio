import type { AnchorHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean
}

export function TextLink({
  children,
  className,
  external = false,
  ...props
}: TextLinkProps) {
  return (
    <a
      className={cn("text-link", className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      {...props}
    >
      {children}
    </a>
  )
}
