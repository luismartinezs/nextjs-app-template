"use client"

import NextLink, { type LinkProps } from "next/link"
import { cn } from "@/shared/utils/cn"

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const Link = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <NextLink
      className={cn(
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}