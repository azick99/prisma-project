'use client'
import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Task = ({
  icon,
  title,
  description,
  status,
  backgroundColor,
  id,
}: Task ) => {
  const path = usePathname()

  const isInModal = path === `/board/${id}`

  let bg: VariantProps<typeof Badge>['variant'] = 'inProcess'
  if (backgroundColor === 'completed') {
    bg = 'completed'
  }
  if (backgroundColor === 'failed') {
    bg = 'failed'
  }

  return (
    <Link
      href={`/board/${id}`}
      className={`border-[2.5px] border-solid border-${
        isInModal ? 'border' : 'transparent'
      } p-1 transition-all hover:border-blue-400  rounded-3xl`}
    >
      <Card
        className={cn('flex justify-between p-4 rounded-2xl', {
          'bg-[var(--in-process)]': backgroundColor === 'in-process',
          'bg-[var(--completed)]': backgroundColor === 'completed',
          'bg-[var(--failed)]': backgroundColor === 'failed',
          'bg-[var(--task)]': backgroundColor === 'task',
        })}
      >
        <div className="flex flex-col gap-1">
          <div className="flex gap-5 items-center">
            <CardHeader className="text-task-title p-0">
              <Badge variant="outline">{icon}</Badge>
            </CardHeader>

            <CardTitle className="text-task-title">{title}</CardTitle>
          </div>
          {description && (
            <CardDescription className="text-descrition ml-16 w-[80%]">
              {description}
            </CardDescription>
          )}
        </div>
        {status && (
          <Badge variant={bg} className="p-3">
            <Image src={status} alt="status" width={20} height={20} />
          </Badge>
        )}
      </Card>
    </Link>
  )
}

export default Task
