'use client'

import Image from 'next/image'
import IconsGroup from './IconsGroup'
import StatusGroup from './StatusGroup'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { done } from '@/lib/images'
import DeleteButton from './buttons/DeleteButton'
import AddTaskButton from './buttons/AddTaskButton'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import addTask from '@/app/actions/addTask'

const formInitailState = {
  message: '',
}

export type Handlechange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void

const TaskModal = ({ task }: { task: Task | undefined }) => {
  const initialState = {
    id: task?.id || '',
    icon: task?.icon || '',
    description: task?.description || '',
    title: task?.title || 'Add new task',
    status: task?.status || 'task',
  }
  const [state, formAction] = useFormState(addTask, formInitailState) // Use the combined function
  const [taskData, setTaskData] = useState(initialState)

  const handleChange: Handlechange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value })
  }

  return (
    <form action={formAction}>
      <span className="text-descrition font-semibold ">Task details</span>
      <div className="flex flex-col gap-6 mt-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-input-label text-muted">
            Task name
          </label>
          <Input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            className="rounded-lg focus-visible:ring-border focus-visible:ring-1 focus-visible:border-border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-input-label text-muted">
            Description
          </label>
          <Textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            rows={7}
            placeholder="Enter a short description"
            className="rounded-xl focus-visible:ring-border focus-visible:ring-1 focus-visible:border-border placeholder:text-muted"
          />
        </div>
        <IconsGroup icon={taskData.icon} handleChange={handleChange} />
        <StatusGroup status={taskData.status} handleChange={handleChange} />
        <div className="flex mt-20 justify-end gap-4">
          {taskData.id ? <DeleteButton state={state} id={taskData.id} /> : ''}
          {taskData.id ? (
            <Button
              type="submit"
              className="flex gap-1 justify-center items-center hover:bg-blue-800 rounded-3xl px-6"
            >
              <span className="text-button-text">Save </span>
              <Image
                src={done}
                alt="done"
                width={20}
                height={20}
                loading="eager"
              />
            </Button>
          ) : (
            <AddTaskButton state={state} />
          )}
        </div>
      </div>
    </form>
  )
}

export default TaskModal
