'use client'
import { Card, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { addIcon } from '@/lib/images'

const AddNewTask = () => {
  const isInModal = usePathname() === '/board/new-task'
  return (
    <Link
      href={`/board/new-task`}
      className={`border-[2.5px] border-solid border-${
        isInModal ? 'border' : 'transparent'
      } p-1 transition-all hover:border-blue-400 rounded-3xl`}
    >
      <div className="card-5 rounded-2xl">
        <Card className="flex justify-between p-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-5 items-center">
              <CardHeader className="text-task-title p-0">
                <Badge variant={'inProcess'} className='p-3'>
                  <Image
                    src={addIcon}
                    alt="status"
                    width={28}
                    height={28}
                    loading="eager"
                  />
                </Badge>
              </CardHeader>

              <CardTitle className="text-task-title">Add new task</CardTitle>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  )
}

export default AddNewTask
