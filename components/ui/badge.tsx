import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow border-transparent',
  {
    variants: {
      variant: {
        inProcess: 'bg-[var(--in-process)]',
        completed: 'bg-[var(--completed)]',
        failed: 'bg-[var(--failed)] ',
        outline: 'bg-background',
      },
    },
    defaultVariants: {
      variant: 'inProcess',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
