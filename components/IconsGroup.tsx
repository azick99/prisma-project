'use client'

import { useState } from 'react'
import { Badge } from './ui/badge'
import { RadioGroup } from './ui/radio-group'
import { Handlechange } from './TaskModal'
import { Input } from './ui/input'

const icons = ['👨‍💻', '💬', '☕', '🏋️‍♂️', '📚', '⏰']

const IconsGroup = ({
  icon,
  handleChange,
}: {
  icon: string
  handleChange: Handlechange
}) => {
  const [value, setValue] = useState(icon)

  const handleIconClick = (selectedIcon: string) => {
    setValue(selectedIcon)
    handleChange({
      target: { name: 'icon', value: selectedIcon },
    } as React.ChangeEvent<HTMLInputElement>)
  }

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
            onClick={() => handleIconClick(icon)} // Update state on Badge click
          >
            <Input
              type="radio"
              name="icon"
              value={value}
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
