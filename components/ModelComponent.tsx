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
      <DialogContent className=" sm:left-[65%] left-3 border-0 sm:-translate-x-[30%] -translate-x-0 sm:w-[49vw] w-[96vw] h-[95vh] sm:min-h-[400px] min-h-[380px] sm:max-w-xl max-w-full py-4 px-5 overflow-y-auto">
        <DialogTitle>{children}</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}

export default ModalComponent
