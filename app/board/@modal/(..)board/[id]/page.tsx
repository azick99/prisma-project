import ModalComponent from '@/components/ModelComponent'
import TaskModal from '@/components/TaskModal'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function SingleTask({ params }: { params: { id: string } }) {
  const tasks = await prisma.tasks.findMany()
  const task = tasks.find((task) => task.id === params.id)
  return (
    <ModalComponent>
      <TaskModal task={task} />
    </ModalComponent>
  )
}
