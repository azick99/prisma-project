'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent } from './ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'

const ModalComponent = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const handleClose = () => {
    router.back()
  }
  return (
    <Dialog defaultOpen={true} onOpenChange={handleClose}>
      <DialogContent className=" left-[65%] border-0 -translate-x-[30%] w-[49vw] h-[95vh] min-h-[400px] max-w-2xl py-4 px-5 overflow-y-auto">
        <DialogTitle>{children}</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}

export default ModalComponent
