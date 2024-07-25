import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center border p-2  rounded-xl  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  border-transparent',
  {
    variants: {
      variant: {
        inProcess: 'bg-[var(--badge-in-process)]',
        completed: 'bg-[var(--badge-completed)]',
        failed: 'bg-[var(--badge-failed)] ',
        task: 'bg-[var(--task)]',
        active: 'bg-[var(--in-process)]',
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
