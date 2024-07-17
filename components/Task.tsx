import Image from 'next/image'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Badge } from './ui/badge'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const Task = ({ emoji, title, description, icon, backgroundColor }: Task) => {
  let bg: VariantProps<typeof Badge>['variant'] = 'inProcess'
  if (backgroundColor === 'completed') {
    bg = 'completed'
  }
  if (backgroundColor === 'failed') {
    bg = 'failed'
  }

  return (
    <Card
      className={cn('flex justify-between p-4 rounded-2xl', {
        'bg-[var(--in-process)]': backgroundColor === 'in-process',
        'bg-[var(--completed)]': backgroundColor === 'completed',
        'bg-[var(--failed)]': backgroundColor === 'failed',
        'bg-[var(--task)]': backgroundColor === 'task',
      })}
    >
      <div className='flex flex-col gap-1'>
        <div className="flex gap-5 items-center">
          <CardHeader className="text-task-title p-0">
            <Badge variant="outline">{emoji}</Badge>
          </CardHeader>

          <CardTitle className="text-task-title">{title}</CardTitle>
        </div>
        {description && (
          <CardDescription className="text-descrition ml-16 w-[80%]">
            {description}
          </CardDescription>
        )}
      </div>
      {icon && (
        <Badge variant={bg} className="p-3">
          <Image src={icon} alt="icon" width={20} height={20} />
        </Badge>
      )}
    </Card>
  )
}

export default Task
