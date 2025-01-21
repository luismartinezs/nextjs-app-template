"use client"

import NextImage, { type ImageProps } from "next/image"
import { cn } from "@/shared/utils/cn"

export const Image = ({
  className,
  alt,
  ...props
}: ImageProps) => {
  return (
    <NextImage
      className={cn(
        "transition-all duration-300",
        className
      )}
      alt={alt}
      {...props}
    />
  )
}