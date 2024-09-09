'use client'

import Image from 'next/image'
import { useFormState, useFormStatus } from 'react-dom'
import { trash } from '@/lib/images'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '../ui/button'

const DeleteButton = ({
  id,
  state,
}: {
  id: string
  state: { message: string }
}) => {
  const route = useRouter()
  const { pending } = useFormStatus()

  useEffect(() => {
    if (state?.message === 'Deleted task') route.back()
  }, [state?.message, route])

  return (
    <>
      <input type="hidden" name="id" value={id} />
      <Button
        variant="secondary"
        // type="submit"
        className="flex gap-1 justify-center items-center hover:bg-gray-500 rounded-3xl px-6"
        aria-disabled={pending}
      >
        <span className="text-button-text">
          {pending ? 'Deleting...' : 'Delete'}
        </span>
        <Image src={trash} alt="trash" width={20} height={20} loading="eager" />
      </Button>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </>
  )
}

export default DeleteButton
