'use client'
import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { setColors } from './Task'
import { closeDuotone, done, doneDuotone, timeAatack } from '@/lib/images'

const statusGroup = [
  {
    id: '1',
    imgSrc: timeAatack,
    title: 'In Progress',
    status: 'in-process',
  },
  {
    id: '2',
    imgSrc: doneDuotone,
    title: 'Completed',
    status: 'completed',
  },
  {
    id: '3',
    imgSrc: closeDuotone,
    title: 'Won’t Do',
    status: 'failed',
  },
]

const StatusGroup = ({ status }: { status: string }) => {
  const [value, setValue] = useState(status)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted text-input-label">Status</span>
      <div>
        <RadioGroup className="grid grid-cols-2 gap-5">
          {statusGroup.map((stat) => {
            const badgeColor = setColors(stat.status, 'badge')
            return (
              <div
                key={stat.id}
                role="button"
                onClick={() => setValue(stat.id)}
                className={`flex items-center justify-between transition-all cursor-pointer p-0.5 pr-3 border-[1.5px] border-[var(--task)] rounded-2xl w-full hover:border-blue-300 ${
                  value === stat.status && 'border-border'
                }`}
              >
                <div className="flex gap-2 items-center">
                  <Badge className={`p-3 ${badgeColor}`}>
                    <Image
                      src={stat.imgSrc}
                      alt={stat.title}
                      width={20}
                      height={20}
                      loading="eager"
                    />
                  </Badge>
                  <RadioGroupItem
                    value={stat.id}
                    id={stat.id}
                    className="hidden"
                  />

                  <label
                    htmlFor={String(stat.id)}
                    className="pr-0 cursor-pointer text-task-button"
                  >
                    {stat.title}
                  </label>
                </div>
                {value === stat.status && (
                  <div className="bg-border rounded-full  justify-center items-center">
                    <Image
                      src={done}
                      alt="active"
                      width={12}
                      height={12}
                      loading="eager"
                      className="m-1"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </RadioGroup>
      </div>
    </div>
  )
}

export default StatusGroup
