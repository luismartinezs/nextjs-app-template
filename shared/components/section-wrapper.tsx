import { cn } from "@/shared/utils/cn"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn("container mx-auto py-12 md:py-16 lg:py-20", className)}>
      {children}
    </section>
  )
}