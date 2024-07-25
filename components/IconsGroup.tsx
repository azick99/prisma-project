'use client'
import { useState } from 'react'
import { Badge } from './ui/badge'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const icons = ['👨‍💻', '💬', '☕', '🏋️‍♂️', '📚', '⏰']

const IconsGroup = ({ icon }: { icon: string }) => {
  const [value, setValue] = useState(icon)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted text-input-label">Icon</span>
      <RadioGroup className="flex gap-5">
        {icons.map((icon, index) => (
          <Badge
            key={icon}
            className="p-2"
            role="button"
            variant={value === icon ? 'active' : 'task'}
            onClick={() => setValue(icon)} // Update state on Badge click
          >
            <RadioGroupItem
              value={icon}
              id={String(index)}
              className="hidden"
            />
            <label htmlFor={String(index)} className="pr-0 cursor-pointer">
              {icon}
            </label>
          </Badge>
        ))}
      </RadioGroup>
    </div>
  )
}

export default IconsGroup
