'use client'
import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function setColors(color: string, badge?: string) {
  if (badge) {
    return `bg-[var(--${badge}-${color})] `
  }
}

const Task = ({
  icon,
  title,
  description,
  status,
  imgSrc,

  id,
}: Task) => {
  
  const path = usePathname()

  const badgeColor = setColors(status, 'badge')
  const isInModal = path === `/board/${id}`
  return (
    <Link
      href={`/board/${id}`}
      className={`border-[2.5px] border-solid border-${
        isInModal ? 'border' : 'transparent'
      } p-1 transition-all hover:border-blue-400 rounded-3xl`}
    >
      <div className={`card-${id} rounded-2xl`}>
        <Card className="flex justify-between p-4">
          <div className="flex flex-col gap-2">
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
          {imgSrc && (
            <Badge className={`p-3 ${badgeColor}`}>
              <Image
                src={imgSrc}
                alt="status"
                width={20}
                height={20}
                loading="eager"
              />
            </Badge>
          )}
        </Card>
      </div>
    </Link>
  )
}

export default Task
