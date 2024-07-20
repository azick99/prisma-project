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
      <DialogContent>
        <DialogTitle>{children}</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}

export default ModalComponent
