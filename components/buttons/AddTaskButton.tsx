'use client'
import Image from 'next/image'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { addIcon } from '@/lib/images'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export type TaskButtonProps = {
  state: { message: string }
}

const AddTaskButton = ({ state }: TaskButtonProps) => {
  const route = useRouter()
  const { pending } = useFormStatus()

  useEffect(() => {
    if (state?.message === 'Added task') route.back()
  })

  return (
    <>
      <Button
        type="submit"
        className="flex gap-1 justify-center items-center hover:bg-blue-800 rounded-3xl px-6"
        aria-disabled={pending}
      >
        <span className="text-button-text">
          {pending ? 'Adding...' : 'Add'}
        </span>
        <Image src={addIcon} alt="add" width={20} height={20} loading="eager" />
      </Button>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </>
  )
}

export default AddTaskButton
