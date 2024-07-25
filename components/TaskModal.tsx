import Image from 'next/image'
import IconsGroup from './IconsGroup'
import StatusGroup from './StatusGroup'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { done, trash } from '@/lib/images'

const TaskModal = ({ task }: { task: Task | undefined }) => {
  if (!task) return <>No changes</>
  const { id, icon, title, description, status } = task
  return (
    <>
      <h2 className="text-descrition font-semibold ">Task details</h2>
      <form className="flex flex-col gap-6 mt-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-input-label text-muted">
            Task name
          </label>
          <Input
            type="text"
            value={title}
            className="rounded-lg focus-visible:ring-border focus-visible:ring-1 focus-visible:border-border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-input-label text-muted">
            Descrition
          </label>
          <Textarea
            value={description as string}
            rows={7}
            placeholder="Enter a short description"
            className="rounded-xl focus-visible:ring-border focus-visible:ring-1 focus-visible:border-border placeholder:text-muted"
          />
        </div>
        <IconsGroup icon={icon} />
        <StatusGroup status={status} />
        <div className="flex mt-20 justify-end gap-4">
          <Button
            variant="secondary"
            type="button"
            className="flex gap-1 justify-center items-center hover:bg-gray-500 rounded-3xl px-6"
          >
            <span className="text-button-text">Delete</span>
            <Image
              src={trash}
              alt="trash"
              width={20}
              height={20}
              loading="eager"
            />
          </Button>
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
        </div>
      </form>
    </>
  )
}

export default TaskModal
